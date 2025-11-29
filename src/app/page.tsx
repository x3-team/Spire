"use client";

import styles from "./page.module.css";
import '@rainbow-me/rainbowkit/styles.css';
import Button from "../shared/ui/Button/Button";
import { Footer, HeaderMain } from "../widgets";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";

// import { getDefaultConfig, RainbowKitProvider, ConnectButton } from '@rainbow-me/rainbowkit';
// import { WagmiProvider } from 'wagmi';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';

export default function HomePage() {
  const router = useRouter();
  const { openConnectModal } = useConnectModal();
  const { isConnected, address } = useAccount();

  useEffect(() => {
    if (isConnected) {
      router.push("/verify/one");
    }
  }, [isConnected, router]);

  const handleClick = () => {
    if (!isConnected && openConnectModal) {
      openConnectModal();
    } else {
      router.push("/verify/one");
    }
  };

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
          {/* <Button
            connected={isConnected}
            address={address}
            onClick={handleClick}
          /> */}
          <ConnectButton />
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}
