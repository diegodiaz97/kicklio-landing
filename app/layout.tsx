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
  title: "kicklio - Innovative Mobile App",
  description: "Discover kicklio, the ultimate mobile app built with KMM for seamless cross-platform experience.",
  icons: [
    {
      rel: "icon",
      url: "/kicklio-logomark.svg?v=3",
      type: "image/svg+xml",
    },
    {
      rel: "apple-touch-icon",
      url: "/kicklio-logomark.svg?v=3",
      sizes: "180x180",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
