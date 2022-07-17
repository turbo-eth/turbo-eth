import * as React from 'react';
import classNames from 'classnames';
import { useAccount, useEnsName } from 'wagmi'

interface WalletEnsNameProps {
 className?: string;
 msg?: string;
  msgActive: boolean;
}

export const WalletEnsName = ({className, msg, msgActive}: WalletEnsNameProps) => { 
 const classes = classNames(className, 'WalletEnsName'); 
 const { data, isError, isLoading } = useAccount()
 const { data: dataEnsName } = useEnsName({
    address: data?.address,
  })

  if (isLoading) return null
  if ((isError || !isError && !data) && !msgActive) return null
  if ((isError || !isError && !data) && msgActive) return <span className={className}>{msg}</span>
  return <div className={classes}>{dataEnsName}</div>
}

WalletEnsName.defaultProps = {
  msg:'Connect Wallet',
  msgActive: false,
  truncate: false,
}

export default WalletEnsName;