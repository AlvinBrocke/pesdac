const CONTACT_ITEMS = [
  {
    icon: "ti-map-pin",
    label: "Address",
    lines: ["23 Osu Avenue, Ringway Estates", "Osu, Accra, Ghana"],
    href: "https://www.google.com/maps/search/Prince+Emmanuel+SDA+Church+Osu+Accra",
    external: true,
  },
  {
    icon: "ti-phone",
    label: "Phone",
    lines: ["+233 30 222 3720"],
    href: "tel:+233302223720",
    external: false,
  },
  {
    icon: "ti-mail",
    label: "Email",
    lines: ["info@pesdacgh.org"],
    href: "mailto:info@pesdacgh.org",
    external: false,
  },
  {
    icon: "ti-clock",
    label: "Service Times",
    lines: [
      "Every Saturday",
      "Calvary Hour — 8:00 AM",
      "Sabbath School — 9:00 AM",
      "Main Service — 10:00 AM",
    ],
    href: null,
    external: false,
  },
] as const;

const SOCIAL_LINKS = [
  {
    icon: "ti-brand-instagram",
    platform: "Instagram",
    handle: "@pesdac1",
    href: "https://www.instagram.com/pesdac1/",
    color: "#c13584",
  },
  {
    icon: "ti-brand-youtube",
    platform: "YouTube",
    handle: "PESDAC Church",
    href: "https://www.youtube.com/channel/UCiY1R5aOKZDTd1Xnwt5eQng/videos",
    color: "#ff0000",
  },
  {
    icon: "ti-brand-facebook",
    platform: "Facebook",
    handle: "@pesdac1",
    href: "https://www.facebook.com/pesdac1/",
    color: "#1877f2",
  },
  {
    icon: "ti-brand-x",
    platform: "Twitter / X",
    handle: "@pesdacgh",
    href: "https://twitter.com/pesdacgh",
    color: "#000000",
  },
] as const;

export default function ContactInfo() {
  return (
    <aside className="contact-info-panel">
      {/* Contact details */}
      <div className="contact-detail-list">
        {CONTACT_ITEMS.map((item) => (
          <div key={item.label} className="contact-detail-item">
            <div className="contact-detail-icon" aria-hidden="true">
              <i className={`ti ${item.icon}`} />
            </div>
            <div className="contact-detail-body">
              <p className="contact-detail-label">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="contact-detail-value contact-detail-link"
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.lines.map((l, i) => (
                    <span key={i} className="contact-detail-line">
                      {l}
                    </span>
                  ))}
                </a>
              ) : (
                <p className="contact-detail-value">
                  {item.lines.map((l, i) => (
                    <span key={i} className="contact-detail-line">
                      {l}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Social media */}
      <div className="contact-social-section">
        <p className="contact-social-heading">Follow Us</p>
        <div className="contact-social-list">
          {SOCIAL_LINKS.map(({ icon, platform, handle, href, color }) => (
            <a
              key={platform}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label={`${platform} — ${handle} (opens in new tab)`}
            >
              <span
                className="contact-social-icon"
                style={{ color }}
                aria-hidden="true"
              >
                <i className={`ti ${icon}`} />
              </span>
              <span className="contact-social-text">
                <span className="contact-social-platform">{platform}</span>
                <span className="contact-social-handle">{handle}</span>
              </span>
              <i className="ti ti-arrow-up-right contact-social-arrow" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
