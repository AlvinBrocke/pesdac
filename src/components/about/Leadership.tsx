const LEADERS = [
  {
    initials: "SN",
    name: "Pr. Samuel Nyarko",
    role: "Senior Pastor",
    bio: "Pr. Nyarko leads the congregation with a passion for expository preaching and community outreach. He holds a Master of Divinity and has served the Ghana Union for over 15 years.",
    color: "#6B2737",
  },
  {
    initials: "AE",
    name: "Pastor Dr. A. L. Ewoo",
    role: "Pastor Emeritus",
    bio: "A beloved shepherd of the church for decades, Pastor Dr. Ewoo continues to inspire the congregation through his writing, mentorship, and occasional ministry.",
    color: "#3D1A22",
  },
  {
    initials: "EO",
    name: "Emerald Oti-Boadi",
    role: "Youth & Young Adult Director",
    bio: "Emerald leads the Pathfinders, Adventurers, and Youth Ministry programmes with energy and vision, discipling the next generation of faith leaders.",
    color: "#7A3A4A",
  },
  {
    initials: "MB",
    name: "Margaret Boateng",
    role: "Women's Ministry Leader",
    bio: "Margaret co-ordinates the Women's Ministry, equipping women to discover their gifts and serve boldly within the church and the wider community.",
    color: "#5A2430",
  },
  {
    initials: "KA",
    name: "Kofi Asante",
    role: "Head Elder",
    bio: "Kofi provides steady spiritual oversight for the congregation, supporting the pastoral team and ensuring the smooth running of Sabbath worship services.",
    color: "#4A1E28",
  },
  {
    initials: "GD",
    name: "Grace Darko",
    role: "Music & Worship Director",
    bio: "Grace leads a talented team of musicians and vocalists in creating rich, God-centred worship experiences that draw hearts closer to Jesus every Sabbath.",
    color: "#6B2737",
  },
] as const;

import AnimateIn from "@/components/ui/AnimateIn";

export default function Leadership() {
  return (
    <section className="leadership">
      <div className="leadership-inner">
        <div className="leadership-header">
          <div className="section-label">Our Leadership</div>
          <h2>
            Shepherds who
            <br />
            <em>serve with love</em>
          </h2>
          <p className="leadership-sub">
            Our pastoral team and lay leaders are committed to nurturing a
            community where every person can grow, belong, and serve.
          </p>
        </div>
        <AnimateIn className="leaders-grid" stagger>
          {LEADERS.map((l) => (
            <article key={l.name} className="leader-card">
              <div
                className="leader-avatar"
                style={{ backgroundColor: l.color }}
                aria-hidden="true"
              >
                {l.initials}
              </div>
              <div className="leader-info">
                <h3>{l.name}</h3>
                <div className="leader-role">{l.role}</div>
                <p>{l.bio}</p>
              </div>
            </article>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}
