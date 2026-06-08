import Link from "next/link";
import HeroPlayerWrapper from "@/components/HeroPlayerWrapper";
import ScrollParallax from "@/components/ui/ScrollParallax";

export default function AboutCta() {
  return (
    <section className="about-cta" id="visit">
      <ScrollParallax mode="bg" speed={0.28}>
        <HeroPlayerWrapper />
      </ScrollParallax>

      <div className="about-cta-inner">
        <div className="about-cta-label">Join Our Family</div>
        <h2>
          Your seat is already
          <br />
          <em>waiting for you</em>
        </h2>
        <p>
          Whether you are exploring faith for the first time, looking for a
          church home, or just passing through Accra — we would love to welcome
          you this Sabbath.
        </p>

        <div className="about-cta-details">
          <div className="cta-detail">
            <i className="ti ti-map-pin" />
            <div>
              <strong>Where</strong>
              <span>23 Osu Avenue, Ringway Estates, Osu, Accra</span>
            </div>
          </div>
          <div className="cta-divider" />
          <div className="cta-detail">
            <i className="ti ti-clock" />
            <div>
              <strong>When</strong>
              <span>Sabbath School 9:30 AM · Worship 11:00 AM</span>
            </div>
          </div>
          <div className="cta-divider" />
          <div className="cta-detail">
            <i className="ti ti-phone" />
            <div>
              <strong>Questions?</strong>
              <span>
                <a href="tel:+233302223720">+233 30 222 3720</a>
              </span>
            </div>
          </div>
        </div>

        <div className="about-cta-actions">
          <a
            href="https://www.google.com/maps/search/Prince+Emmanuel+SDA+Church+Osu+Accra"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <i className="ti ti-map" />
            Get Directions
          </a>
          <Link href="/#sermons" className="btn-outline-light">
            <i className="ti ti-player-play" />
            Watch a Sermon First
          </Link>
        </div>
      </div>
    </section>
  );
}
