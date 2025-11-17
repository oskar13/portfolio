import type { Metadata } from "next";
import Script from "next/script";
import HeaderMenu from "./components/HeaderMenu";

import "./globals.css";



export const metadata: Metadata = {
  title: "Joosep Oskar Ehaver - Full stack developer",
  description: "I combine technical expertise with a deep understanding of culture and communication. Whether crafting tailored web solutions or providing strategic consultations, I bridge the gap between technology and people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body >

        <HeaderMenu />

        {children}

        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="310915fa-81c1-4d85-9065-991a6ba3f428"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
