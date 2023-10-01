import React from "react";

export const Button = ({title, onClick, disabled}) => {


  return (
    <div >
        <button type='button' onClick={onClick} disabled={disabled}>{title}</button>
    </div>
  )
};