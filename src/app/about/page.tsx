import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import WhatWeBelieve from "@/components/about/WhatWeBelieve";
import Leadership from "@/components/about/Leadership";
import AboutCta from "@/components/about/AboutCta";

export const metadata: Metadata = {
  title: "About – PESDAC",
  description:
    "Learn about Prince Emmanuel Seventh-day Adventist Church — our story, mission, beliefs, and leadership team.",
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
