import * as React from 'react';
import classNames from 'classnames';
import { useAccount, useEnsName } from 'wagmi'

interface WalletEnsNameProps {
 className?: string;
}

export const WalletEnsName = ({className}: WalletEnsNameProps) => { 
 const classes = classNames(className, 'WalletEnsName'); 
 const { data, isError, isLoading } = useAccount()
 const { data: dataEnsName } = useEnsName({
    address: data?.address,
  })

  if (isLoading || isError) return null
  return <div className={classes}>{dataEnsName}</div>
}

export default WalletEnsName;