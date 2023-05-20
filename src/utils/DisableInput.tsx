import { FieldError, UseFormRegister, Path } from 'react-hook-form';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
// import CurrencyInput from 'react-currency-input-field';

interface FormProps<TFormValues extends Record<string, any>> {
  label: string;
  icon?: boolean;
  type?: string;
  defaultValue?: any;
  fontWeight?: number | string;
  onChange?: any;
  placeholder?: string;
  passwordVisible?: boolean;
  changeVisibility?: any;
  focusBorderColor?: string;
  required?: boolean;
  disableLabel?: any;
  borderRadius?: string;
  value?: any;
  currency?: boolean;
  readonly?: boolean;

  validate?: any;
  customclassName?: any;
}
const fixedInputclassName =
  'rounded-md  relative  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:border-blue-500 focus:z-10 sm:text-sm';

const DisabledInput = <TFormValues extends Record<string, any>>({
  label,
  type = 'text',
  onChange,
  placeholder,

  passwordVisible,
  defaultValue,
  changeVisibility,

  icon = false,
  disableLabel = false,
  borderRadius = '4px',
  value,
  currency = false,
  readonly,
}: FormProps<TFormValues>) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={label} className="text-blue-300">
          {label}
        </label>
        <div className="relative">
          {/* {currency ? (
            <CurrencyInput
              placeholder={placeholder}
              defaultValue={defaultValue}
              decimalsLimit={2}
              prefix="&#8358;"
              className="currency"
              disabled={disableLabel}
              onValueChange={onChange}
              value={value}
            />
          ) : ( */}
          <div className="relative">
            <input
              type={type}
              placeholder={placeholder}
              defaultValue={defaultValue}
              disabled={disableLabel}
              value={value}
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
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default DisabledInput;
