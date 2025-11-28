"use client";

import Button from "@/src/shared/ui/Button/Button";
import styles from "./SuccessCard.module.css";
import { useRouter } from "next/navigation";

export const SuccessCard = () => {
  const router = useRouter();

  return (
    <div className={styles.card}>
      <div className={styles.check}>✓</div>

      <h2 className={styles.title}>You've verified you're human!</h2>

      <p className={styles.subtitle}>
        Continue to the NFT claim app on the Human appchain
      </p>

      {/* <button className={styles.primaryButton}>
        Go to Human Appchain
      </button> */}
        <Button connected={false} address="0x7853c0b7e123c0b7" onClick={() => router.push("/attestation/fail")} />
      
    </div>
  );
};
