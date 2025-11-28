"use client";

import Button from "@/src/shared/ui/Button/Button";
import styles from "./StepTwoQRCard.module.css";
import { useRouter } from "next/navigation";

export const StepTwoQRCard = () => {
  const router = useRouter();

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
        <img src="/attestation/qr-mock.png" alt="QR Code" className={styles.qr} />
        <div className={styles.qrText}>Use only Self app to scan</div>
        <img src="/attestation/self-logo.svg" alt="Self" className={styles.selfLogo} />
      </div>

      {/* <button className={styles.primaryButton}>
        Generate Address Proof Signature
      </button> */}
      <Button connected={false} address="0x7853c0b7e123c0b7" onClick={() => router.push("/attestation/success")} />
      

      <div className={`${styles.disabledStep}`}>
        Step 3. Check Verification Status
      </div>
    </div>
  );
};
