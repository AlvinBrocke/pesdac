"use client";

import { useState } from "react";
import type { YouTubeVideo } from "@/lib/youtube";

const YOUTUBE_BASE = "https://www.youtube.com/watch?v=";

const SERIES = [
  "All",
  "Sabbath Worship",
  "Prayer Meeting",
  "Youth Sabbath",
  "Special Events",
] as const;
type Series = (typeof SERIES)[number];

function inferSeries(title: string): Series {
  const t = title.toLowerCase();
  if (t.includes("prayer") || t.includes("revival")) return "Prayer Meeting";
  if (t.includes("youth") || t.includes("pathfinder")) return "Youth Sabbath";
  if (
    t.includes("launch") ||
    t.includes("special") ||
    t.includes("concert") ||
    t.includes("investiture") ||
    t.includes("harvest")
  )
    return "Special Events";
  return "Sabbath Worship";
}

export default function SermonArchive({ videos }: { videos: YouTubeVideo[] }) {
  const [active, setActive] = useState<Series>("All");

  const filtered =
    active === "All" ? videos : videos.filter((v) => inferSeries(v.title) === active);

  return (
    <section className="sermon-archive">
      <div className="sermon-archive-inner">
        <div className="sermon-archive-header">
          <h2 className="sermon-archive-title">All Sermons</h2>
          <div className="sermon-filter-pills" role="group" aria-label="Filter sermons by series">
            {SERIES.map((s) => (
              <button
                key={s}
                className={`sermon-filter-pill${active === s ? " sermon-filter-pill--active" : ""}`}
                onClick={() => setActive(s)}
                aria-pressed={active === s}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="sermon-archive-empty">
            No sermons found for this category yet. Check back soon!
          </p>
        ) : (
          <div className="sermon-list">
            {filtered.map((video, i) => (
              <a
                key={video.videoId}
                className="sermon-row"
                href={`${YOUTUBE_BASE}${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                aria-label={`Watch "${video.title}" — ${video.date} (opens in new tab)`}
              >
                <span className="sermon-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="sermon-info" aria-hidden="true">
                  <h4>{video.title}</h4>
                  <span>{video.date}</span>
                </div>
                <i className="ti ti-player-play" aria-hidden="true" />
              </a>
            ))}
          </div>
        )}

        <div className="sermon-archive-footer">
          <a
            href="https://www.youtube.com/channel/UCiY1R5aOKZDTd1Xnwt5eQng/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="watch-all"
            aria-label="View all sermons on YouTube (opens in new tab)"
          >
            View full playlist on YouTube{" "}
            <i className="ti ti-arrow-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
