"use client";

import styles from "./page.module.css";
import { Header, Footer } from "../../widgets";
import Button from "@/src/shared/ui/Button/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
                <p className={styles.desktopText}>Success!<br />“I am human”</p>
                <p className={styles.mobileText}>Success! “I am human”</p>
                <p>NFT is minted!</p>
              </h1>
              <p className={styles.subtitle}>
                It will take a few minutes for the NFT <br /> to mint and appear
                in your wallet
              </p>
            </div>

            {/* <div className={styles.imageBlock}></div> */}

            <div className={styles.verifiedBanner}>
              <div className={styles.verified}>
                <span>Your identity has been verified using zkPassport</span>
                {/* <span className={styles.shieldIcon}>🛡</span> */}
                <Image
                  src="/mint/green_icon.svg"
                  alt="green_icon"
                  width={16.19999885559082}
                  height={16.19999885559082}
                  className={styles.logo}
                  priority
                />
              </div>
              {/* green_icon.svg */}
              <Button
                connected={false}
                address="0x7853c0b7e123c0b7"
                onClick={() => router.push("/fail")}
              />
            </div>

            {/* <button className={styles.primaryButton}>
              Try to mint another to see Human NFT’s Sybil resistance in action
            </button> */}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
