import * as React from 'react';
import classNames from 'classnames';
import { useEnsAddress } from 'wagmi';

interface EnsAddressProps {
  className?: string;
  name?: string;
}

export const EnsAddress = ({ className, name }: EnsAddressProps) => {
  const classes = classNames(className, 'EnsAddress');
  const { data, isError, isLoading } = useEnsAddress({
    name: name,
  });

  if (isLoading || isError) return null;
  return <div className={classes}>{data}</div>;
};

export default EnsAddress;
