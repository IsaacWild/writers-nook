
import styles from "./page.module.css";
import Welcome from "./welcome/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome />
    </main>
  );
}
