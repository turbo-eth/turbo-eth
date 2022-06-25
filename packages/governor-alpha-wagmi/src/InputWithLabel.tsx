import * as React from 'react';
import classNames from 'classnames';

interface InputWithLabelProps {
 className?: string;
 label?: string;
 register: Function;
 required?: boolean;
 name?: string;
 placeholder?: string;
 type?: string;
}

export const InputWithLabel = ({className,
    name,
    label,
    register,
    required = false,
    placeholder,
    type

}: InputWithLabelProps) => { 
 const containerClassName = classNames(className, 'InputWithLabel'); 
 return(
    <div className={containerClassName}>
    <div className="flex flex-col">
      <label className="block py-2 bg-emerald-500 text-white rounded-smd">
        <span className="uppercase text-xs font-bold">{label}</span>
      </label>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        {...register(name, { required })}
      />
    </div>
</div>
)}

export default InputWithLabel;