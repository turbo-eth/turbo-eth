import * as React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import useCitizenV1ContractWrite from './useCitizenV1ContractWrite';
import InputWithLabel from './InputWithLabel';

interface CitizenV1IssueFromFounderProps {
  className?: string;
  onUpdate?: Function;
  defaults?: any;
  contract: string;
  symbol?: string;
}

export const CitizenV1IssueFromFounder = ({
  className,
  onUpdate,
  contract
}: CitizenV1IssueFromFounderProps) => {
  const styleForm = classNames(className, "CitizenV1IssueFromFounder");
  
  const {
      register,
      handleSubmit,
      watch,
      formState: {  },
    } = useForm({
        defaultValues: {
            to: '',
            alias: ''
        },
    });


    const watchAllFields = watch();
    const { write } = useCitizenV1ContractWrite(contract, "issue", [
      watchAllFields?.to,
      watchAllFields?.alias
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
            name="to"
            label="To"
            placeholder="0x000...000"
            className='mt-3'
            register={register}
          />
          <InputWithLabel
            name="alias"
            label="Alias"
            placeholder="MetaSudo"
            className='mt-3'
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

export default CitizenV1IssueFromFounder;
