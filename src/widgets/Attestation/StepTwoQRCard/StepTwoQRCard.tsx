"use client";

import styles from "./StepTwoQRCard.module.css";

export const StepTwoQRCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.successBanner}>
        ✓ EIP-191 Signature generated!
        <div className={styles.signatureHash}>
          Signature: 0x7208653b7dbc280814...071d89241c
        </div>
      </div>

      <div className={styles.stepTitle}>
        Step 2. <strong>Scan QR with Self app</strong>
      </div>

      <div className={styles.qrWrapper}>
        <img src="/qr-mock.png" alt="QR Code" className={styles.qr} />
        <div className={styles.qrText}>Use only Self app to scan</div>
        <img src="/self-logo.svg" alt="Self" className={styles.selfLogo} />
      </div>

      <button className={styles.primaryButton}>
        Generate Address Proof Signature
      </button>

      <div className={`${styles.disabledStep}`}>
        Step 3. Check Verification Status
      </div>
    </div>
  );
};
