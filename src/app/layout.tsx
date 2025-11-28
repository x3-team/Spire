import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
