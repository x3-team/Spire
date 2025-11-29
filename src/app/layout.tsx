import type { Metadata } from "next";
import "./globals.css";
import Providers from "../shared/feat/Providers";

export const metadata: Metadata = {
  title: "Human NFT",
  description: "Claim your Human NFT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
