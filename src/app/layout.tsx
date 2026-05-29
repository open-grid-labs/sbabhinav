import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stories by Abhinav | Premium Photography & Cinematic Films",
  description:
    "Capturing life's most extraordinary moments — weddings, adventures, real estate, and beyond. Premium photography services available worldwide.",
  keywords: [
    "wedding photography",
    "adventure photography",
    "pre-wedding shoot",
    "real estate photography",
    "cinematic films",
    "Stories by Abhinav",
  ],
  openGraph: {
    title: "Stories by Abhinav | Premium Photography & Cinematic Films",
    description:
      "Capturing life's most extraordinary moments — weddings, adventures, real estate, and beyond.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
