import type { Metadata } from "next";
import GalleryHero from "@/components/gallery/GalleryHero";
import PhotoGrid from "@/components/gallery/PhotoGrid";
import VideoHighlights from "@/components/gallery/VideoHighlights";
import { getLatestVideos } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and videos from Prince Emmanuel SDA Church — Sabbath services, community events, special programmes, and life together in Osu, Accra.",
  openGraph: {
    title: "Gallery – PESDAC | Prince Emmanuel SDA Church",
    description:
      "A visual snapshot of church life at PESDAC — worship moments, outreach, celebrations, and community.",
    images: [{ url: "/church-visit.jpg", width: 1280, height: 720 }],
  },
  alternates: { canonical: "/gallery" },
};

export default async function GalleryPage() {
  const videos = await getLatestVideos(6);

  return (
    <>
      <GalleryHero />
      <PhotoGrid />
      <VideoHighlights videos={videos} />
    </>
  );
}
