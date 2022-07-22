import { BaseProvider } from '@ethersproject/providers';
import ERC1155 from './specs/erc1155';
import ERC721 from './specs/erc721';
import { utils } from '@ensdomains/ens-avatar';
import URI from './specs/uri';

export async function handleSettled(promises: Promise<any>[]) {
  const values = [];
  const results = await Promise.allSettled(promises);
  for (let result of results) {
    if (result.status === 'fulfilled') values.push(result.value);
    else if (result.status === 'rejected') values.push(null);
  }
  return values;
}

export interface Spec {
  getMetadata: (
    provider: BaseProvider,
    ownerAddress: string | undefined | null,
    contractAddress: string,
    tokenID: string
  ) => Promise<any>;
}

export const specs: { [key: string]: new () => Spec } = Object.freeze({
  erc721: ERC721,
  erc1155: ERC1155,
});

export async function parseAvatarString(
  walletAddress: string,
  avatarURI: string,
  provider: BaseProvider
) {
  // test case-insensitive in case of uppercase records
  if (!/eip155:/i.test(avatarURI)) {
    const uriSpec = new URI();
    const metadata = await uriSpec.getMetadata(avatarURI);
    return utils.getImageURI({ metadata });
  }

  // parse retrieved avatar uri
  const { chainID, namespace, contractAddress, tokenID } =
    utils.parseNFT(avatarURI);

  // detect avatar spec by namespace
  const Spec = specs[namespace];
  if (!Spec) throw new Error(`Unsupported namespace: ${namespace}`);
  const spec = new Spec();

  // add meta information of the avatar record
  const host_meta = {
    chain_id: chainID,
    namespace,
    contract_address: contractAddress,
    token_id: tokenID,
    reference_url: `https://opensea.io/assets/${contractAddress}/${tokenID}`,
  };

  const metadata = await spec.getMetadata(
    provider,
    walletAddress,
    contractAddress,
    tokenID
  );
  const meta_ = { host_meta, ...metadata };
  return utils.getImageURI({ metadata: meta_ });
}
