"use client";

// import Image from "next/image";
import styles from "./page.module.css";
import Button from "../shared/ui/Button/Button";
import { Footer, HeaderMain } from "../widgets";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <HeaderMain />
      <div className={styles.container}>
        <div className={styles.contantBlock}>
          <div className={styles.titleBlock}>
            <div className={styles.title}>
              Claim your <br /> Human NFT
            </div>
            <div className={styles.subtitle}>
              Mint your “I am human” NFT on Human appchain
            </div>
          </div>
          {/* <div className={styles.button}>Connect Wallet</div> */}
          {/* <Button connected={false} address="0x7853c0b7e123c0b7" onClick={() => {}} /> */}
          <Button
            connected={false}
            address="0x7853c0b7e123c0b7"
            onClick={() => router.push("/verify/one")}
          />

          {/* <Button connected={true} address="0x7853c0b7e123c0b7" onClick={() => {}} /> */}
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}
