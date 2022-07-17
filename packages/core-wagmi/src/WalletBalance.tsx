import * as React from 'react';
import classNames from 'classnames';
import { useAccount, useBalance } from 'wagmi'

interface WalletBalanceProps {
  className?: string;
  msg?: string;
  msgActive: boolean;
}

export const WalletBalance = ({className, msg, msgActive}: WalletBalanceProps) => { 
 const classes = classNames(className, 'WalletBalance'); 
 const { data, isError, isLoading } = useAccount()
 const { data: dataBalance } = useBalance({
    addressOrName: data?.address,
  })

  if (isLoading) return null
  if ((isError || !isError && !data) && !msgActive) return null
  if ((isError || !isError && !data) && msgActive) return <span className={className}>{msg}</span>
  return <div className={classes}>{dataBalance?.formatted} {dataBalance?.symbol}</div>
}

WalletBalance.defaultProps = {
  msg:'Connect Wallet',
  msgActive: false,
  truncate: false,
}

export default WalletBalance;