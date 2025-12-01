"use client";

import styles from "./page.module.css";
import '@rainbow-me/rainbowkit/styles.css';
// import Button from "../shared/ui/Button/Button";
import { Footer, HeaderMain } from "../widgets";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";

import buttonStyles from "../shared/ui/Button/Button.module.css";
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

  // const handleClick = () => {
  //   if (!isConnected && openConnectModal) {
  //     openConnectModal();
  //   } else {
  //     router.push("/verify/one");
  //   }
  // };

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
          {/* <ConnectButton/> */}
          <ConnectButton.Custom>
            {({ account, chain, openConnectModal, openAccountModal, openChainModal, mounted }) => {
              const ready = mounted;
              const connected = ready && account && chain;
              return (
                <button
                  className={connected ? buttonStyles.connected : buttonStyles.button}
                  type="button"
                  onClick={() => {
                    if (!connected) {
                      openConnectModal && openConnectModal();
                    } else {
                      openAccountModal && openAccountModal();
                    }
                  }}
                >
                  {connected ? (
                    <>
                      <span className={buttonStyles.connectedText}>Connected Wallet</span>
                      <span className={buttonStyles.address}>{account?.displayName}</span>
                    </>
                  ) : (
                    "Connect Wallet"
                  )}
                </button>
              );
            }}

          </ConnectButton.Custom>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}
