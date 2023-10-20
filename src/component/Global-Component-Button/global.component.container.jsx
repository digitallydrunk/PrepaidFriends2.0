import React from "react";
import styles from "./global.component.container.module.css";

const GlobalComponentContainer = ({ label, onClick, ...props }) => {
  return (
    <button className={styles["button"]} onClick={onClick} {...props}>
      {label}
    </button>
  );
};

export default GlobalComponentContainer;
