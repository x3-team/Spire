"use client";

import styles from "./VerifySuccessCard.module.css";

type Props = {
  onPrimaryClick?: () => void;
};

export const VerifySuccessCard: React.FC<Props> = ({ onPrimaryClick }) => {
  return (
    <section className={`${styles.card} ${styles.cardVerified}`}>
      <div className={styles.checkIcon}>✓</div>

      <div className={styles.cardText}>
        <h2 className={styles.cardTitle}>
          You&apos;ve verified you&apos;re human!
        </h2>
        <p className={styles.cardSubtitle}>
          The contract will automatically verify your attestation status on Celo L2
          and check for any duplicate claims
        </p>
      </div>

      <button className={styles.primaryButton} onClick={onPrimaryClick}>
        Mint Human NFT
      </button>

      <div className={styles.walletRow}>
        <span className={styles.walletLabel}>Connected Wallet</span>
        <button className={styles.disconnect}>Disconnect</button>
      </div>
      <div className={styles.walletAddress}>
        0x7853Eabb6cFa980eBfD27e3F77e69590EA53c0b7
      </div>
    </section>
  );
};
