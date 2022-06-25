import { utils } from 'ethers'; 
import * as React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import useERC20ContractWrite from './useERC20ContractWrite';
import InputWithLabel from './InputWithLabel';

interface ERC20MintProps {
  className?: string;
  onUpdate?: Function;
  defaults?: any;
  token: string;
  symbol?: string;
}

export const ERC20Mint = ({
  className,
  onUpdate,
  token
}: ERC20MintProps) => {
  const styleForm = classNames(className, "ERC20Mint");
  
  const {
      register,
      handleSubmit,
      watch,
      formState: {  },
    } = useForm({
        defaultValues: {
            to: '',
            amount: '',
        },
    });
    const watchAllFields = watch();
    const { write } = useERC20ContractWrite(token, "mint", [watchAllFields?.to, utils.parseEther(watchAllFields.amount || '0')]);
    const onSubmit = (_data: any) => {
        write();
        if(onUpdate) onUpdate(_data);
    };


  return (
    <div className={styleForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4">
          <InputWithLabel
            name="to"
            label="To"
            placeholder="0x000...000"
            register={register}
          />
          <InputWithLabel
          className='mt-3'
            name="amount"
            label="Amount"
            placeholder="0.1"
            register={register}
          />
        </div>
        <button
          className="button text-white py-2 rounded-lg text-lg px-14 bg-gradient-to-br from-emerald-500 via-emerald-500 to-emerald-700 w-full mt-6"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ERC20Mint;
