import styles from "./FooterAttestation.module.css";

export function FooterAttestation() {
  return (
    <div className={styles.container}>
      <div style={{ position: "relative", width: "100%" }}>
        <div className={styles.footerTextGrid}>
          <div className={styles.contractAddress}>Contract Address: 0x505a5CC..f711a8</div>
        </div>
        <div className={styles.proofText}>
          After generating a proof in Self, it will be automatically submitted on-chain to verify your humanity.
        </div>
      </div>
    </div>
  );
}
