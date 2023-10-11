import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";


export const Toggle = ({onClick, className}) => {
  return (
    <div className={classNames(className, styles.switchContainer)}>
      <div className={`${styles.icon} ${styles.lightIcon}`}></div>
      <label className={styles.switcher}>
        <input onChange={onClick} type="checkbox" className={styles.input}  />
        <span className={styles.slider}></span>
      </label>
      <div className={`${styles.icon} ${styles.darkIcon}`}></div>
    </div>
  );
};
