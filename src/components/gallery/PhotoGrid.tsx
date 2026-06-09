import Image from "next/image";
import Link from "next/link";

/* TODO: Replace these placeholder images with real church photos.
   To add more photos: drop image files in /public/ and add entries below. */
const PHOTOS = [
  {
    src: "/church-visit.jpg",
    alt: "Prince Emmanuel SDA Church exterior — Ringway Estates, Osu",
    caption: "Our home in Ringway Estates, Osu",
    width: 1280,
    height: 720,
  },
  {
    src: "/thumb-UEVCUQjfdIM.jpg",
    alt: "Sabbath worship service at PESDAC",
    caption: "Sabbath worship service",
    width: 1280,
    height: 720,
  },
  {
    src: "/thumb-3Y9sSsSkEOE.jpg",
    alt: "PESDAC congregation during service",
    caption: "Our congregation in praise",
    width: 1280,
    height: 720,
  },
  {
    src: "/thumb-AiJ9TQIHZNk.jpg",
    alt: "PESDAC music and worship team",
    caption: "Music & Worship Ministry",
    width: 1280,
    height: 720,
  },
  {
    src: "/thumb-FZNaChXG_7w.jpg",
    alt: "PESDAC special programme",
    caption: "Special programme service",
    width: 1280,
    height: 720,
  },
  {
    src: "/thumb-B7rQt9O0UgQ.jpg",
    alt: "PESDAC sermon and teaching",
    caption: "Word and worship",
    width: 1280,
    height: 720,
  },
] as const;

export default function PhotoGrid() {
  return (
    <section className="gallery-section">
      <div className="gallery-inner">
        <div className="gallery-header">
          <div className="section-label">Photo Gallery</div>
          <h2 className="section-title">
            Captured moments,
            <br />
            <em>lasting memories</em>
          </h2>
        </div>

        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <figure key={photo.src} className="gallery-card">
              <div className="gallery-img-wrap">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="gallery-img"
                />
                <figcaption className="gallery-caption">
                  {photo.caption}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        <div className="gallery-submit-strip">
          <p>
            Do you have photos from a church event or programme?{" "}
            <Link
              href="/contact?subject=Gallery+Photo+Submission"
              className="btn-gold"
            >
              Submit a photo
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
