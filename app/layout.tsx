import type { Metadata } from "next";
import { A8LinkManager } from "@/components/A8LinkManager";
import "./globals.css";

const siteUrl = "https://tabisuru-fukuonna-diagnosis.vercel.app";
const siteTitle = "旅する福女｜あなたに合う海外旅行先診断";
const siteDescription = "10問で、あなたの予算・日数・旅の目的に合う海外旅行先を提案します。";
const ogpImage = "/images/ogp.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "旅する福女",
    images: [
      {
        url: ogpImage,
        width: 1200,
        height: 630,
        alt: "旅する福女 あなたに合う海外旅行先診断",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogpImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <A8LinkManager />
      </body>
    </html>
  );
}
