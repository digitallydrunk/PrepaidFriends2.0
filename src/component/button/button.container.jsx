import React from 'react';
import './global.component.container.module.css'

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
