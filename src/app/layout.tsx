import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "PESDAC – Prince Emmanuel SDA Church",
  description:
    "An English-speaking Seventh-day Adventist church in the heart of Ringway Estates, Osu, Accra.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
        />
      </head>
      <body>
        <Nav />
        {children}
        <SiteFooter />
        <ChatWidget />
      </body>
    </html>
  );
}
