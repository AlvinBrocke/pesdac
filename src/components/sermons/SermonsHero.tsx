import HeroPlayerWrapper from "@/components/HeroPlayerWrapper";
import ScrollParallax from "@/components/ui/ScrollParallax";

export default function SermonsHero() {
  return (
    <section className="about-hero">
      <ScrollParallax mode="bg" speed={0.28}>
        <HeroPlayerWrapper />
      </ScrollParallax>
      <div className="about-hero-inner">
        <div className="about-hero-tag">Sermon Archive</div>
        <h1 className="about-hero-title">
          The Word,
          <br />
          <em>every week</em>
        </h1>
        <p className="about-hero-sub">
          Browse our full library of Sabbath messages, prayer meetings, and
          special services — watch at your own pace, wherever you are.
        </p>
      </div>
    </section>
  );
}
