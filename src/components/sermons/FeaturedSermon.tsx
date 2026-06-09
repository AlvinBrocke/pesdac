import Image from "next/image";
import type { YouTubeVideo } from "@/lib/youtube";

const YOUTUBE_BASE = "https://www.youtube.com/watch?v=";

export default function FeaturedSermon({ video }: { video: YouTubeVideo }) {
  return (
    <section className="featured-sermon">
      <div className="featured-sermon-inner">
        <div className="featured-sermon-label">Latest Message</div>
        <a
          className="featured-sermon-thumb video-thumb"
          href={`${YOUTUBE_BASE}${video.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Watch "${video.title}" — ${video.date} (opens in new tab)`}
        >
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            style={{ objectFit: "cover", zIndex: 0 }}
          />
          <div className="play-btn" aria-hidden="true">
            <i className="ti ti-player-play" />
          </div>
          <div className="video-label" aria-hidden="true">
            <span>Latest Sermon</span>
            <p>{video.title}</p>
          </div>
        </a>

        <div className="featured-sermon-meta">
          <p className="featured-sermon-date">{video.date}</p>
          <h2 className="featured-sermon-title">{video.title}</h2>
          <p className="featured-sermon-desc">
            Watch the full message from our most recent Sabbath service. Share
            it with a friend or revisit it during your personal devotional time.
          </p>
          <a
            href={`${YOUTUBE_BASE}${video.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            aria-label={`Watch "${video.title}" on YouTube (opens in new tab)`}
          >
            <i className="ti ti-brand-youtube" aria-hidden="true" />
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
