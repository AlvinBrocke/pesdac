import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pesdacgh.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PESDAC – Prince Emmanuel SDA Church | Osu, Accra",
    template: "%s | PESDAC – Prince Emmanuel SDA Church",
  },
  description:
    "Prince Emmanuel Seventh-day Adventist Church (PESDAC) in Osu, Accra, Ghana. English-speaking congregation worshipping every Saturday — Sabbath School 9 AM, Main Service 10 AM. All are welcome.",
  keywords: [
    "Prince Emmanuel SDA Church",
    "PESDAC",
    "Seventh-day Adventist Church Accra",
    "SDA Church Ghana",
    "SDA Church Osu",
    "Adventist church Accra",
    "church Ringway Estates Osu",
    "Sabbath worship Accra",
    "English church Accra",
    "Ghana Adventist church",
  ],
  authors: [{ name: "Prince Emmanuel SDA Church", url: SITE_URL }],
  creator: "Prince Emmanuel SDA Church",
  publisher: "Prince Emmanuel SDA Church",
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: SITE_URL,
    siteName: "PESDAC – Prince Emmanuel SDA Church",
    title: "PESDAC – Prince Emmanuel SDA Church | Osu, Accra",
    description:
      "English-speaking Seventh-day Adventist church in Ringway Estates, Osu, Accra. Join us every Saturday for worship, Sabbath School, and community.",
    images: [
      {
        url: "/church-visit.jpg",
        width: 1280,
        height: 720,
        alt: "Prince Emmanuel SDA Church congregation worshipping in Osu, Accra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pesdacgh",
    creator: "@pesdacgh",
    title: "PESDAC – Prince Emmanuel SDA Church | Osu, Accra",
    description:
      "English-speaking Seventh-day Adventist church in Ringway Estates, Osu, Accra. All are welcome every Sabbath.",
    images: ["/church-visit.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <JsonLd />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
