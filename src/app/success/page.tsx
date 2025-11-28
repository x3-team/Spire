"use client";

import styles from "./page.module.css";
import { Header, Footer } from "../../widgets";
import Button from "@/src/shared/ui/Button/Button";
import { useRouter } from "next/navigation";

export default function MintSuccessPage() {
  const router = useRouter();

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

            {/* <button className={styles.primaryButton}>
              Try to mint another to see Human NFT’s Sybil resistance in action
            </button> */}
              <Button connected={false} address="0x7853c0b7e123c0b7" onClick={() => router.push("/fail")} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
