import styles from "./Header.module.css";
import Image from "next/image";
import Button from "../../../shared/ui/Button/Button";
import Lottie from "lottie-react";
import animationData from "../../../../public/header/animation.json";
import { useRouter } from "next/navigation";
import { NetworkToggle } from "@/src/shared/ui/ToggleButton/NetworkToggle";

export function HeaderCelo() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.headerGrid}>
        <div className={styles.logoContainer} onClick={() => router.push("/")}>
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

        <div className={styles.toggleContainer}>
          <NetworkToggle value="celo" />
        </div>

        <div className={styles.buttonContainer}>
          <Button
            connected={true}
            address="0x7853c0b7e123c0b7"
            onClick={() => {}}
            style={{ width: 270, height: 42 }}
          />
        </div>
      </div>
    </div>
  );
}
