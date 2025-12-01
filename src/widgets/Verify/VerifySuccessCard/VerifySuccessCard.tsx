"use client";

import Image from "next/image";
import styles from "./VerifySuccessCard.module.css";
import Button from "@/src/shared/ui/Button/Button";
import { useRouter } from "next/navigation";

type Props = {
  onPrimaryClick?: () => void;
};

// export const VerifySuccessCard: React.FC<Props> = ({ onPrimaryClick }) => {
export const VerifySuccessCard: React.FC<Props> = () => {
  const router = useRouter();

  return (
    <div className={styles.card}>
      <section className={styles.cardBorder}>
        <div className={styles.cardSection}>
          {/* <div className={styles.checkIcon}>✓</div> */}
          <Image
            src="/verify/check_success.svg"
            alt="logo"
            width={25.078126845108503}
            height={27.581251075956672}
            className={styles.logo}
            priority
          />

          <div className={styles.cardText}>
            <h2 className={styles.cardTitle}>
              You&apos;ve verified you&apos;re human!
            </h2>
            <p className={styles.cardSubtitle}>
              The contract will automatically verify your attestation status on
              Celo L2 and check for any duplicate claims
            </p>
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <Button
            connected={false}
            address="0x7853c0b7e123c0b7"
            onClick={() => router.push("/verify/fail")}
            style={{ width: "100%" }}
            children="Mint Human NFT"
          />
        </div>
      </section>

      <div className={styles.walletCard}>
        <div className={styles.walletRow}>
          <span className={styles.walletLabel}>Connected Wallet</span>
          <button className={styles.disconnect}>Disconnect</button>
        </div>
        <div className={styles.walletAddress}>
          0x7853Eabb6cFa980eBfD27e3F77e69590EA53c0b7
        </div>
      </div>
    </div>
  );
};
