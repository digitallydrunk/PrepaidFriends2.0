import React from 'react';
import './styles/global.component.container.css'

const GlobalComponentContainer = ({ label, onClick, ...props }) => {
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

export default  GlobalComponentContainer ;
