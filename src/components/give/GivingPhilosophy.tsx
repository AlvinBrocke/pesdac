import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeader from "@/components/ui/SectionHeader";

const PILLARS = [
  {
    icon: "ti-heart-handshake",
    title: "Stewardship",
    desc: "Everything we have belongs to God. Giving is an act of worship — an acknowledgement that He is the source of all blessing.",
  },
  {
    icon: "ti-users",
    title: "Community",
    desc: "Your giving sustains the local church: worship, outreach, pastoral care, and the programmes that serve our congregation and neighbourhood.",
  },
  {
    icon: "ti-world",
    title: "Mission",
    desc: "A portion of every tithe returned to PESDAC flows into the broader Seventh-day Adventist mission — reaching communities across Ghana and beyond.",
  },
] as const;

export default function GivingPhilosophy() {
  return (
    <section className="give-philosophy">
      <div className="give-philosophy-inner">
        <AnimateIn>
          <SectionHeader label="Why We Give" title="Rooted in biblical stewardship" />
          <p className="give-philosophy-lead">
            Seventh-day Adventists believe that faithful giving — tithe and
            freewill offerings — is an expression of trust in God and love for
            His mission. It is never about obligation, but about the joy of
            participating in something greater than ourselves.
          </p>
        </AnimateIn>

        <div className="give-pillar-grid">
          {PILLARS.map(({ icon, title, desc }, i) => (
            <AnimateIn key={title} delay={i * 100}>
              <div className="give-pillar-card">
                <div className="give-pillar-icon" aria-hidden="true">
                  <i className={`ti ${icon}`} />
                </div>
                <h3 className="give-pillar-title">{title}</h3>
                <p className="give-pillar-desc">{desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
