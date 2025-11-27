import styles from "./Header.module.css";
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "../../../public/header/animation.json";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: 36, height: 36.19 }}
        />
        <Image
          src="/header/logo_spire.svg"
          alt="logo"
          width={72.54}
          height={28.68}
          className={styles.logo}
          priority
        />
      </div>
      <Image
        src="/header/button.svg"
        alt="button"
        width={229}
        height={42}
        className={styles.button}
        priority
      />
    </div>
  );
}
