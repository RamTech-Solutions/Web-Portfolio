import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

// Tipografia
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RamTech Solutions Portfolio",
  description: "Portafolio by RamTech Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
