import styles from "./FooterAttestation.module.css";

export function FooterAttestation() {
  return (
    <div className={styles.container}>
      <div className={styles.desktopText}>
        <div className={styles.left}>Contract Address: 0x505a5CC..f711a8</div>
        <div className={styles.center}>
          After generating a proof in Self, it will be automatically submitted
          on-chain to verify your humanity.
        </div>
      </div>

      <div className={styles.mobileText}>
        <div className={styles.mobile}>Contract Address: 0x505a5CC..f711a8</div>
        <div className={styles.mobile}>
          After generating a proof in Self, it will be automatically submitted
          on-chain to verify your humanity.
        </div>
      </div>
    </div>
  );
}
