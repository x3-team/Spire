"use client";

import styles from "./page.module.css";
import { HeaderHuman, Footer, VerifyStepOneCard } from "../../../widgets";
// import { HeaderHuman } from "@/src/widgets/Header/HeaderChange/HeaderHuman";

// HeaderHuman
export default function VerifyPageOne() {
  return (
    <>
      <HeaderHuman />
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
