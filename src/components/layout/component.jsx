import { useContext } from "react";
import { AppHeader } from "../app-header/component";
import { Footer } from "../footer/component";
import styles from "./styles.module.css";
import classNames from "classnames";
import { ThemeContext } from "../../contexts/Theme";

export const Layout = ({children}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={classNames(styles.page, { [styles.dark]: theme === "dark" })}
    >
      <AppHeader className={styles.header} />
      <main className={styles.content}>{children}</main>
      <Footer className={styles.footer} />
    </section>
  );
};
