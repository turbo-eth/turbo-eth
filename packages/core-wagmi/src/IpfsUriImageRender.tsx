//@ts-nocheck
import * as React from 'react';
import classNames from 'classnames';
import { toLink, toURL } from 'to-ipfs-url';

interface IpfsUriImageRenderProps {
  className?: string;
  uri: string;
  alt?: string;
}

export const IpfsUriImageRender = ({
  className,
  uri,
  alt = '',
}: IpfsUriImageRenderProps) => {
  const classes = classNames(className, 'IpfsUriImageRender');

  const [imgSrc, setImageSrc] = React.useState<any>('');
  React.useEffect(() => {
    if (uri) {
      setImageSrc(uri.replace('ipfs://', 'https://ipfs.io/ipfs/'));
    }
  }, [uri]);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={classes} src={imgSrc} alt={alt} />
  );
};

export default IpfsUriImageRender;
