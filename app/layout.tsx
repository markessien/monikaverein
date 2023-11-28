import "./globals.css";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import Header from "./widgets/header";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oswald",
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
  const font = `${oswald.variable} font-sans;`;

  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Lato:ital@0;1&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={font}>
        <Header />
        {children}
      </body>
    </html>
  );
}
