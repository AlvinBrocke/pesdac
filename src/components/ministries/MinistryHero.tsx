import type { Ministry } from "@/lib/ministries";

export default function MinistryHero({ ministry }: { ministry: Ministry }) {
  return (
    <section
      className="ministry-hero"
      style={{
        background: `linear-gradient(135deg, ${ministry.color} 0%, #1a0a00 100%)`,
      }}
    >
      <div className="ministry-hero-inner">
        <div className="ministry-hero-icon" aria-hidden="true">
          <i className={`ti ${ministry.icon}`} />
        </div>
        <div className="ministry-hero-tag">PESDAC Ministries</div>
        <h1 className="ministry-hero-title">{ministry.title}</h1>
        <p className="ministry-hero-sub">{ministry.description}</p>
        <div className="ministry-hero-meta">
          <span>
            <i className="ti ti-user" aria-hidden="true" />
            {ministry.leader} &mdash; {ministry.leaderRole}
          </span>
          <span>
            <i className="ti ti-clock" aria-hidden="true" />
            {ministry.meetingTime}
          </span>
          <span>
            <i className="ti ti-map-pin" aria-hidden="true" />
            {ministry.meetingLocation}
          </span>
        </div>
      </div>
    </section>
  );
}
