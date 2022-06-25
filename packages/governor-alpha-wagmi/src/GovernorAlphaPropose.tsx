import * as React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import useERC20ContractWrite from './useGovernorAlphaContractWrite';
import InputWithLabel from './InputWithLabel';

interface GovernorAlphaProposeProps {
  className?: string;
  onUpdate?: Function;
  defaults?: any;
  token: string;
  symbol?: string;
}

export const GovernorAlphaPropose = ({
  className,
  onUpdate,
  token
}: GovernorAlphaProposeProps) => {
  const styleForm = classNames(className, "GovernorAlphaPropose");
  
  const {
      register,
      handleSubmit,
      watch,
      formState: {  },
    } = useForm({
        defaultValues: {
            targets: '',
            values: '',
            signatures: '',
            calldata: '',
        },
    });


    const watchAllFields = watch();
    const { write } = useERC20ContractWrite(token, "propose", [
      watchAllFields?.targets, 
      watchAllFields?.values, 
      watchAllFields?.signatures, 
      watchAllFields?.calldata, 
    ]);
    const onSubmit = (_data: any) => {
        write();
        if(onUpdate) onUpdate(_data);
    };

  return (
    <div className={styleForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4">
          <InputWithLabel
            name="targets"
            label="Targets"
            placeholder="[0x000...000]"
            className='mt-3'
            register={register}
          />
          <InputWithLabel
            name="values"
            label="Values"
            placeholder="[0]"
            className='mt-3'
            register={register}
          />
          <InputWithLabel
            name="signatures"
            label="Signatures"
            placeholder="[0x000...000]"
            className='mt-3'
            register={register}
          />
          <InputWithLabel
            name="calldata"
            label="Calldatas"
            placeholder="[0x000...000]"
            className='mt-3'
            register={register}
          />
          <InputWithLabel
            className='mt-3'
            name="description"
            label="Description"
            placeholder="About the proposal"
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

export default GovernorAlphaPropose;
