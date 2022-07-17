import * as React from 'react';

import classNames from 'classnames';
import { utils } from 'ethers';
import useERC20ContractRead from '../hooks/useERC20Read';

interface ERC20BalanceProps {
  className?: string;
  userAddress?: string;
  contractAddress: string;
}

export const ERC20Balance = ({
  className,
  userAddress,
  contractAddress,
}: ERC20BalanceProps) => {
  const classes = classNames(className, 'ERC20Balance');

  const { data, isError, isLoading } = useERC20ContractRead(contractAddress, 'balanceOf', [
    userAddress,
  ]);

  if (isError || isLoading) return null;
  return <div className={classes}>{utils.formatEther(data || '0')}</div>;
};

export default ERC20Balance;
