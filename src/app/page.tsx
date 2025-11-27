'use client'

// import Image from "next/image";
import styles from "./Home.module.css";
import { Footer, Header } from "../widgets";

export default function Home() {
  return (
    <>
    <Header />
      <div className={styles.container}>
        <div>
          <div className={styles.title}>Claim your <br/> Human NFT</div>
          <div className={styles.subtitle}>Mint your “I am human” NFT on Human appchain</div>
        </div>
        <div className={styles.button}>Connect Wallet</div>
      </div>
    <Footer />
    </>
  );
}
