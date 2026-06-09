{/* TODO: Replace placeholder entries with real founding member names and roles — contact the comms team to supply accurate records. */}

const ELDERS = [
  {
    name: "[Founding Elder Name]",
    role: "First Head Elder",
    note: "Name and details coming soon.",
  },
  {
    name: "[Founding Elder Name]",
    role: "First Elder",
    note: "Name and details coming soon.",
  },
  {
    name: "[Founding Deacon Name]",
    role: "Founding Deacon",
    note: "Name and details coming soon.",
  },
  {
    name: "[Founding Member Name]",
    role: "Charter Member",
    note: "Name and details coming soon.",
  },
] as const;

export default function FoundingElders() {
  return (
    <section className="pioneer-elders">
      <div className="pioneer-inner">
        <div className="pioneer-section-header">
          <div className="section-label pioneer-label">Founding Members</div>
          <h2 className="pioneer-section-title">
            The pioneers who
            <br />
            <em>built this church</em>
          </h2>
          <p className="pioneer-section-sub pioneer-sub-light">
            We acknowledge the founding elders, deacons, and charter members
            whose faith and sacrifice laid the foundation of Prince Emmanuel SDA
            Church in 1992.
          </p>
        </div>

        <div className="pioneer-elders-grid">
          {ELDERS.map((elder) => (
            <div key={elder.name + elder.role} className="pioneer-elder-item">
              <div className="pioneer-elder-icon">
                <i className="ti ti-award" aria-hidden="true" />
              </div>
              <div>
                <h3 className="pioneer-elder-name">{elder.name}</h3>
                <p className="pioneer-elder-role">{elder.role}</p>
                <p className="pioneer-elder-note">{elder.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
