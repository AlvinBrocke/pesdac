import type { Metadata } from "next";
import MinistriesHero from "@/components/ministries/MinistriesHero";
import MinistriesGrid from "@/components/ministries/MinistriesGrid";

export const metadata: Metadata = {
  title: "Ministries",
  description:
    "Explore the ministries of Prince Emmanuel SDA Church — Youth Ministry, Music & Worship, Women's Ministry, Sabbath School, Calvary Hour, and Pathfinders. Find your place to serve.",
  openGraph: {
    title: "Ministries – PESDAC | Prince Emmanuel SDA Church",
    description:
      "Discover the ministries at Prince Emmanuel SDA Church, Osu Accra. From youth discipleship to community outreach — there is a place for everyone.",
    images: [
      {
        url: "/church-visit.jpg",
        width: 1280,
        height: 720,
        alt: "Prince Emmanuel SDA Church congregation, Osu Accra",
      },
    ],
  },
  alternates: {
    canonical: "/ministries",
  },
};

export default function MinistriesPage() {
  return (
    <>
      <MinistriesHero />
      <MinistriesGrid />
    </>
  );
}
