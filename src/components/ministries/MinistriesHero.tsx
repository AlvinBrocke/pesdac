import HeroPlayerWrapper from "@/components/HeroPlayerWrapper";
import ScrollParallax from "@/components/ui/ScrollParallax";

export default function MinistriesHero() {
  return (
    <section className="about-hero">
      <ScrollParallax mode="bg" speed={0.28}>
        <HeroPlayerWrapper />
      </ScrollParallax>
      <div className="about-hero-inner">
        <div className="about-hero-tag">Our Ministries</div>
        <h1 className="about-hero-title">
          A place for
          <br />
          <em>every season of life</em>
        </h1>
        <p className="about-hero-sub">
          Whether you are just starting your faith journey or have walked with
          God for decades, there is a ministry at PESDAC where you can belong,
          grow, and serve.
        </p>
      </div>
    </section>
  );
}
