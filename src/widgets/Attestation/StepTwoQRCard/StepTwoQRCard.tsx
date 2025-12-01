"use client";

import Button from "@/src/shared/ui/Button/Button";
import styles from "./StepTwoQRCard.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const StepTwoQRCard = () => {
  const router = useRouter();

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Generate Address Proof</h2>

      <div className={styles.successPadding}>
        <div className={styles.successBanner}>
          <div className={styles.successTitle}>
            <Image
              src="/verify/check_success.svg"
              alt="logo"
              width={9.404296851659952}
              height={10.342968915065173}
              className={styles.logo}
              priority
            />
            <div>EIP-191 Signature generated!</div>
          </div>
          <div className={styles.signatureHash}>
            Signature: 0x7208653b7dbc280814...071d89241c
          </div>
        </div>
      </div>

      <div className={styles.successPaddingQr}>
        <div className={styles.stepBlock}>
          <div className={styles.stepNumber}>Step 2.</div>
          <div className={styles.stepNumberStrong}>Scan QR with Self app</div>
        </div>

        <div className={styles.qrWrapper}>
          <Image
            src="/attestation/qr-mock.svg"
            alt="qr-mock"
            width={117.05521392822266}
            height={120.37256622314453}
          />

          <div className={styles.qrText}>Use only Self app to scan</div>

          <Image
            src="/attestation/self-logo.svg"
            alt="self-log"
            width={92}
            height={24}
          />
        </div>

        <Button
          connected={false}
          address="0x7853c0b7e123c0b7"
          onClick={() => router.push("/attestation/success")}
          children="Generate Address Proof Signature"
        />
      </div>

      <div className={styles.stepContainer}>
        <div className={styles.stepBlockQr}>
          <div className={styles.stepLast}>Step 3.</div>
          <div className={styles.stepLastStrong}>Check Verification Status</div>
        </div>
      </div>
    </div>
  );
};
