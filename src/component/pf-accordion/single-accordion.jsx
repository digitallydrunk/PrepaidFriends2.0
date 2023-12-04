import React, { useState } from "react";
import styles from "./accordion.module.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const SingleAccordion = ({ item }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="shadow dark:shadow-gray-800 rounded-md overflow-hidden py-4 px-2 mt-4">
      <div
        onClick={() => setToggle(!toggle)}
        className={`flex items-center justify-between cursor-pointer `}
      >
        <h4 className={`font-bold text-lg ${toggle?styles["up-arrow"]:" "}`}>{item.title}</h4>
        <button>
          {toggle ? (
            <FiChevronUp className={`${styles["up-arrow"]} ${styles.bold}`} />
          ) : (
            <FiChevronDown className={styles.bold} />
          )}
        </button>
      </div>
      {toggle && (
        <p className={styles.text}>
          {item.content}
        </p>
      )}
    </div>
  );
};

export default SingleAccordion;
