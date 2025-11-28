"use client";

import Button from "@/src/shared/ui/Button/Button";
import styles from "./StepOneCard.module.css";
import { useRouter } from "next/navigation";

export const StepOneCard = () => {
  const router = useRouter();

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Generate Address Proof</h2>

      <div className={styles.step}>
        <div className={styles.stepNumber}>Step 1. <strong>Generate a Signature</strong></div>
        <div className={styles.stepSub}>You must sign a message to prove you own this address</div>
        {/* <button className={styles.primaryButton}>Generate Address Proof Signature</button> */}
        <Button connected={false} address="0x7853c0b7e123c0b7" onClick={() => router.push("/attestation/two")} />
        
      </div>

      <div className={`${styles.step} ${styles.disabledStep}`}>
        Step 2. Scan QR with Self app
      </div>

      <div className={`${styles.step} ${styles.disabledStep}`}>
        Step 3. Check Verification Status
      </div>
    </div>
  );
};
