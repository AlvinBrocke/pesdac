import HeroPlayerWrapper from "@/components/HeroPlayerWrapper";
import ScrollParallax from "@/components/ui/ScrollParallax";

export default function PioneerHero() {
  return (
    <section className="about-hero">
      <ScrollParallax mode="bg" speed={0.28}>
        <HeroPlayerWrapper />
      </ScrollParallax>
      <div className="about-hero-inner">
        <div className="about-hero-tag">Our Heritage</div>
        <h1 className="about-hero-title">
          Rooted in faith,
          <br />
          <em>shaped by history</em>
        </h1>
        <p className="about-hero-sub">
          Since October 1992, Prince Emmanuel Seventh-day Adventist Church has
          been a beacon of hope in the heart of Osu, Accra — built by the
          faithfulness of pioneers and sustained by the grace of God.
        </p>
      </div>
    </section>
  );
}
