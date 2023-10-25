import React from 'react';
import styles from './button.module.css'

const Button = ({ label, onClick, ...props }) => {
  return (
    <button
      className={styles.globalbutton} 
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default  Button ;
