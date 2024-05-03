import Image from "next/image";
import styles from "./page.module.css";

export default function Welcome() {
  return (
    <div className={styles.container}>
      <p>Hiya</p>
      <Image
        src="/welcomeSplash.png"
        alt="Welcome Icon"
        width={800}
        height={800}
      />
    </div>
  );
}
