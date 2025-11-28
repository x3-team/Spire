"use client";

import styles from "./StepOneCard.module.css";

export const StepOneCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Generate Address Proof</h2>

      <div className={styles.step}>
        <div className={styles.stepNumber}>Step 1. <strong>Generate a Signature</strong></div>
        <div className={styles.stepSub}>You must sign a message to prove you own this address</div>
        <button className={styles.primaryButton}>Generate Address Proof Signature</button>
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
