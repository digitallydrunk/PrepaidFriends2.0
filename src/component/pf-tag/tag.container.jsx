import React from "react";
import styles from "./tag.module.css";

function PFTag({ variant = "default", label, onClick }) {
  return (
    <div
      style={{ marginLeft: 0 }}
      className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full ${`${styles[variant]}`}  border`}
      onClick={onClick}
    >
      {label || variant}
    </div>
  );
}

export { PFTag };
