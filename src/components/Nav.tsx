'use client';

import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = ["About", "Sermons", "Ministries", "Events", "Visit"] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
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
            SDA Church (PESDAC)
          </span>
        </div>

        <ul className="nav-links">
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <a href={`#${label.toLowerCase()}`}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-end">
          <button className="btn-gold nav-plan-btn">Plan a Visit</button>
          <button
            className="nav-hamburger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <i className={`ti ${open ? "ti-x" : "ti-menu-2"}`} />
          </button>
        </div>
      </nav>

      {open && (
        <dialog open className="mobile-menu" aria-label="Navigation menu">
          <ul className="mobile-menu-links">
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button className="btn-gold mobile-plan-btn" onClick={() => setOpen(false)}>
            Plan a Visit
          </button>
        </dialog>
      )}
    </>
  );
}
