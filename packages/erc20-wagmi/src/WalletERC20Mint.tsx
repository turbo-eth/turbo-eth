import * as React from "react";
import classNames from "classnames";
import useERC20ContractWrite from './useERC20ContractWrite';
import { utils } from 'ethers'; 
import { useAccount } from "wagmi";

interface WalletERC20MintProps {
  className?: string;
  token: string;
  amount: string;
  to: string;
  symbol?: string;
}

export const WalletERC20Mint = ({ className, token, amount, symbol }: WalletERC20MintProps) => {
  const containerClassName = classNames(className, "WalletERC20Mint");
  const {data: accountData} = useAccount()
  const { write } = useERC20ContractWrite(token, "mint", [accountData?.address, utils.parseEther(amount)]);

  return (
    <div className={containerClassName}>
      <button onClick={() => write()} className="btn btn-sm btn-blue">
        Mint {amount} {symbol && <span className=''>{symbol}</span> } Tokens
      </button>
    </div>
  );
};

export default WalletERC20Mint;
