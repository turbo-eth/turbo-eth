import * as React from 'react';
import classNames from 'classnames';
import { useAccount } from 'wagmi'
import Address from './Address';

interface WalletAddressProps {
 className?: string;
 msg?: string;
 msgActive: boolean;
 truncate: boolean;
}

export const WalletAddress = ({className, msg, msgActive, truncate}: WalletAddressProps) => { 
 const classes = classNames(className, 'WalletAddress'); 
 const { data, isError, isLoading } = useAccount()
  if (isLoading) return null
  if ((isError || !isError && !data) && !msgActive) return null
  if ((isError || !isError && !data) && msgActive) return <span className={className}>{msg}</span>
  return <div className={classes}><Address address={data?.address} truncate={truncate} /> </div>
}

WalletAddress.defaultProps = {
  msg:'Connect Wallet',
  msgActive: false,
  truncate: false,
}

export default WalletAddress;