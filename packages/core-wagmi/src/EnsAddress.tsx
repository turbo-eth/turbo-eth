import * as React from 'react';
import classNames from 'classnames';
import { useEnsAddress } from 'wagmi';

interface EnsAddressProps {
  className?: string;
  name?: string;
  msg?: string;
  msgActive: boolean;
}

export const EnsAddress = ({ className, name, msg, msgActive }: EnsAddressProps) => {
  const classes = classNames(className, 'EnsAddress');
  const { data, isError, isLoading } = useEnsAddress({
    name: name,
  });

  if (isLoading) return null
  if ((isError || !isError && !data) && !msgActive) return null
  if ((isError || !isError && !data) && msgActive) return <span className={className}>{msg}</span>
  return <div className={classes}>{data}</div>;
};

EnsAddress.defaultProps = {
  msg:'Connect Wallet',
  msgActive: false,
  truncate: false,
}

export default EnsAddress;
