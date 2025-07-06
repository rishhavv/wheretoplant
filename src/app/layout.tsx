import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "wheretoplant - AI-Powered Forest Restoration Site Selection",
  description: "Revolutionizing forest restoration through AI-powered site selection. Restore AI Bot (@seedsagebot) helps prevent $7M+ annual waste by identifying optimal plantation locations.",
  keywords: "forest restoration, AI, tree planting, conservation, Himachal Pradesh, environmental technology, plantation site selection, seedsagebot",
  authors: [{ name: "wheretoplant" }],
  openGraph: {
    title: "wheretoplant - AI-Powered Forest Restoration",
    description: "Revolutionizing forest restoration through AI-powered site selection",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "wheretoplant - AI-Powered Forest Restoration",
    description: "Revolutionizing forest restoration through AI-powered site selection",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
