const MAP_SRC =
  "https://www.google.com/maps?q=Prince+Emmanuel+SDA+Church+Ringway+Estates+Osu+Accra+Ghana&output=embed&z=16";

export default function MapSection() {
  return (
    <div className="map-section">
      <div className="map-section-header">
        <div>
          <div className="section-label">Find Us</div>
          <h2>We&apos;re in Ringway Estates, Osu</h2>
        </div>
        <address>
          23 Osu Avenue, Ringway Estates
          <br />
          Osu, Accra, Ghana
        </address>
      </div>
      <iframe
        className="map-frame"
        src={MAP_SRC}
        title="Prince Emmanuel SDA Church location"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
