import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const HomePage = () => {
  return (
    <section className={styles.page}>
      <div className={styles.content}>
        <Link className={styles.link}>
          <button>Учебный проект</button>
        </Link>
      </div>
    </section>
  );
};
