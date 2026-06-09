import HeroPlayerWrapper from "@/components/HeroPlayerWrapper";
import ScrollParallax from "@/components/ui/ScrollParallax";

export default function ContactHero() {
  return (
    <section className="about-hero">
      <ScrollParallax mode="bg" speed={0.28}>
        <HeroPlayerWrapper />
      </ScrollParallax>
      <div className="about-hero-inner">
        <div className="about-hero-tag">Reach Out</div>
        <h1 className="about-hero-title">
          We&apos;d love to
          <br />
          <em>hear from you</em>
        </h1>
        <p className="about-hero-sub">
          Whether you have a question about our services, want to request prayer,
          or are planning your first visit — we are here and happy to help.
        </p>
      </div>
    </section>
  );
}
