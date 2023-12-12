import React from "react";

const PFCheckbox = ({
  id,
  label,
  htmlFor,
  checked,
  onChange,
  disabled,
  redirect,
  url,
  ...props
}) => {
  function handleRedirect() {
    window.open(url, "_blank");
  }
  return (
    <div className="flex items-center mb-0">
      <input
        className={`form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2 ${
          disabled ? "cursor-not-allowed" : ""
        }`}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <label
        className={`form-checkbox-label text-slate-400 ${
          disabled ? "text-gray-400" : ""
        }`}
        style={redirect ? { cursor: "pointer" } : {}}
        htmlFor={htmlFor}
        onClick={redirect ? handleRedirect : {}}
      >
        {label}
      </label>
    </div>
  );
};

export { PFCheckbox };
