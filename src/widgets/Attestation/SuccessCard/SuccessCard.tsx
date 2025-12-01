"use client";

import Button from "@/src/shared/ui/Button/Button";
import styles from "./SuccessCard.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const SuccessCard = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.card}>
        <section className={styles.cardBorder}>
          <div className={styles.cardSection}>
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
                Continue to the NFT claim app on the Human appchain
              </p>
            </div>
          </div>

          <div className={styles.buttonWrapper}>
            <Button
              connected={false}
              address="0x7853c0b7e123c0b7"
              onClick={() => router.push("/attestation/fail")}
              style={{ width: "100%" }}
              children="Go to Human Appchain"
            />
          </div>
        </section>
      </div>
    </>
  );
};
