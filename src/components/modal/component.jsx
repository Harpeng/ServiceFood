import React from "react";
import { ModalOverlay } from "../modalOverlay.jsx/component";
import { StarRating } from "../star-rating/component";
import styles from "./styles.module.css";

const DEFAULT_VALUE = {
  name: "",
  review: "",
  rating: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: action.payload,
      };
    case "setReview":
      return {
        ...state,
        review: action.payload,
      };
      case "setRating":
        return {
          ...state,
          rating: action.payload,
        };
      case "reset":
        return {
          ...DEFAULT_VALUE
        };
    default:
      return state;
  }
};

export const Modal = ({ onClose }) => {
  const [formValue, dispatch] = React.useReducer(reducer, DEFAULT_VALUE);
  const resetForm = () => {
    dispatch({
        type: "reset",
    })
    onClose
  }
  return (
    <section>
      <ModalOverlay className={styles.overlay} onClose={onClose}>
        <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
          <div className={styles.popupHeader}>
            <h2 className={styles.title}>Отзыв</h2>
            <button className={styles.headerButton} onClick={onClose}>
              <div className={styles.buttonContent}></div>
            </button>
          </div>
          <form className={styles.form}>
            <div className={styles.inputContainer}>
              <h4 className={styles.name}>Имя</h4>
              <input
                placeholder="Ваше имя"
                className={styles.nameInput}
                type="text"
                value={formValue.name}
                onChange={(event) => {
                    dispatch({type: "setName", payload: event.target.value})
                }}
              />
            </div>
            <div className={styles.inputContainer}>
              <h4 className={styles.name}>Отзыв</h4>
              <textarea
                placeholder="Напишите отзыв"
                cols="33"
                rows="5"
                className={styles.reviewInput}
                type="text"
                name={formValue.review}
                onChange={(event) => {
                    dispatch({type: "setName", payload: event.target.name})
                    console.log(payload)
                }}
              ></textarea>
            </div>
            <div className={styles.inputContainer}>
              <h4 className={styles.name}>Рейтинг</h4>
              <div className={styles.rate}>
              <StarRating value={formValue.rating} onChange={(value) => dispatch({type: "setRating", payload: value})} />
              </div>
            </div>
            <div className={styles.btnGroup}>
              <button className={styles.button} onClick={() => resetForm}>
                Сохранить отзыв
              </button>
              <button onClick={() => resetForm} className={styles.button}>
                Отмена
              </button>
            </div>
          </form>
        </div>
      </ModalOverlay>
    </section>
  );
};
