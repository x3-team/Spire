"use client";

import Button from "@/src/shared/ui/Button/Button";
import styles from "./VerifyErrorCard.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const VerifyErrorCard = () => {
  const router = useRouter();

  return (
    <section className={styles.wrapper}>
      <div className={styles.alert}>
        <div className={styles.alertBlock}>
          <div className={styles.alertHeader}>
            <Image
              src="/verify/check_fail.svg"
              alt="logo"
              width={10.175604820251465}
              height={10.175604820251465}
              className={styles.logo}
              priority
            />
            <span className={styles.alertTitle}>
              Error checking verification status
            </span>
          </div>
          <p className={styles.alertText}>
            User rejected the request. Request Argument from: 0x7853Eabb6cFa...
          </p>
        </div>
 
        <Button
          connected={false}
          address="0x7853c0b7e123c0b7"
          onClick={() => router.push("/attestation/one")}
          children="Try again to Verify your Humanity"
        />
      </div>

      
      <div className={styles.walletCard}>
        <div className={styles.walletRow}>
          <span className={styles.walletLabel}>Connected Wallet</span>
          <button className={styles.disconnect}>Disconnect</button>
        </div>
        <div className={styles.walletAddress}>
          0x7853Eabb6cFa980eBfD27e3F77e69590EA53c0b7
        </div>
      </div>
    </section>
  );
};
