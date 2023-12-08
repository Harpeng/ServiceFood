import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const HomePage = () => {
  return (
    <section className={styles.page}>
      <main className={styles.content}>
        <Link to="/restaurants" className={styles.link}>
          <button>Учебный проект</button>
        </Link>
      </main>
    </section>
  );
};
