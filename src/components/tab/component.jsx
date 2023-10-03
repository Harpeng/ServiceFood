import React from "react";
import styles from "./styles.module.css";

export const Tab = ({ onClick, value, state, id }) => {
  return (
    <button
      className={`${styles.button} ${id === state ? styles.active : ""}`}
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
};
