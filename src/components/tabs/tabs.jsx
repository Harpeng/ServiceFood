import React from "react";

export const Tabs = ({onClick, value}) => {

  return (
    <div style={{display: 'flex'}}>
        <button type='button' onClick={onClick} >{value}</button>
    </div>
  );
};