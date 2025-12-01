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
        <div className={styles.stepContainer}>
          <div className={styles.stepBlock}>
            <div className={styles.stepNumber}>Step 1.</div>
            <div className={styles.stepNumberStrong}>Generate a Signature</div>
          </div>
          <div className={styles.stepSub}>
            You must sign a message to prove you own this address
          </div>
        </div>
        {/* <button className={styles.primaryButton}>Generate Address Proof Signature</button> */}
        <Button
          connected={false}
          address="0x7853c0b7e123c0b7"
          onClick={() => router.push("/attestation/two")}
          children="Generate Address Proof Signature"
        />
      </div>

      <div className={styles.stepContainer}>
        {/* Step 2. Scan QR with Self app */}
        <div className={styles.stepBlock}>
          <div className={styles.stepLast}>Step 2.</div>
          <div className={styles.stepLastStrong}>Scan QR with Self app</div>
        </div>
      </div>

      <div className={styles.stepContainer}>
        {/* Step 3. Check Verification Status */}
        <div className={styles.stepBlock}>
          <div className={styles.stepLast}>Step 3.</div>
          <div className={styles.stepLastStrong}>Check Verification Status</div>
        </div>
      </div>
    </div>
  );
};
