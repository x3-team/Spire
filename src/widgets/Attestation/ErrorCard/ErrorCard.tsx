"use client";

import styles from "./ErrorCard.module.css";

export const ErrorCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.successBanner}>
        ✓ EIP-191 Signature generated!
        <div className={styles.hash}>Signature: 0x720865...89241c</div>
      </div>

      <div className={styles.stepTitle}>Step 2. Scan QR with Self app</div>

      <div className={styles.qrWrapper}>
        <img src="/qr-mock.png" className={styles.qr} />
        <div className={styles.qrText}>Use only Self app to scan</div>
      </div>

      <div className={styles.errorBanner}>
        ✕ Error checking verification status. Please, scan and verify again.
      </div>

      <button className={styles.primaryButton}>
        Check your Verification Status
      </button>
    </div>
  );
};
