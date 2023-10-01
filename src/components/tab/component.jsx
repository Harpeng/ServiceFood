import React from "react";

export const Tab = ({onClick, value}) => {

  return (
    <div >
        <button type='button' onClick={onClick} >{value}</button>
    </div>
  );
};