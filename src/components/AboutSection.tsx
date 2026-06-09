import Link from 'next/link';
import StatBox from "@/components/ui/StatBox";
import AnimateIn from "@/components/ui/AnimateIn";

const STATS = [
  { value: "34+", label: "Years of worship" },
  { value: "8+",  label: "Active ministries" },
  { value: "Sat", label: "Sabbath services" },
  { value: "Osu", label: "Ringway Estates" },
] as const;

export default function AboutSection() {
  return (
    <section className="about-strip">
      <AnimateIn delay={0.05}>
        <p className="section-label">Who We Are</p>
        <h2 className="section-title">
          Faith rooted in
          <br />
          community since 1992
        </h2>
        <p>
          Prince Emmanuel Seventh-day Adventist Church has been a place of
          worship, fellowship, and service in the heart of Osu, Accra for over
          three decades. We are a warm, English-speaking congregation welcoming
          everyone — whether you grew up Adventist or are simply curious about
          faith.
        </p>
        <Link href="/about" className="btn-outline">
          Our Story <i className="ti ti-arrow-right" aria-hidden="true" />
        </Link>
      </AnimateIn>
      <AnimateIn className="stats-grid" stagger>
        {STATS.map((stat) => (
          <StatBox key={stat.label} {...stat} />
        ))}
      </AnimateIn>
    </section>
  );
}
