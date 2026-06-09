import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import WhatWeBelieve from "@/components/about/WhatWeBelieve";
import Leadership from "@/components/about/Leadership";
import AboutCta from "@/components/about/AboutCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover PESDAC's 34-year story in Osu, Accra — our mission, core beliefs, and the pastoral team serving Prince Emmanuel Seventh-day Adventist Church.",
  openGraph: {
    title: "About – PESDAC | Prince Emmanuel SDA Church",
    description:
      "Discover our 34-year story, mission, beliefs, and leadership. Prince Emmanuel SDA Church has been a place of worship and community in Osu, Accra since 1992.",
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
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <WhatWeBelieve />
      <Leadership />
      <AboutCta />
    </>
  );
}
