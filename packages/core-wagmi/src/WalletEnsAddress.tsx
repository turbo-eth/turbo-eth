import * as React from 'react';
import classNames from 'classnames';
import { useAccount, useEnsAddress } from 'wagmi'

interface WalletEnsAddressProps {
 className?: string;
 name: string;
 msg?: string;
  msgActive: boolean;
}

export const WalletEnsAddress = ({className, name, msg, msgActive}: WalletEnsAddressProps) => { 
 const classes = classNames(className, 'WalletEnsAddress'); 
 const { isError, isLoading } = useAccount()
 const { data: dataEnsAddress } = useEnsAddress({
    name: name,
  })

  if (isLoading) return null
  if ((isError || !isError && !dataEnsAddress) && !msgActive) return null
  if ((isError || !isError && !dataEnsAddress) && msgActive) return <span className={className}>{msg}</span>
  return <div className={classes}>{dataEnsAddress}</div>
}

WalletEnsAddress.defaultProps = {
  msg:'Connect Wallet',
  msgActive: false,
  truncate: false,
}

export default WalletEnsAddress;