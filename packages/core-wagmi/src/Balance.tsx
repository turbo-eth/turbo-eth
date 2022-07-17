import * as React from 'react';
import classNames from 'classnames';
import { useBalance } from 'wagmi'

interface BalanceProps {
 className?: string;
 address?: string;
}

export const Balance = ({className, address}: BalanceProps) => { 
 const classes = classNames(className, 'Balance'); 
 const { data, isLoading, isError } = useBalance({
    addressOrName: address,
  })

  if (isLoading || isError) return null
  return <div className={classes}>{data?.formatted} {data?.symbol}</div>
}

export default Balance;