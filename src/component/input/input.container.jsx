import { useState } from "react";
import styles from "./input.container.module.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

const PFInput = ({
  name,
  id,
  label,
  addOnAfter,
  htmlFor,
  type = "input",
  placeholder,
  value,
  onChange,

  ...props
}) => {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      {label && (
        <label className="font-semibold" htmlFor={htmlFor}>
          {`${label}`}:
        </label>
      )}
      {type === "password" ? (
        <div className="relative">
          <input
            name={name}
            id={id}
            type={hidden ? "password" : "text"}
            className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...props}
          />
          <button
            onClick={() => setHidden(!hidden)}
            className={styles.insidePosition}
            type="button"
          >
            {hidden ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
      ) : (
        <div className="relative">
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
          {addOnAfter && (
            <div className={styles.insidePosition}>{addOnAfter}</div>
          )}
        </div>
      )}
    </>
  );
};

export { PFInput };
