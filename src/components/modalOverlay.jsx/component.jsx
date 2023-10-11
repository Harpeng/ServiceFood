import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

export const ModalOverlay = ({ onClose, children, className }) => {
  return (
        <div onClick={onClose} className={classNames(className, styles.overlay)}>{children}</div>
  );
};