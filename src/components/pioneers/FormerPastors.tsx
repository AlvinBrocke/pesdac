{/* TODO: Replace placeholder entries with real pastor names, years, and bios — contact the comms team to supply accurate records. */}

const PASTORS = [
  {
    initials: "PA",
    name: "Pastor [Name]",
    tenure: "199X – 200X",
    bio: "Bio coming soon. Our comms team is gathering records of the founding and early pastoral leadership of Prince Emmanuel SDA Church.",
  },
  {
    initials: "PB",
    name: "Pastor [Name]",
    tenure: "200X – 201X",
    bio: "Bio coming soon. We are compiling a full record of every pastor who has served this congregation.",
  },
  {
    initials: "PC",
    name: "Pastor [Name]",
    tenure: "201X – 202X",
    bio: "Bio coming soon. Each pastor who has led PESDAC has left a lasting mark on our congregation's faith and character.",
  },
] as const;

export default function FormerPastors() {
  return (
    <section className="pioneer-pastors">
      <div className="pioneer-inner">
        <div className="pioneer-section-header">
          <div className="section-label">Pastoral Leadership</div>
          <h2 className="pioneer-section-title pioneer-title-dark">
            Those who
            <br />
            <em>led the way</em>
          </h2>
          <p className="pioneer-section-sub">
            We honour the men who served as Senior Pastor of Prince Emmanuel
            SDA Church throughout our 34-year history.
          </p>
        </div>

        <div className="pioneer-pastor-grid">
          {PASTORS.map((p) => (
            <div key={p.initials} className="pioneer-pastor-card">
              <div className="pioneer-pastor-avatar">{p.initials}</div>
              <div className="pioneer-pastor-info">
                <h3 className="pioneer-pastor-name">{p.name}</h3>
                <p className="pioneer-pastor-tenure">{p.tenure}</p>
                <p className="pioneer-pastor-bio">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
