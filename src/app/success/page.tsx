"use client";

import styles from "./page.module.css";
import { Header, Footer } from "../../widgets";

export default function MintSuccessPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.content}>
          <section className={styles.card}>
            <div className={styles.topText}>
              <h1 className={styles.title}>
                Success!
                <br />
                “I am human”
                <br />
                NFT is minted!
              </h1>
              <p className={styles.subtitle}>
                It will take a few minutes for the NFT to mint and appear in
                your wallet
              </p>
            </div>

            {/* <div className={styles.imageBlock}></div> */}

            <div className={styles.verifiedBanner}>
              <span>Your identity has been verified using zkPassport</span>
              <span className={styles.shieldIcon}>🛡</span>
            </div>

            <button className={styles.primaryButton}>
              Try to mint another to see Human NFT’s Sybil resistance in action
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
