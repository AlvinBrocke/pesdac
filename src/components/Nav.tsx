'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home",        href: "/" },
  { label: "About",       href: "/about" },
  { label: "Sermons",     href: "/#sermons" },
  { label: "Ministries",  href: "/#ministries" },
  { label: "Events",      href: "/#events" },
  { label: "Visit",       href: "/#visit" },
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    function update() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    }
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <>
      <nav aria-label="Main navigation">
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

        {/* Scroll progress */}
        <div className="scroll-progress" aria-hidden="true">
          <div className="scroll-progress-bar" style={{ width: `${scrollPct}%` }} />
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
