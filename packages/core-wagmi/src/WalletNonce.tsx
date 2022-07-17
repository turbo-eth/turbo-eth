import * as React from 'react';
import classNames from 'classnames';
import { useSigner } from 'wagmi'

interface WalletNonceProps {
 className?: string;
 msg?: string;
  msgActive: boolean;
}

export const WalletNonce = ({className,msg, msgActive}: WalletNonceProps) => { 
 const classes = classNames(className, 'WalletNonce'); 
 const {data: signer, isLoading, isError} = useSigner()
 const [ nonce, setNonce ] = React.useState<number>()
  React.useEffect( () => { 
  (async() => {
    if(signer) {
        const nonce = await signer.getTransactionCount()
        setNonce(nonce)
    }
  })();
  }, [isLoading, signer])

  if (isLoading) return null
  if ((isError || !isError && !nonce) && !msgActive) return null
  if ((isError || !isError && !nonce) && msgActive) return <span className={className}>{msg}</span>
  return <div className={classes}>{nonce}</div>
}

WalletNonce.defaultProps = {
  msg:'Connect Wallet',
  msgActive: false,
  truncate: false,
}

export default WalletNonce;