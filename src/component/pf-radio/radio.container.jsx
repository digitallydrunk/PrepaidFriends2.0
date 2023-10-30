import React from "react";

function Radio({
  label,
  value,
  checked,
  onChange,
  disabled,
  className,
  labelClass,
}) {
  return (
    <label className={labelClass}>
      <input
        type="radio"
        className={`form-radio border-gray-300 dark:border-gray-900 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2 ${className}`}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={{ cursor: disabled == true ? "not-allowed" : "pointer" }}
      />
      {label}
    </label>
  );
}

export { Radio };
