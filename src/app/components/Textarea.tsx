type props = {

  onChange: (e: { target: {name: any;value: any;};}) => void
  name: string;
  value: any;
  optional: boolean;
  autoComplete?: string;
  placeholder: string;
};
const Textarea = ({
  onChange,
  optional,
  value,
  autoComplete,
  placeholder,
  name,
}: props) => {
  return (
    <div>
      <textarea
        name={name}
        rows={6}
        onChange={onChange}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder ? placeholder : ""}
        required={!optional ? true : false}
        className="appearance-none disabled:bg-gray-100 darkbg block w-full px-3 py-2 border border-white rounded-[4px] placeholder-white focus:outline-none focus:ring-themepink focus:border-themepurplel sm:text-sm"
      />
    </div>
  );
};

export default Textarea;
