import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeader from "@/components/ui/SectionHeader";

const WEEKLY = [
  {
    icon: "ti-sunrise",
    name: "Calvary Hour",
    time: "8:00 AM – 9:00 AM",
    desc: "Begin the Sabbath in prayer and devotion. All are welcome to this quiet, reverent opening service.",
  },
  {
    icon: "ti-book",
    name: "Sabbath School",
    time: "9:00 AM – 10:00 AM",
    desc: "Structured Bible study for all ages — adult divisions, youth classes, and children's divisions meet simultaneously.",
  },
  {
    icon: "ti-building-church",
    name: "Main Worship Service",
    time: "10:00 AM – 1:00 PM",
    desc: "Our flagship weekly service with choir-led worship, Scripture readings, and a sermon from the pastoral team.",
  },
  {
    icon: "ti-users",
    name: "Afternoon Programmes",
    time: "1:00 PM onwards",
    desc: "Ministry meetings, fellowship lunches, youth activities, and special events take place on select Sabbaths after the main service.",
  },
] as const;

export default function WeeklySchedule() {
  return (
    <section className="weekly-section">
      <div className="weekly-inner">
        <AnimateIn>
          <SectionHeader
            label="Every Saturday"
            title="Regular Weekly Programme"
          />
          <p className="weekly-note">
            We worship every Saturday at{" "}
            <strong>23 Osu Avenue, Ringway Estates, Accra</strong>. All are
            welcome — no matter where you are on your faith journey.
          </p>
        </AnimateIn>

        <div className="weekly-grid">
          {WEEKLY.map(({ icon, name, time, desc }, i) => (
            <AnimateIn key={name} delay={i * 90}>
              <div className="weekly-item">
                <div className="weekly-icon" aria-hidden="true">
                  <i className={`ti ${icon}`} />
                </div>
                <div className="weekly-body">
                  <div className="weekly-time">{time}</div>
                  <h3 className="weekly-name">{name}</h3>
                  <p className="weekly-desc">{desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
