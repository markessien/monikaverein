import "./globals.css";
import type { Metadata } from "next";
import { Lato, Oswald, Inter } from "next/font/google";
import Header from "./widgets/header";

const lato = Lato({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

const inter = Inter({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Monikaverein",
  description: "Monikaverein",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fonts = `${lato.variable} ${oswald.variable} ${inter.variable} font-sans`;

  return (
    <html lang="en" data-theme="light">
      <body className={fonts}>
        <Header />
        {children}
      </body>
    </html>
  );
}
