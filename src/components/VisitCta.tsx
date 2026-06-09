const MAPS_URL =
  'https://www.google.com/maps/search/Prince+Emmanuel+SDA+Church+Osu+Accra';

export default function VisitCta() {
  return (
    <section className="visit-cta" id="visit" aria-labelledby="visit-heading">
      <h2 id="visit-heading">
        Ready to experience
        <br />
        worship for yourself?
      </h2>
      <div className="visit-details">
        <div className="visit-detail">
          <div className="lbl">Address</div>
          <div className="val">23 Osu Avenue, Ringway Estates, Accra</div>
        </div>
        <div className="visit-detail">
          <div className="lbl">Services</div>
          <div className="val">Saturdays from 8:00 AM</div>
        </div>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-dark"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}
