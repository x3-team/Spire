"use client";

import styles from "./page.module.css";
import { Header, Footer } from "../../widgets";

export default function MintFailPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.content}>
          <section className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.closeIcon}>✕</div>

              <h1 className={styles.title}>
                Failed. Your zkPassport has already
                <br />
                been used to get this NFT!
              </h1>

              <p className={styles.subtitle}>
                Sybil resistance prevents duplicate mints. One person = one NFT.
              </p>
            </div>

            <button className={styles.primaryButton}>
              Back to Human Appchain
            </button>
          </section>

          <section className={styles.faqSection}>
            <h2 className={styles.faqTitle}>FAQ</h2>

            <div className={styles.faqItem}>
              <p className={styles.faqQuestion}>
                Can I associate zkPassport with another public wallet address?
              </p>
              <p className={styles.faqAnswer}>
                No. Our sybil-resistance protocol ensures one passport can only be
                used once, preventing any wallet switching to gain multiple NFTs.
              </p>
            </div>

            <div className={styles.faqItem}>
              <p className={styles.faqQuestion}>Can I mint another NFT?</p>
              <p className={styles.faqAnswer}>
                No. Your zkPassport grants the right to only one NFT in this
                collection.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
