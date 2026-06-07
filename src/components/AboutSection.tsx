import StatBox from "@/components/ui/StatBox";

const STATS = [
  { value: "60+", label: "Years of worship" },
  { value: "8+",  label: "Active ministries" },
  { value: "Sat", label: "Sabbath services" },
  { value: "Osu", label: "Ringway Estates" },
] as const;

export default function AboutSection() {
  return (
    <section className="about-strip">
      <div>
        <div className="section-label">Who We Are</div>
        <h2 className="section-title">
          Faith rooted in
          <br />
          community since 1964
        </h2>
        <p>
          Prince Emmanuel Seventh-day Adventist Church has been a place of
          worship, fellowship, and service in the heart of Osu, Accra for over
          six decades. We are a warm, English-speaking congregation welcoming
          everyone — whether you grew up Adventist or are simply curious about
          faith.
        </p>
        <button className="btn-outline">
          Our Story <i className="ti ti-arrow-right" />
        </button>
      </div>
      <div className="stats-grid">
        {STATS.map((stat) => (
          <StatBox key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
