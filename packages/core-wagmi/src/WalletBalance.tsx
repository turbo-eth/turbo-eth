import * as React from 'react';
import classNames from 'classnames';
import { useAccount, useBalance } from 'wagmi'

interface WalletBalanceProps {
 className?: string;
}

export const WalletBalance = ({className}: WalletBalanceProps) => { 
 const classes = classNames(className, 'WalletBalance'); 
 const { data, isError, isLoading } = useAccount()
 const { data: dataBalance } = useBalance({
    addressOrName: data?.address,
  })

  if (isLoading || isError) return null
  return <div className={classes}>{dataBalance?.formatted} {dataBalance?.symbol}</div>
}

export default WalletBalance;