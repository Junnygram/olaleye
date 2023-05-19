import React from 'react';
import { FieldError, UseFormRegister, Path } from 'react-hook-form';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

interface FormProps<TFormValues extends Record<string, unknown>> {
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  error: FieldError | undefined;
  label: string;
  type?: string;
  defaultValue?: any;
  fontWeight?: number | string;
  icon?: boolean;
  placeholder?: string;
  changeVisibility?: any;
  passwordVisible?: boolean;
  focusBorderColor?: string;
  required?: boolean;
  validate?: any;
  customclassName?: any;
}

const fixedInputclassName =
  'rounded-md  relative  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:border-blue-500 focus:z-10 sm:text-sm';

const PrimaryInput = <TFormValues extends Record<string, any>>({
  name,
  register,
  error,
  label,
  type = 'text',
  icon = false,
  placeholder,
  passwordVisible,
  defaultValue,
  changeVisibility,
  required = false,
  validate = {},
}: FormProps<TFormValues>) => {
  console.log({ passwordVisible });
  return (
    <>
      <div className="mb-3">
        <label htmlFor={label} className="text-blue-300">
          {label}
        </label>
        <div className="relative">
          <input
            type={type}
            placeholder={placeholder}
            {...register(name, { required, ...validate })}
            defaultValue={defaultValue}
            className={fixedInputclassName}
          />
          {icon && (
            <button
              onClick={() => changeVisibility()}
              className="absolute z-10 inset-y-0 right-0  flex items-center cursor-pointer text-blue-300 px-4"
            >
              {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          )}
        </div>
        <div className="text-sm text-red-800">
          {(error?.type === 'required' && `${label} is required`) ||
            error?.message}
        </div>
      </div>
    </>
  );
};

export default PrimaryInput;
