import React from "react";

function Radio({ label, value, checked, onChange }) {
  return (
    <label>
      <input
        type="radio"
        className="form-radio border-gray-300 dark:border-gray-900 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

export { Radio };
