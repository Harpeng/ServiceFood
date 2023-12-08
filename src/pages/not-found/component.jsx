import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const NotFound = () => {
  return (
    <section className={styles.page}>
      <main className={styles.content}>
        <div>Упс...что-то пошло не так</div>
        <Link to="" className={styles.link}>
          <button>вернуться на главную страницу</button>
        </Link>
      </main>
    </section>
  );
};
