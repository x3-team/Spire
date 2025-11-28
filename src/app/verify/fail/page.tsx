'use client';

import { useState } from 'react';
import styles from './page.module.css';
// import { Header, Footer } from '../../widgets';
import { Header, Footer, VerifyStepOneCard, VerifySuccessCard, VerifyErrorCard } from "../../../widgets";

export default function VerifyPage() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1 className={styles.title}>
              Claim your Human NFT
            </h1>
            <p className={styles.subtitle}>
              Mint your &ldquo;I am human&rdquo; NFT on Human appchain
            </p>
          </div>

          {isVerified ? (
            <VerifySuccessCard
              onPrimaryClick={() => {
                console.log("Mint Human NFT (mock)");
              }}
            />
          ) : (
            // <VerifyStepOneCard
            //   onPrimaryClick={() => {
            //     // здесь потом будет реальный запуск проверки
            //     setIsVerified(true);
            //   }}
            // />
            <VerifyErrorCard />
          )}
        </div>

      </main>
      <Footer />
    </>
  );
}