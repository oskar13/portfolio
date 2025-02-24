import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
