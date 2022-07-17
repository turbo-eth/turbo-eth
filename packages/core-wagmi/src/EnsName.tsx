import * as React from 'react';
import classNames from 'classnames';
import { useEnsName } from 'wagmi';
import Address from './Address';

interface EnsNameProps {
  className?: string;
  address?: string;
}

export const EnsName = ({ className, address }: EnsNameProps) => {
  const classes = classNames(className, 'EnsName');
  const { data, error, isError, isLoading } = useEnsName({
    address: address,
  });

  console.log(data, error, isLoading, isError);

  if (isLoading) return null;
  if (isError || !isLoading)
    return <Address truncate address={address} className={classes} />;
  return <div className={classes}>{data}</div>;
};

export default EnsName;
