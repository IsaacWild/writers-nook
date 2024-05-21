import Image from "next/image";
import styles from "./page.module.css";
import StartWritingButton from "../components/button/button";

export default function Welcome() {
  return (
    <div className={styles.container}>
      <Image
        src="/welcomeSplash.png"
        alt="Welcome Icon"
        width={800}
        height={800}
      />
      <div className={styles.wrapper}>
        <p>
          Welcome to the writers nook I hope you enjoy the vibes and write
          something awesome!
        </p>
        <p>Looking to start a story? Let&apos;s get you writing</p>
        <StartWritingButton>Let&apos;s start writing!</StartWritingButton>
      </div>
    </div>
  );
}
