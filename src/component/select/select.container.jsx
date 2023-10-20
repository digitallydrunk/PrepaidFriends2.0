const PFSelect = ({label,options,onChange,value,...props}) => {
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
    };
  return (
    <>
      <div className="lg:col-span-4">
      <label className="font-semibold">{label}:</label>
      <select
        className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
        value={value} 
        onChange={handleChange} 
        {...props}
      >
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
    </>
  );
};
export {PFSelect}