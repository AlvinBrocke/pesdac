import type { Metadata } from "next";
import GiveHero from "@/components/give/GiveHero";
import GivingPhilosophy from "@/components/give/GivingPhilosophy";
import GivingTiers from "@/components/give/GivingTiers";
import GivingFaq from "@/components/give/GivingFaq";
import GivingCta from "@/components/give/GivingCta";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support the ministry of Prince Emmanuel SDA Church in Osu, Accra. Give your tithe, offering, or a special gift securely online via Paystack.",
  openGraph: {
    title: "Give – PESDAC | Prince Emmanuel SDA Church",
    description:
      "Give generously to Prince Emmanuel SDA Church. Tithe, local offerings, and special gifts accepted securely online. Every gift sustains our mission and community.",
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
    canonical: "/give",
  },
};

export default function GivePage() {
  return (
    <>
      <GiveHero />
      <GivingPhilosophy />
      <GivingTiers />
      <GivingFaq />
      <GivingCta />
    </>
  );
}
