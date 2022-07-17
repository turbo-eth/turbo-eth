import * as React from 'react';

import classNames from 'classnames';
import { utils } from 'ethers';
import useERC20ContractRead from '../hooks/useERC20Read';
import { useAccount } from 'wagmi';

interface WalletERC20BalanceProps {
  className?: string;
  contractAddress: string;
  msg?: string;
  msgActive: boolean;
}

export const WalletERC20Balance = ({
  className,
  contractAddress,
  msg,
  msgActive
}: WalletERC20BalanceProps) => {
  const classes = classNames(className, 'WalletERC20Balance');
const {data: accountData} = useAccount()
  const { data, isError, isLoading } = useERC20ContractRead(contractAddress, 'balanceOf', [
    accountData?.address,
  ]);

  if (isLoading) return null
  if ((isError || !isError && !data) && !msgActive) return null
  if ((isError || !isError && !data) && msgActive) return <span className={className}>{msg}</span>
  return <div className={classes}>{utils.formatEther(data || '0')}</div>;
};

WalletERC20Balance.defaultProps = {
  msg:'Connect Wallet',
  msgActive: false,
  truncate: false,
}

export default WalletERC20Balance;

