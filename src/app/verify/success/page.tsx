"use client";

import styles from "./page.module.css";
import {
  Header,
  Footer,
  VerifyStepOneCard,
  VerifySuccessCard,
  VerifyErrorCard,
} from "../../../widgets";

export default function VerifyPageSuccess() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1 className={styles.title}>Claim your Human NFT</h1>
            <p className={styles.subtitle}>
              Mint your &ldquo;I am human&rdquo; NFT on Human appchain
            </p>
          </div>

          <VerifySuccessCard />
        </div>
      </main>
      <Footer />
    </>
  );
}
