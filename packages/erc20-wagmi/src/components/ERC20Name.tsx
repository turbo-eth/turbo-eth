import * as React from 'react';

import classNames from 'classnames';
import useERC20ContractRead from '../hooks/useERC20Read';

interface ERC20NameProps {
  className?: string;
  userAddress?: string;
  contractAddress: string;
}

export const ERC20Name = ({
  className,
  contractAddress,
}: ERC20NameProps) => {
  const classes = classNames(className, 'ERC20Name');
  const { data, isError, isLoading } = useERC20ContractRead(contractAddress, 'name');
  if (isError || isLoading) return null;
  return <span className={classes}>{data}</span>;
};

export default ERC20Name;
