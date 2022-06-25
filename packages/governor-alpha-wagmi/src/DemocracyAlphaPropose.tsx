import * as React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import useDemocracyAlphaContractWrite from './useDemocracyAlphaContractWrite';
import InputWithLabel from './InputWithLabel';

interface DemocracyAlphaProposeProps {
  className?: string;
  onUpdate?: Function;
  defaults?: any;
  token: string;
  symbol?: string;
}

export const DemocracyAlphaPropose = ({
  className,
  onUpdate,
  token
}: DemocracyAlphaProposeProps) => {
  const styleForm = classNames(className, "DemocracyAlphaPropose");
  
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
    const { write } = useDemocracyAlphaContractWrite(token, "propose", [
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

export default DemocracyAlphaPropose;
