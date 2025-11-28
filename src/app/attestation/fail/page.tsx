"use client";

import styles from "./page.module.css";
import { Header, Footer, StepOneCard, StepTwoQRCard, SuccessCard, ErrorCard } from "../../../widgets";

export default function AttestationPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1 className={styles.title}>
              Self Attestation
            </h1>
            <p className={styles.subtitle}>
              Verify your humanity on Celo with Self Protocol
            </p>
          </div>

          {/* <StepOneCard /> */}
          {/* <StepTwoQRCard /> */}
          {/* <SuccessCard /> */}
          <ErrorCard />
        </div>
      </main>
      <Footer />
    </>
  );
}
