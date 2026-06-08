import ScrollParallax from "@/components/ui/ScrollParallax";

export default function OurStory() {
  return (
    <section className="our-story">
      <div className="our-story-inner">
        <div className="our-story-text">
          <div className="section-label">Our Story</div>
          <h2>
            Rooted in faith,
            <br />
            <em>grown by grace</em>
          </h2>
          <p>
            Prince Emmanuel Seventh-day Adventist Church was established in 1964
            in the Ringway Estates neighbourhood of Osu, Accra. What began as a
            small gathering of believers has grown into a vibrant congregation
            that touches hundreds of lives every week.
          </p>
          <p>
            Over six decades our church has weathered change, embraced growth,
            and deepened its commitment to Scripture, community, and service.
            Under the leadership of visionary pastors and dedicated lay leaders,
            we have expanded our ministries, renovated our facilities, and
            extended our reach across the city.
          </p>
          <p>
            Today, Prince Emmanuel SDA Church stands as a beacon of hope in
            central Accra — a place where people of every background find
            belonging, encounter the living God, and are equipped to make a
            difference in the world.
          </p>
        </div>

        <ScrollParallax mode="drift" speed={0.06} className="our-story-aside">
          <figure className="story-quote">
            <blockquote>
              "We are a people shaped by the Word of God and the hope of
              Christ's return — and we invite you to be part of that story."
            </blockquote>
            <figcaption>
              <div className="story-pastor-avatar">SN</div>
              <div>
                <strong>Pr. Samuel Nyarko</strong>
                <span>Senior Pastor, PESDAC</span>
              </div>
            </figcaption>
          </figure>

          <dl className="story-timeline">
            <div className="timeline-item">
              <dt>1964</dt>
              <dd>Church founded in Ringway Estates, Osu</dd>
            </div>
            <div className="timeline-item">
              <dt>1980s</dt>
              <dd>First major building expansion &amp; youth ministry launch</dd>
            </div>
            <div className="timeline-item">
              <dt>2000s</dt>
              <dd>Outreach programs extended to surrounding communities</dd>
            </div>
            <div className="timeline-item">
              <dt>2010s</dt>
              <dd>Media ministry &amp; online worship services introduced</dd>
            </div>
            <div className="timeline-item">
              <dt>Today</dt>
              <dd>Ongoing renovation &amp; expansion to serve a growing family</dd>
            </div>
          </dl>
        </ScrollParallax>
      </div>
    </section>
  );
}
