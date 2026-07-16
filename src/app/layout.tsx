import type { Metadata } from "next";
import { Geist, Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "wheretoplant — ML plantation site & species selection",
  description:
    "wheretoplant is a machine-learning Telegram bot for forest restoration in Himachal Pradesh. Share a location and get a plantation-survival prediction plus native-species recommendations — in Hindi and English.",
  keywords:
    "forest restoration, machine learning, tree planting, species selection, plantation site selection, Himachal Pradesh, conservation, seedsagebot",
  authors: [{ name: "wheretoplant" }],
  openGraph: {
    title: "wheretoplant — ML plantation site & species selection",
    description:
      "Share a location, get a plantation-survival prediction and native-species recommendations. A machine-learning Telegram bot for forest restoration in Himachal Pradesh.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "wheretoplant — ML plantation site & species selection",
    description:
      "Machine-learning plantation site + species selection for forest restoration in Himachal Pradesh.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${fraunces.variable} ${plexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
