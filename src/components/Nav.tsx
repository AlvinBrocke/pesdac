import Image from "next/image";

const NAV_LINKS = ["About", "Sermons", "Ministries", "Events", "Visit"] as const;

export default function Nav() {
  return (
    <nav>
      <div className="nav-logo">
        <div className="logo-mark">
          <Image
            src="/pesdac-logo.png"
            alt="PESDAC logo"
            width={36}
            height={36}
            priority
          />
        </div>
        <span>
          Prince Emmanuel
          <br />
          SDA Church
        </span>
      </div>
      <ul className="nav-links">
        {NAV_LINKS.map((label) => (
          <li key={label}>
            <a href={`#${label.toLowerCase()}`}>{label}</a>
          </li>
        ))}
      </ul>
      <button className="btn-gold">Plan a Visit</button>
    </nav>
  );
}
