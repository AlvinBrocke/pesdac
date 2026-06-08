import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateIn from "@/components/ui/AnimateIn";
import { getLatestVideos, type YouTubeVideo } from "@/lib/youtube";

const YOUTUBE_BASE = "https://www.youtube.com/watch?v=";
const YOUTUBE_CHANNEL =
  "https://www.youtube.com/channel/UCiY1R5aOKZDTd1Xnwt5eQng/videos";

const FALLBACK_SERMONS: YouTubeVideo[] = [
  {
    videoId: "UEVCUQjfdIM",
    title: "Touch Me and See",
    date: "Jun 6, 2026",
    thumbnail: "/thumb-UEVCUQjfdIM.jpg",
  },
  {
    videoId: "B7rQt9O0UgQ",
    title: "Sabbath Worship Service",
    date: "May 30, 2026",
    thumbnail: "/thumb-B7rQt9O0UgQ.jpg",
  },
  {
    videoId: "FZNaChXG_7w",
    title: "Enoch Walked with God",
    date: "May 16, 2026",
    thumbnail: "/thumb-FZNaChXG_7w.jpg",
  },
  {
    videoId: "AiJ9TQIHZNk",
    title: "Book Launch: Anchored in a Faithful Friend",
    date: "May 3, 2026",
    thumbnail: "/thumb-AiJ9TQIHZNk.jpg",
  },
];

export default async function SermonsSection() {
  const fetched = await getLatestVideos(4);
  const videos = fetched.length ? fetched : FALLBACK_SERMONS;

  const latest = videos[0];

  return (
    <section className="section" style={{ background: "white" }}>
      <SectionHeader label="This Week's Message" title="Watch. Reflect. Be moved." />
      <AnimateIn className="sermon-grid">
        <a
          className="video-thumb"
          href={`${YOUTUBE_BASE}${latest.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Watch: ${latest.title}`}
        >
          <Image
            src={latest.thumbnail}
            alt={latest.title}
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            style={{ objectFit: "cover", zIndex: 0 }}
          />
          <div className="play-btn">
            <i className="ti ti-player-play" />
          </div>
          <div className="video-label">
            <span>Latest Sermon</span>
            <p>{latest.title}</p>
          </div>
        </a>

        <div>
          <div className="sermon-list">
            {videos.map((video, i) => (
              <a
                key={video.videoId}
                className="sermon-row"
                href={`${YOUTUBE_BASE}${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <span className="sermon-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="sermon-info">
                  <h4>{video.title}</h4>
                  <span>{video.date}</span>
                </div>
                <i className="ti ti-player-play" />
              </a>
            ))}
          </div>
          <a
            className="watch-all"
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
          >
            All Sermons on YouTube <i className="ti ti-arrow-right" />
          </a>
        </div>
      </AnimateIn>
    </section>
  );
}
