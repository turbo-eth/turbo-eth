import axios, { Axios } from 'axios';
import { Buffer } from 'buffer/';
import * as multiformats from 'multiformats';
import createDOMPurify from 'dompurify';
import isSVG from 'is-svg';
import { urlJoin } from 'url-join-ts';

const IPFS_SUBPATH = '/ipfs/';
const IPNS_SUBPATH = '/ipns/';
const ipfsRegex =
  /(?<protocol>ipfs:\/|ipns:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/;
const base64Regex = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/;
const dataURIRegex = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*)?(,)/;

export function isCID(hash: any) {
  // check if given string or object is a valid IPFS CID
  try {
    if (typeof hash === 'string') {
      return Boolean(multiformats.CID.parse(hash));
    }

    return Boolean(multiformats.CID.asCID(hash));
  } catch (_error) {
    return false;
  }
}

// simple assert without nested check
export function assert(condition: any, message: string) {
  if (!condition) {
    throw message;
  }
}
export interface BaseError {}
export class BaseError extends Error {
  __proto__: Error;
  constructor(message?: string) {
    const trueProto = new.target.prototype;
    super(message);

    this.__proto__ = trueProto;
  }
}
export class NFTURIParsingError extends BaseError {}
export function parseNFT(uri: string, seperator: string = '/') {
  // parse valid nft spec (CAIP-22/CAIP-29)
  // @see: https://github.com/ChainAgnostic/CAIPs/tree/master/CAIPs
  try {
    assert(uri, 'parameter URI cannot be empty');

    if (uri.startsWith('did:nft:')) {
      // convert DID to CAIP
      uri = uri.replace('did:nft:', '').replace(/_/g, '/');
    }

    const [reference, asset_namespace, tokenID] = uri.split(seperator);
    const [eip_namespace, chainID] = reference.split(':');
    const [erc_namespace, contractAddress] = asset_namespace.split(':');

    assert(
      eip_namespace && eip_namespace.toLowerCase() === 'eip155',
      'Only EIP-155 is supported'
    );
    assert(chainID, 'chainID not found');
    assert(contractAddress, 'contractAddress not found');
    assert(erc_namespace, 'erc namespace not found');
    assert(tokenID, 'tokenID not found');

    return {
      chainID: Number(chainID),
      namespace: erc_namespace.toLowerCase(),
      contractAddress,
      tokenID,
    };
  } catch (error) {
    throw new NFTURIParsingError(`${error as string} - ${uri}`);
  }
}

export function resolveURI(
  uri: string,
  customGateway?: string
): { uri: string; isOnChain: boolean; isEncoded: boolean } {
  // resolves uri based on its' protocol
  const isEncoded = base64Regex.test(uri);
  if (isEncoded || uri.startsWith('http')) {
    return { uri, isOnChain: isEncoded, isEncoded };
  }

  const ipfsGateway = customGateway || 'https://ipfs.io';
  const ipfsRegexpResult = uri.match(ipfsRegex);
  const {
    protocol,
    subpath,
    target,
    subtarget = '',
  } = ipfsRegexpResult?.groups || {};
  if ((protocol === 'ipns:/' || subpath === 'ipns/') && target) {
    return {
      uri: urlJoin(ipfsGateway, IPNS_SUBPATH, target, subtarget),
      isOnChain: false,
      isEncoded: false,
    };
  } else if (isCID(target)) {
    // Assume that it's a regular IPFS CID and not an IPNS key
    return {
      uri: urlJoin(ipfsGateway, IPFS_SUBPATH, target, subtarget),
      isOnChain: false,
      isEncoded: false,
    };
  } else {
    // we may want to throw error here
    return {
      uri: uri.replace(dataURIRegex, ''),
      isOnChain: true,
      isEncoded: false,
    };
  }
}

function _sanitize(data: string, jsDomWindow?: any): Buffer {
  let domWindow;
  try {
    domWindow = window;
  } catch {
    // if js process run under nodejs require jsdom window
    if (!jsDomWindow) {
      throw Error('In node environment JSDOM window is required');
    }
    domWindow = jsDomWindow;
  }
  const DOMPurify = createDOMPurify(domWindow as any);
  // purges malicious scripting from svg content
  const cleanDOM = DOMPurify.sanitize(data);
  return Buffer.from(cleanDOM);
}

export interface ImageURIOpts {
  metadata: any;
  customGateway?: string;
  jsdomWindow?: any;
}

export function getImageURI({
  metadata,
  customGateway,
  jsdomWindow,
}: ImageURIOpts) {
  // retrieves image uri from metadata, if image is onchain then convert to base64
  const { image, image_url, image_data } = metadata;

  const _image = image || image_url || image_data;
  assert(_image, 'Image is not available');
  const { uri: parsedURI } = resolveURI(_image || '', customGateway);

  if (parsedURI.startsWith('data:') || parsedURI.startsWith('http')) {
    return parsedURI;
  }

  if (isSVG(parsedURI)) {
    // svg - image_data
    const data = _sanitize(parsedURI, jsdomWindow);
    return `data:image/svg+xml;base64,${data.toString('base64')}`;
  }
  return null;
}

export function createCacheAdapter(fetch: Axios, ttl: number) {
  // creates cache adapter for axios
  const { setupCache } = require('axios-cache-interceptor');
  setupCache(fetch, {
    ttl: ttl * 1000,
  });
}

function createFetcher({ ttl }: { ttl?: number }) {
  const _fetch = axios.create();
  if (ttl && ttl > 0) {
    createCacheAdapter(_fetch, ttl);
  }
  return _fetch;
}

export const fetch = createFetcher({});
