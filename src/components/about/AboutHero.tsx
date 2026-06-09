import HeroPlayerWrapper from "@/components/HeroPlayerWrapper";
import ScrollParallax from "@/components/ui/ScrollParallax";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <ScrollParallax mode="bg" speed={0.28}>
        <HeroPlayerWrapper />
      </ScrollParallax>
      <div className="about-hero-inner">
        <div className="about-hero-tag">Who We Are</div>
        <h1 className="about-hero-title">
          Over three decades of faith,
          <br />
          <em>community</em> &amp; service
        </h1>
        <p className="about-hero-sub">
          Prince Emmanuel Seventh-day Adventist Church has been a place of
          worship, belonging, and outreach in the heart of Osu, Accra since
          1992. We are a warm, English-speaking congregation rooted in Scripture
          and open to all.
        </p>
        <div className="about-hero-stats">
          <div className="about-hero-stat">
            <span className="about-stat-num">1992</span>
            <span className="about-stat-lbl">Year Founded</span>
          </div>
          <div className="about-hero-divider" />
          <div className="about-hero-stat">
            <span className="about-stat-num">34+</span>
            <span className="about-stat-lbl">Years of Worship</span>
          </div>
          <div className="about-hero-divider" />
          <div className="about-hero-stat">
            <span className="about-stat-num">Osu</span>
            <span className="about-stat-lbl">Ringway Estates, Accra</span>
          </div>
        </div>
      </div>
    </section>
  );
}
