/* eslint-disable @next/next/no-img-element */
//@ts-nocheck
import * as React from 'react';
import classNames from 'classnames';
import { toLink, toURL } from 'to-ipfs-url';

interface IpfsUriImageBackgroundRenderProps {
  className?: string;
  uri: string;
  alt?: string;
}

export const IpfsUriImageBackgroundRender = ({
  className,
  uri,
  alt = '',
}: IpfsUriImageBackgroundRenderProps) => {
  const classes = classNames(className, 'IpfsUriImageBackgroundRender');

  const [imgSrc, setImageSrc] = React.useState<any>('');
  React.useEffect(() => {
    if (uri) {
      setImageSrc(uri.replace('ipfs://', 'https://ipfs.io/ipfs/'));
    }
  }, [uri]);
  return (
    <div className={classes} style={{ position: 'relative' }}>
      <div
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '100%',
        }}
      />
    </div>
  );
};

export default IpfsUriImageBackgroundRender;
