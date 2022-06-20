import * as React from 'react';
import classNames from 'classnames';
import { useAccount, useEnsName } from 'wagmi'

interface WalletEnsAddressProps {
 className?: string;
}

export const WalletEnsAddress = ({className}: WalletEnsAddressProps) => { 
 const classes = classNames(className, 'WalletEnsAddress'); 
 const { data, isError, isLoading } = useAccount()
 const { data: dataEnsAddress } = useEnsName({
    address: data?.address,
  })

  if (isLoading || isError) return null
  return <div className={classes}>{dataEnsAddress}</div>
}

export default WalletEnsAddress;