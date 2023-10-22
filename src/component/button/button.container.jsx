import React from 'react';
import './styles/button.module.css'

const Button = ({ label, onClick, ...props }) => {
  return (
    <button
      className="global-button" 
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export  {Button};
