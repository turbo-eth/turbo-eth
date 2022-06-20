import * as React from 'react';
import classNames from 'classnames';
import { useSigner } from 'wagmi'

interface WalletNonceProps {
 className?: string;
}

export const WalletNonce = ({className}: WalletNonceProps) => { 
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

  if (isLoading || isError) return null
  return <div className={classes}>{nonce}</div>
}

export default WalletNonce;