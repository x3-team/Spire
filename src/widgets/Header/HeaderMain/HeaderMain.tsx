import styles from "./HeaderMain.module.css";
import Image from "next/image";
import Button from "../../../shared/ui/Button/Button";
import Lottie from "lottie-react";
import animationData from "../../../../public/header/animation.json";
import { useRouter } from "next/navigation";

export function HeaderMain() {
  const router = useRouter();

  return (
    <div className={styles.container} style={{ cursor: "pointer" }}>
      <div className={styles.logoContainer}>
        <Lottie
          animationData={animationData}
          loop
          autoplay
          className={styles.lottie}
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

      <Button
        connected={false}
        address="0x7853c0b7e123c0b7"
        onClick={() => router.push("/verify/one")}
        style={{
          width: 140,
          height: 42,
          fontFamily: "Work Sans",
          fontWeight: 500,
          fontStyle: "normal",
          fontSize: 14,
          lineHeight: 1.25,
          letterSpacing: "-0.05em",
          textAlign: "center",
        }}
      />
    </div>
  );
}
