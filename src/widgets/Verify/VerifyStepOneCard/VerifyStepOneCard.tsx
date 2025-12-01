"use client";

import Image from "next/image";
import styles from "./VerifyStepOneCard.module.css";
import Button from "@/src/shared/ui/Button/Button";
import { useRouter } from "next/navigation";

type Props = {
  onPrimaryClick?: () => void;
};

// export const VerifyStepOneCard: React.FC<Props> = ({ onPrimaryClick }) => {
export const VerifyStepOneCard: React.FC<Props> = () => {
  const router = useRouter();

  return (
    <section className={styles.card}>
      <div className={styles.cardBorder}>
        <div className={styles.cardSection}>
          <Image
            src="/verify/check.svg"
            alt="logo"
            width={25.078126845108503}
            height={27.581251075956672}
            className={styles.logo}
            priority
          />
          <div className={styles.cardText}>
            <h2 className={styles.cardTitle}>
              This NFT can only be claimed by verified humans
            </h2>
            <p className={styles.cardSubtitleCustom}>
              The contract will automatically verify your attestation status on
              Celo L2 and check for any duplicate claims
            </p>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            connected={false}
            address="0x7853c0b7e123c0b7"
            onClick={() => router.push("/verify/success")}
            children="Verify your humanity "
          />
        </div>
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
