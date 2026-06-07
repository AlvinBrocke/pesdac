import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import SermonRow from "@/components/ui/SermonRow";

const YOUTUBE_BASE = "https://www.youtube.com/watch?v=";
const YOUTUBE_CHANNEL = "https://www.youtube.com/channel/UCiY1R5aOKZDTd1Xnwt5eQng/videos";

const SERMONS = [
  {
    num: "01",
    title: "Touch Me and See",
    date: "Jun 6, 2026",
    videoId: "UEVCUQjfdIM",
    thumbnail: "/thumb-UEVCUQjfdIM.jpg",
  },
  {
    num: "02",
    title: "Sabbath Worship Service",
    date: "May 30, 2026",
    videoId: "B7rQt9O0UgQ",
    thumbnail: "/thumb-B7rQt9O0UgQ.jpg",
  },
  {
    num: "03",
    title: "Enoch Walked with God",
    date: "May 16, 2026",
    videoId: "FZNaChXG_7w",
    thumbnail: "/thumb-FZNaChXG_7w.jpg",
  },
  {
    num: "04",
    title: "Book Launch: Anchored in a Faithful Friend",
    date: "May 3, 2026",
    videoId: "AiJ9TQIHZNk",
    thumbnail: "/thumb-AiJ9TQIHZNk.jpg",
  },
] as const;

export default function SermonsSection() {
  const latest = SERMONS[0];

  return (
    <section className="section" style={{ background: "white" }}>
      <SectionHeader label="This Week's Message" title="Watch. Reflect. Be moved." />
      <div className="sermon-grid">
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
            {SERMONS.map((sermon) => (
              <a
                key={sermon.num}
                className="sermon-row"
                href={`${YOUTUBE_BASE}${sermon.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <span className="sermon-num">{sermon.num}</span>
                <div className="sermon-info">
                  <h4>{sermon.title}</h4>
                  <span>{sermon.date}</span>
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
      </div>
    </section>
  );
}
