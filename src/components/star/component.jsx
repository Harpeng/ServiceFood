import styles from "./styles.module.css";
import {FaStar} from 'react-icons/fa';

export const Star = ({onMouseEnter, onMouseLeave, color, value, onClick }) => {
  return (
    <>
    <label>
        <input  className={styles.starRadio} type="radio" value={value} onClick={onClick}/>
        <FaStar onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} color={color} className={styles.star} size={30}/>
    </label>
    </>
  );
};
