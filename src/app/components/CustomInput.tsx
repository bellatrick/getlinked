import { ChangeEventHandler } from "react";

type props = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
  value: any;
  optional: boolean;
  autoComplete?: string;
  placeholder: string;
  type: string;
  disabled?: boolean;
  page?:string
};
const CustomInput = ({
  onChange,
  optional,
  value,
  type,
  autoComplete,
  placeholder,
  name,
  disabled,
  page
}: props) => {
  return (
    <div className="">
      <input
        disabled={disabled}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder ? placeholder : ""}
        required={true}
        className={`${page?"placeholder-gray-500":"placeholder-white"} shadow appearance-none disabled:bg-gray-100 darkbg block w-full px-3 py-2 border border-white rounded-[4px]  focus:outline-none focus:ring-themepink focus:border-themepurple sm:text-sm`}
      />
    </div>
  );
};

export default CustomInput;
