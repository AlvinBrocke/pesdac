import Link from "next/link";
import type { Ministry } from "@/lib/ministries";

export default function MinistryDetail({ ministry }: { ministry: Ministry }) {
  const paragraphs = ministry.longDescription.split("\n\n");

  return (
    <section className="ministry-detail">
      <div className="ministry-detail-inner">
        {/* Left column: content */}
        <div className="ministry-detail-content">
          <div className="ministry-long-desc">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="ministry-activities">
            <h2 className="ministry-activities-title">What we do</h2>
            <ul className="ministry-activities-list">
              {ministry.activities.map((activity) => (
                <li key={activity}>
                  <i className="ti ti-check" aria-hidden="true" />
                  {activity}
                </li>
              ))}
            </ul>
          </div>

          <blockquote className="ministry-scripture">
            <p className="ministry-scripture-text">
              &ldquo;{ministry.scriptureText}&rdquo;
            </p>
            <cite className="ministry-scripture-ref">
              &mdash; {ministry.scriptureRef}
            </cite>
          </blockquote>
        </div>

        {/* Right column: info sidebar */}
        <aside className="ministry-sidebar">
          {/* Leader card */}
          <div className="ministry-leader-card">
            <div
              className="ministry-leader-avatar"
              style={{ backgroundColor: ministry.color }}
              aria-hidden="true"
            >
              {ministry.leader
                .split(" ")
                .slice(-2)
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="ministry-leader-info">
              <div className="ministry-leader-label">Ministry Leader</div>
              <div className="ministry-leader-name">{ministry.leader}</div>
              <div className="ministry-leader-role">{ministry.leaderRole}</div>
            </div>
          </div>

          {/* Meeting info */}
          <div className="ministry-info-card">
            <h3 className="ministry-info-heading">When &amp; Where</h3>
            <div className="ministry-info-item">
              <i className="ti ti-clock" aria-hidden="true" />
              <div>
                <div className="ministry-info-label">Meeting Time</div>
                <div className="ministry-info-value">{ministry.meetingTime}</div>
              </div>
            </div>
            <div className="ministry-info-item">
              <i className="ti ti-map-pin" aria-hidden="true" />
              <div>
                <div className="ministry-info-label">Location</div>
                <div className="ministry-info-value">{ministry.meetingLocation}</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="ministry-cta-card">
            <h3>Get involved</h3>
            <p>
              Interested in joining the {ministry.title}? Reach out and we will
              connect you with the team.
            </p>
            <Link
              href={`/contact?subject=Ministries+%26+Events`}
              className="btn-gold"
            >
              Contact Us
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
