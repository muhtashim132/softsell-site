import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Font imports
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Updated metadata for SEO
export const metadata = {
  title: "SoftSell — Sell Your Unused Software Licenses", // Page title
  description:
    "Turn unused software licenses into cash with SoftSell. Fast, secure, and trusted by businesses.", // Meta description
  keywords: [
    "Sell software licenses",
    "Unused license resale",
    "SoftSell",
    "B2B software resale",
  ], // Keywords
  authors: [{ name: "SoftSell Team", url: "https://softsell-site-beev.vercel.app" }], // Author info
  icons: {
    icon: "/favicon.ico", // Favicon path
  },
  openGraph: {
    title: "SoftSell — Sell Your Unused Software Licenses", // OG Title
    description:
      "Convert unused software licenses into cash. Quick, safe, and secure.", // OG Description
    url: "https://softsell-site-beev.vercel.app", // OG URL
    siteName: "SoftSell",
    images: [
      {
        url: "/vercel.svg", // OG Image (You can replace this with a custom image)
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
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
