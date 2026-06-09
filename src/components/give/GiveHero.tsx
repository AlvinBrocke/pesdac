import HeroPlayerWrapper from "@/components/HeroPlayerWrapper";
import ScrollParallax from "@/components/ui/ScrollParallax";

export default function GiveHero() {
  return (
    <section className="about-hero">
      <ScrollParallax mode="bg" speed={0.28}>
        <HeroPlayerWrapper />
      </ScrollParallax>
      <div className="about-hero-inner">
        <div className="about-hero-tag">Online Giving</div>
        <h1 className="about-hero-title">
          Give with a
          <br />
          <em>generous heart</em>
        </h1>
        <p className="about-hero-sub">
          &ldquo;Each of you should give what you have decided in your heart to
          give, not reluctantly or under compulsion, for God loves a cheerful
          giver.&rdquo; — 2 Corinthians 9:7
        </p>
      </div>
    </section>
  );
}
