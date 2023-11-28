import "./globals.css";
import type { Metadata } from "next";
import { Lato, Oswald, Inter } from "next/font/google";
import Header from "./widgets/header";

const lato = Lato({ weight: ["400"], subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Monikaverein",
  description: "Monikaverein",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fonts = `${lato.className} ${oswald.className} ${inter.className}`;

  return (
    <html lang="en" data-theme="light">
      <body className={fonts}>
        <Header />
        {children}
      </body>
    </html>
  );
}
