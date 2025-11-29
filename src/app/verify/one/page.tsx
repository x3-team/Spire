"use client";

import styles from "./page.module.css";
import { Header, Footer, VerifyStepOneCard } from "../../../widgets";

export default function VerifyPageOne() {
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
          <VerifyStepOneCard />
        </div>
      </main>
      <Footer />
    </>
  );
}
