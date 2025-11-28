"use client";

import styles from "./SuccessCard.module.css";

export const SuccessCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.check}>✓</div>

      <h2 className={styles.title}>You've verified you're human!</h2>

      <p className={styles.subtitle}>
        Continue to the NFT claim app on the Human appchain
      </p>

      <button className={styles.primaryButton}>
        Go to Human Appchain
      </button>
    </div>
  );
};
