import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "旅する福女｜あなたに合う海外旅行先診断",
  description:
    "10問で、あなたの予算・日数・旅の目的に合う海外旅行先を提案します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
