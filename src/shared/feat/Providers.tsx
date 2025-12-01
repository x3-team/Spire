"use client";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { config } from "../../../wagmiConfig";
import { ReactNode } from "react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

// import { getDefaultConfig, RainbowKitProvider, ConnectButton } from '@rainbow-me/rainbowkit';
// import { WagmiProvider } from 'wagmi';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";

// import '@rainbow-me/rainbowkit/styles.css';
// import { english } from '@rainbow-me/rainbowkit/locales/en';

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, 
});

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  //   useEffect(() => {
  //   const originalLang = document.documentElement.lang;
  //   document.documentElement.lang = 'en';

  //   return () => {
  //     document.documentElement.lang = originalLang;
  //   };
  // }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
