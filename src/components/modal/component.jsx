import { ModalOverlay } from "../modalOverlay.jsx/component";
import styles from "./styles.module.css";
import { FormContainer } from "../form/container";


export const Modal = ({ onClose, restaurantId }) => {

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
          <FormContainer restaurantId={restaurantId} onClose={onClose} />
        </div>
      </ModalOverlay>
    </section>
  );
};
