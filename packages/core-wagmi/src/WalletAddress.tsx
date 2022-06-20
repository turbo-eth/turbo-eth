import * as React from 'react';
import classNames from 'classnames';
import { useAccount } from 'wagmi'

interface WalletAddressProps {
 className?: string;
}

export const WalletAddress = ({className}: WalletAddressProps) => { 
 const classes = classNames(className, 'WalletAddress'); 
 const { data, isError, isLoading } = useAccount()

  if (isLoading || isError) return null
  return <div className={classes}>{data?.address}</div>
}

export default WalletAddress;