import * as React from 'react';

import classNames from 'classnames';
import { utils } from 'ethers';
import useERC20ContractRead from './useERC20ContractRead';
import { useAccount } from 'wagmi';

interface WalletERC20BalanceProps {
  className?: string;
  token: string;
}

export const WalletERC20Balance = ({
  className,
  token,
}: WalletERC20BalanceProps) => {
  const classes = classNames(className, 'WalletERC20Balance');
const {data: accountData} = useAccount()
  const { data, isError, isLoading } = useERC20ContractRead(token, 'balanceOf', [
    accountData?.address,
  ]);

  if (isError || isLoading) return null;
  return <div className={classes}>{utils.formatEther(data || '0')}</div>;
};

export default WalletERC20Balance;
