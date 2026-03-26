import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function parseSiteUrl(value: string | undefined): URL | undefined {
  if (!value) return undefined;

  try {
    return new URL(value);
  } catch {
    return undefined;
  }
}

const siteUrl = parseSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

const ogImageUrl = siteUrl
  ? new URL("/opengraph-image", siteUrl).toString()
  : "/opengraph-image";
const twitterImageUrl = siteUrl
  ? new URL("/twitter-image", siteUrl).toString()
  : "/twitter-image";

export const metadata: Metadata = {
  title: {
    default: "福大ピアプロ",
    template: "%s | 福大ピアプロ",
  },
  description: "創作活動を通じて仲間と共に成長し、素敵な作品を生み出すサークルです。",
  metadataBase: siteUrl,
  openGraph: {
    title: "福大ピアプロ",
    description: "創作活動を通じて仲間と共に成長し、素敵な作品を生み出すサークルです。",
    url: siteUrl?.toString() ?? "/",
    siteName: "福大ピアプロ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "福大ピアプロ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "福大ピアプロ",
      template: "%s | 福大ピアプロ",
    },
    description: "創作活動を通じて仲間と共に成長し、素敵な作品を生み出すサークルです。",
    images: [twitterImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
