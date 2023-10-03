import React from "react";
import styles from "./styles.module.css";

export const Button = ({title, onClick, disabled}) => {

  return (
        <button className={styles.button} type='button' onClick={onClick} disabled={disabled}>{title}</button>
  )
};