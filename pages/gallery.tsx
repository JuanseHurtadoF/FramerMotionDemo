/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Gallery.module.scss";
import fonts from "../styles/Fonts.module.scss";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const imageArray = [
    "/gallery/1.png",
    "/gallery/2.png",
    "/gallery/3.png",
    "/gallery/4.png",
  ];
  const [image, setImage] = useState<number>(1);
  const handleArrow = (direction: -1 | 1) => {
    if (direction < 0) {
      if (image === 1) setImage(imageArray.length - 1);
      else setImage((prev) => prev - 1);
    } else {
      if (image === imageArray.length - 1) setImage(1);
      else setImage((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        <AnimatePresence>
          <motion.img
            key={imageArray[image]}
            src={imageArray[image]}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.img}
          />
        </AnimatePresence>

        <img
          onClick={() => {
            handleArrow(-1);
          }}
          src="/gallery/arrow.png"
          className={`${styles.arrow} ${styles.arrowLeft}`}
        ></img>
        <img
          onClick={() => {
            handleArrow(1);
          }}
          src="/gallery/arrow.png"
          className={`${styles.arrow} ${styles.arrowRight}`}
        ></img>
      </div>

      <footer className={styles.footer}>
        <Link href="/">
          <p className={fonts.link}>Back</p>
        </Link>
      </footer>
    </div>
  );
}
