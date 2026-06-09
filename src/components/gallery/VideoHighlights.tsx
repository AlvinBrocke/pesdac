import type { YouTubeVideo } from "@/lib/youtube";
import Image from "next/image";

const FALLBACK_VIDEOS: YouTubeVideo[] = [
  {
    videoId: "UEVCUQjfdIM",
    title: "Sabbath Worship Service — Prince Emmanuel SDA Church",
    date: "Jan 1, 2025",
    thumbnail: "/thumb-UEVCUQjfdIM.jpg",
  },
  {
    videoId: "3Y9sSsSkEOE",
    title: "Morning Devotion — PESDAC",
    date: "Jan 1, 2025",
    thumbnail: "/thumb-3Y9sSsSkEOE.jpg",
  },
  {
    videoId: "AiJ9TQIHZNk",
    title: "Sabbath School & Worship — PESDAC",
    date: "Jan 1, 2025",
    thumbnail: "/thumb-AiJ9TQIHZNk.jpg",
  },
];

type Props = { videos: YouTubeVideo[] };

export default function VideoHighlights({ videos }: Props) {
  const display = videos.length ? videos.slice(0, 6) : FALLBACK_VIDEOS;

  return (
    <section className="gallery-videos-section">
      <div className="gallery-inner">
        <div className="gallery-header">
          <div className="section-label">Recent Services</div>
          <h2 className="section-title">
            Watch our
            <br />
            <em>latest services</em>
          </h2>
        </div>

        <div className="gallery-video-grid">
          {display.map((video) => (
            <a
              key={video.videoId}
              href={`https://youtu.be/${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-video-card"
              aria-label={`Watch: ${video.title} (opens YouTube)`}
            >
              <div className="video-thumb">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={480}
                  height={270}
                  className="gallery-video-img"
                />
                <div className="play-btn" aria-hidden="true">
                  <i className="ti ti-player-play-filled" />
                </div>
              </div>
              <div className="gallery-video-meta">
                <p className="gallery-video-title">{video.title}</p>
                <p className="gallery-video-date">{video.date}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="gallery-more-row">
          <a
            href="https://www.youtube.com/channel/UCiY1R5aOKZDTd1Xnwt5eQng/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="watch-all"
          >
            View full playlist on YouTube{" "}
            <i className="ti ti-arrow-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
