import styles from "./page.module.css";

export default function about() {
  return (
    <main className={styles.main}>
      <h1>This is the about page</h1>
      <p>
        I put some words here for you to look at and read
      </p>
      <h2>This is my shopping list</h2>
      <ul>
        <li>Eggs</li>
        <li>Milk</li>
        <li>Honey</li>
      </ul>
    </main>
  );
}
