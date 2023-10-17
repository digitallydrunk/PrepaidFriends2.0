const PFInput = ({
  name,
  id,
  label,
  htmlFor,
  type = "input",
  placeholder,
  value,
  onChange,
  ...props
}) => {
  return (
    <>
      <label className="font-semibold" htmlFor={htmlFor}>
        {`${label}`}:
      </label>
      <input
        name={name}
        id={id}
        type={type}
        className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export { PFInput };
