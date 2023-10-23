import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from './accordion.module.css';

const PFAccordion = ({ items }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleClick = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((item) => item !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  return (
    <div>
      {items?.map((item, index) => (
        <div key={item.content}>
          <div className="border-b border-black py-4">
            <div
              onClick={() => handleClick(index)}
              className="flex justify-between cursor-pointer mb-1 p-1"
            >
              <h3 className="font-bold">{item.title}</h3>
              <button>
                {activeIndexes.includes(index) ? (
                  <FiChevronUp className={`${styles.uparrow} ${styles.bold}`} />
                ) : (
                  <FiChevronDown className={styles.bold} />
                )}
              </button>
            </div>

            <div
              className={`${styles.content} ${
                activeIndexes.includes(index) ? styles.expanded : ""
              }`}
            >
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { PFAccordion };
