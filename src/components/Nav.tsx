'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "About",       href: "/about" },
  { label: "Sermons",     href: "/#sermons" },
  { label: "Ministries",  href: "/#ministries" },
  { label: "Events",      href: "/#events" },
  { label: "Visit",       href: "/#visit" },
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <Link href="/" className="nav-logo">
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
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-end">
          <Link href="/about#visit" className="btn-gold nav-plan-btn">
            Plan a Visit
          </Link>
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
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} onClick={() => setOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/about#visit"
            className="btn-gold mobile-plan-btn"
            onClick={() => setOpen(false)}
          >
            Plan a Visit
          </Link>
        </dialog>
      )}
    </>
  );
}
