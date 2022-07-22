import * as React from 'react';
import classNames from 'classnames';
import { useEnsName } from 'wagmi';
import Address from './Address';

interface EnsNameProps {
  className?: string;
  address?: string;
  truncate: boolean;
}

export const EnsName = ({ className, address, truncate = false }: EnsNameProps) => {
  const classes = classNames(className, 'EnsName');
  const { data, isError, isLoading } = useEnsName({
    address: address,
  });
  if (isLoading) return null;
  if (isError || !isLoading) {
    return <Address truncate={truncate} address={address} className={classes} />;
  }
  return <div className={classes}>{data}</div>;
};

export default EnsName;