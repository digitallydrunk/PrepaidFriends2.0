import React, { useState } from "react";

function GlobalRadioButton({ label, checked, onClick }) {
  const [isChecked, setChecked] = useState(checked || false);

 
  const Radio = () => {
    setChecked(!isChecked);
    if (onClick) {
      onClick(!isChecked);
    }
  };

  return (
    <label>
      <input
        type="radio"
        className="form-radio border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
        name="radio-colors"
        value="1"
        checked={isChecked}
        readOnly 
        onClick={handleRadioClick}
      />
      {label}
    </label>
  );
}

export {Radio};
