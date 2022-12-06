import styles from "../styles/Animate.module.scss";
import fonts from "../styles/Fonts.module.scss";
import Link from "next/link";

export default function Home() {

  return (
    <div className={styles.container}>
      <Link href="/">
        <p className={fonts.link}>
          Back
        </p>
     </Link>

      <footer className={styles.footer}></footer>
    </div>
  );
}
