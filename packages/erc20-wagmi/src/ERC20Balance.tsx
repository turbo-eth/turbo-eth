import * as React from 'react';

import classNames from 'classnames';
import { utils } from 'ethers';
import useERC20ContractRead from './useERC20ContractRead';

interface ERC20BalanceProps {
  className?: string;
  account?: string;
  token: string;
}

export const ERC20Balance = ({
  className,
  account,
  token,
}: ERC20BalanceProps) => {
  const classes = classNames(className, 'ERC20Balance');

  const { data, isError, isLoading } = useERC20ContractRead(token, 'balanceOf', [
    account,
  ]);

  console.log(data);

  if (isError || isLoading) return null;
  return <div className={classes}>{utils.formatEther(data || '0')}</div>;
};

export default ERC20Balance;
