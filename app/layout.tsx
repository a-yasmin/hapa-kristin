import type { Metadata } from "next";
import { Arimo, Nunito_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-arimo",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito-sans",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hapa Kristin Clone",
  description: "Built with Next.js, Tailwind, and custom fonts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${arimo.variable}
          ${nunitoSans.variable}
          ${libreBaskerville.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
