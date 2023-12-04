import "./globals.css";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import Header from "./widgets/header";
import Footer from "./widgets/footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Monikaverein",
  description: "Monikaverein",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const font = `${oswald.variable} font-sans;`;

  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={`${font} bg-white-f9`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
