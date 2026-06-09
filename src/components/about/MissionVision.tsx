const CARDS = [
  {
    icon: "ti-target",
    label: "Our Mission",
    heading: "Making disciples who make disciples",
    body: "To proclaim the everlasting gospel, nurture believers in their walk with Christ, and serve our community with compassion — all in anticipation of His soon return.",
  },
  {
    icon: "ti-eye",
    label: "Our Vision",
    heading: "A transformed community, a changed world",
    body: "We envision a church where every member is spiritually mature, actively serving, and intentionally reaching others — so that Osu and beyond may experience the love of God.",
  },
  {
    icon: "ti-heart",
    label: "Our Values",
    heading: "The convictions that guide us",
    body: null,
    values: [
      { icon: "ti-bible", text: "Scripture as our ultimate authority" },
      { icon: "ti-users", text: "Radical hospitality for every person" },
      { icon: "ti-star", text: "Excellence as an act of worship" },
      { icon: "ti-world", text: "Compassionate community service" },
      { icon: "ti-shield-check", text: "Integrity in all we do" },
      { icon: "ti-flame", text: "Spirit-led discipleship" },
    ],
  },
] as const;

import AnimateIn from "@/components/ui/AnimateIn";

export default function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="mission-vision-inner">
        <AnimateIn className="mv-cards" stagger>
          {CARDS.map((card) => (
            <div key={card.label} className="mv-card">
              <div className="mv-card-icon" aria-hidden="true">
                <i className={`ti ${card.icon}`} />
              </div>
              <div className="mv-card-label">{card.label}</div>
              <h3>{card.heading}</h3>
              {card.body && <p>{card.body}</p>}
              {"values" in card && card.values && (
                <ul className="mv-values-list">
                  {card.values.map((v) => (
                    <li key={v.text}>
                      <i className={`ti ${v.icon}`} aria-hidden="true" />
                      {v.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}
