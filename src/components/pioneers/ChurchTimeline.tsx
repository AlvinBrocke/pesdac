{/* TODO: Replace placeholder milestones with real church history — contact the comms team to supply accurate dates and descriptions. */}

const MILESTONES = [
  {
    year: "October 1992",
    title: "Church Founded",
    description:
      "Prince Emmanuel Seventh-day Adventist Church was established in Ringway Estates, Osu, Accra — a small gathering of believers with a great vision.",
  },
  {
    year: "Late 1990s",
    title: "First Building Expansion",
    description:
      "As the congregation grew, the church underwent its first major building expansion to accommodate new members and expanded ministry activities.",
  },
  {
    year: "2000s",
    title: "Pathfinders & Community Outreach",
    description:
      "The Pathfinder Club was established, and community outreach programmes were extended to surrounding neighbourhoods across Osu and beyond.",
  },
  {
    year: "2010s",
    title: "Youth Ministry & Media",
    description:
      "A dedicated Youth Ministry was launched, and the church began online broadcasting — bringing worship to members and seekers across Ghana and the diaspora.",
  },
  {
    year: "2020s",
    title: "Renovation & Growth",
    description:
      "Ongoing renovation of the sanctuary and expansion of ministries, including ACS, AMM, and Personal Ministries, to serve a growing and diverse congregation.",
  },
  {
    year: "October 2026",
    title: "34th Anniversary Celebration",
    description:
      "Prince Emmanuel SDA Church celebrates 34 years of worship, community, and service to the glory of God — with much more yet to come.",
  },
] as const;

export default function ChurchTimeline() {
  return (
    <section className="pioneer-timeline">
      <div className="pioneer-inner">
        <div className="pioneer-section-header">
          <div className="section-label pioneer-label">Church History</div>
          <h2 className="pioneer-section-title">
            34 years of
            <br />
            <em>faith and growth</em>
          </h2>
        </div>

        <ol className="pioneer-milestone-list">
          {MILESTONES.map((m, i) => (
            <li key={m.year} className={`pioneer-milestone pioneer-milestone--${i % 2 === 0 ? "left" : "right"}`}>
              <div className="pioneer-milestone-year">{m.year}</div>
              <div className="pioneer-milestone-card">
                <h3 className="pioneer-milestone-title">{m.title}</h3>
                <p className="pioneer-milestone-desc">{m.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
