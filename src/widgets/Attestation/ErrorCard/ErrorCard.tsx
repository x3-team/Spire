"use client";

import Button from "@/src/shared/ui/Button/Button";
import styles from "./ErrorCard.module.css";
import { useRouter } from "next/navigation";

export const ErrorCard = () => {
  const router = useRouter();

  return (
    <div className={styles.card}>
      <div className={styles.successBanner}>
        ✓ EIP-191 Signature generated!
        <div className={styles.hash}>Signature: 0x720865...89241c</div>
      </div>

      <div className={styles.stepTitle}>Step 2. Scan QR with Self app</div>

      <div className={styles.qrWrapper}>
        <img src="/attestation/qr-mock.png" className={styles.qr} />
        <div className={styles.qrText}>Use only Self app to scan</div>
      </div>

      <div className={styles.errorBanner}>
        ✕ Error checking verification status. Please, scan and verify again.
      </div>

      {/* <button className={styles.primaryButton}>
        Check your Verification Status
      </button> */}
        <Button connected={false} address="0x7853c0b7e123c0b7" onClick={() => router.push("/success")} />
      
    </div>
  );
};
