import HeroPlayerWrapper from "@/components/HeroPlayerWrapper";
import ScrollParallax from "@/components/ui/ScrollParallax";

export default function GalleryHero() {
  return (
    <section className="about-hero">
      <ScrollParallax mode="bg" speed={0.28}>
        <HeroPlayerWrapper />
      </ScrollParallax>
      <div className="about-hero-inner">
        <div className="about-hero-tag">Photo &amp; Video Gallery</div>
        <h1 className="about-hero-title">
          Moments of
          <br />
          <em>faith and fellowship</em>
        </h1>
        <p className="about-hero-sub">
          A glimpse into the life of our congregation — from Sabbath worship to
          community outreach, celebrations, and everything in between.
        </p>
      </div>
    </section>
  );
}
