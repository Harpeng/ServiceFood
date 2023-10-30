import React from "react";
import styles from "./styles.module.css";
import { StarRating } from "../star-rating/component";

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
        text: action.payload,
      };
    case "setRating":
      return {
        ...state,
        rating: action.payload,
      };
    case "reset":
      return {
        ...DEFAULT_VALUE,
      };
    default:
      return state;
  }
};

export const Form = ({ onClose, onSubmit }) => {
  const [formValue, dispatch] = React.useReducer(reducer, DEFAULT_VALUE);
  // const resetForm = () => {
  //   event.preventDefault();
  //   dispatch({
  //     type: "reset",
  //   });
  //   onClose;
  // };

  const submit = () => {
    event.preventDefault();
    onSubmit(formValue);
    onClose
  }

  return (
    <form className={styles.form}>
      <div className={styles.inputContainer}>
        <h4 className={styles.name}>Имя</h4>
        <input
          placeholder="Ваше имя"
          className={styles.nameInput}
          type="text"
          value={formValue.name}
          onChange={(event) => {
            dispatch({ type: "setName", payload: event.target.value });
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
          value={formValue.text}
          onChange={(event) => {
            dispatch({ type: "setReview", payload: event.target.value });
          }}
        ></textarea>
      </div>
      <div className={styles.inputContainer}>
        <h4 className={styles.name}>Рейтинг</h4>
        <div className={styles.rate}>
          <StarRating
            value={formValue.rating}
            onChange={(value) =>
              dispatch({ type: "setRating", payload: value })
            }
          />
        </div>
      </div>
      <div className={styles.btnGroup}>
        <button
          className={styles.button}
          onClick={submit}
        >
          Сохранить отзыв
        </button>
        <button onClick={onClose} className={styles.button}>
          Отмена
        </button>
      </div>
    </form>
  );
};
