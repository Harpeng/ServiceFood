import React from "react";
import styles from "./styles.module.css";
import { Modal } from "../modal/component";
import { createPortal } from "react-dom";
import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";
import classNames from "classnames";

export const BtnNewReview = ({className, restaurantId}) => {
  const [showModal, setShowModal] = React.useState(false);
  const modalRoot = document.getElementById("react-modals");
  const {theme} = useContext(ThemeContext);

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <button className={classNames(className, styles.button, {[styles.darkTheme] : theme === "dark"})} onClick={() => setShowModal(true)}>
        Добавить отзыв
      </button>
      {showModal &&
        createPortal(
          <Modal restaurantId={restaurantId}  onClose={closeModal} />,
          modalRoot
        )}
    </>
  );
};
