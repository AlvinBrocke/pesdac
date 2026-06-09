import type { Metadata } from "next";
import PioneerHero from "@/components/pioneers/PioneerHero";
import ChurchTimeline from "@/components/pioneers/ChurchTimeline";
import FormerPastors from "@/components/pioneers/FormerPastors";
import FoundingElders from "@/components/pioneers/FoundingElders";

export const metadata: Metadata = {
  title: "Our Heritage",
  description:
    "Discover the history of Prince Emmanuel SDA Church — founded in October 1992 in Osu, Accra. Meet the pioneers, former pastors, and founding elders who shaped our congregation.",
  openGraph: {
    title: "Our Heritage – PESDAC | Prince Emmanuel SDA Church",
    description:
      "34 years of faith, community, and service. Explore the story of PESDAC — our founding, our leaders, and the milestones that made us who we are today.",
    images: [{ url: "/church-visit.jpg", width: 1280, height: 720 }],
  },
  alternates: { canonical: "/pioneers" },
};

export default function PioneersPage() {
  return (
    <>
      <PioneerHero />
      <ChurchTimeline />
      <FormerPastors />
      <FoundingElders />
    </>
  );
}
