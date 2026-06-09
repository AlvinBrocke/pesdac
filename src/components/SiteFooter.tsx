import Image from "next/image";

const QUICK_LINKS = [
  { label: "About", href: "/about" },
  { label: "Sermons", href: "/#sermons" },
  { label: "Ministries", href: "/#ministries" },
  { label: "Events", href: "/#events" },
  { label: "Contact", href: "/contact" },
] as const;

const SERVICE_TIMES = [
  { label: "Calvary Hour",   val: "8:00 AM — Every Saturday" },
  { label: "Sabbath School", val: "9:00 – 10:00 AM" },
  { label: "Main Service",   val: "10:00 AM – 1:00 PM" },
] as const;

const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/pesdac1/",                               icon: "ti-brand-instagram", label: "Instagram" },
  { href: "https://www.youtube.com/channel/UCiY1R5aOKZDTd1Xnwt5eQng/videos", icon: "ti-brand-youtube",   label: "YouTube" },
  { href: "https://www.facebook.com/pesdac1/",                                icon: "ti-brand-facebook",  label: "Facebook" },
  { href: "https://twitter.com/pesdacgh",                                     icon: "ti-brand-x",         label: "Twitter / X" },
] as const;

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-body">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo-row">
            <div className="logo-mark">
              <Image
                src="/pesdac-logo.png"
                alt="PESDAC logo"
                width={40}
                height={40}
              />
            </div>
            <p className="footer-logo">
              Prince Emmanuel
              <br />
              SDA Church
            </p>
          </div>
          <p>
            An English-speaking Seventh-day Adventist congregation in the heart
            of Osu, Accra — worshipping together since 1964.
          </p>
          <div className="social-links">
            {SOCIAL_LINKS.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (opens in new tab)`}
              >
                <i className={`ti ${icon}`} aria-hidden="true" />
              </a>
            ))}
          </div>
          <address className="footer-address">
            23 Osu Avenue, Ringway Estates
            <br />
            Osu, Accra, Ghana
            <br />
            <a href="tel:+233302223720">+233 30 222 3720</a>
            <br />
            <a href="mailto:info@pesdacgh.org">info@pesdacgh.org</a>
          </address>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-col-title">Quick Links</h3>
          <ul className="footer-links">
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Times */}
        <div>
          <h3 className="footer-col-title">Service Times</h3>
          <div className="footer-times">
            {SERVICE_TIMES.map(({ label, val }) => (
              <div key={label} className="footer-time-item">
                <div className="footer-time-label">{label}</div>
                <div className="footer-time-val">{val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Watch Online */}
        <div>
          <h3 className="footer-col-title">Watch Online</h3>
          <ul className="footer-links">
            <li>
              <a
                href="https://www.youtube.com/channel/UCiY1R5aOKZDTd1Xnwt5eQng/videos"
                target="_blank"
                rel="noopener noreferrer"
              >
                Latest Sermons
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCiY1R5aOKZDTd1Xnwt5eQng/live"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Stream
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/pesdac1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/pesdac1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          © {year} Prince Emmanuel SDA Church · Accra, Ghana
        </span>
        <ul className="footer-bottom-links">
          <li><a href="#privacy">Privacy</a></li>
          <li><a href="#terms">Terms</a></li>
        </ul>
      </div>
    </footer>
  );
}
