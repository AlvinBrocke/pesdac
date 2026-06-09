import type { Metadata } from "next";
import { getLatestVideos, type YouTubeVideo } from "@/lib/youtube";
import SermonsHero from "@/components/sermons/SermonsHero";
import FeaturedSermon from "@/components/sermons/FeaturedSermon";
import SermonArchive from "@/components/sermons/SermonArchive";

export const metadata: Metadata = {
  title: "Sermons",
  description:
    "Browse the full sermon archive from Prince Emmanuel SDA Church — weekly Sabbath messages, special services, and prayer meetings available to watch on YouTube.",
  openGraph: {
    title: "Sermons – PESDAC | Prince Emmanuel SDA Church",
    description:
      "Watch messages from Prince Emmanuel SDA Church, Osu Accra. Weekly Sabbath sermons, youth services, and special programmes in our full YouTube archive.",
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
    canonical: "/sermons",
  },
};

const FALLBACK_SERMONS: YouTubeVideo[] = [
  { videoId: "UEVCUQjfdIM", title: "Touch Me and See",                            date: "Jun 6, 2026",  thumbnail: "/thumb-UEVCUQjfdIM.jpg" },
  { videoId: "B7rQt9O0UgQ", title: "Sabbath Worship Service",                     date: "May 30, 2026", thumbnail: "/thumb-B7rQt9O0UgQ.jpg"  },
  { videoId: "FZNaChXG_7w", title: "Enoch Walked with God",                       date: "May 16, 2026", thumbnail: "/thumb-FZNaChXG_7w.jpg"  },
  { videoId: "AiJ9TQIHZNk", title: "Book Launch: Anchored in a Faithful Friend",  date: "May 3, 2026",  thumbnail: "/thumb-AiJ9TQIHZNk.jpg"  },
];

export default async function SermonsPage() {
  const fetched = await getLatestVideos(20);
  const videos = fetched.length ? fetched : FALLBACK_SERMONS;

  return (
    <>
      <SermonsHero />
      <FeaturedSermon video={videos[0]} />
      <SermonArchive videos={videos} />
    </>
  );
}
