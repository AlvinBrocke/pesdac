import HeroPlayerWrapper from "@/components/HeroPlayerWrapper";
import ScrollParallax from "@/components/ui/ScrollParallax";

export default function EventsHero() {
  return (
    <section className="about-hero">
      <ScrollParallax mode="bg" speed={0.28}>
        <HeroPlayerWrapper />
      </ScrollParallax>
      <div className="about-hero-inner">
        <div className="about-hero-tag">Upcoming Events</div>
        <h1 className="about-hero-title">
          Gather, celebrate,
          <br />
          <em>grow together</em>
        </h1>
        <p className="about-hero-sub">
          From weekly worship to special programmes — there is always something
          happening at PESDAC. Join us and be part of our community.
        </p>
      </div>
    </section>
  );
}
