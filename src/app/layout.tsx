import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import StructuredData from "@/components/StructuredData";
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
  metadataBase: new URL("https://sbabhinav.com"),
  title: "Stories by Abhinav | Wedding Photography in Himachal Pradesh",
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
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "Stories by Abhinav | Wedding Photography in Himachal Pradesh",
    description:
      "Capturing life's most extraordinary moments — weddings, adventures, real estate, and beyond.",
    url: "https://sbabhinav.com",
    siteName: "Stories by Abhinav",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Stories by Abhinav — wedding photography in Himachal Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories by Abhinav | Wedding Photography in Himachal Pradesh",
    description:
      "Capturing life's most extraordinary moments — weddings, adventures, real estate, and beyond.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
