"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";

type NavChild = { label: string; href: string };
type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; href?: string; children: NavChild[] };

const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Heritage", href: "/pioneers" },
    ],
  },
  {
    label: "Worship",
    children: [
      { label: "Sermons", href: "/sermons" },
      { label: "Events", href: "/events" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  { label: "Ministries", href: "/ministries" },
  { label: "Give", href: "/give" },
  { label: "Visit", href: "/#visit" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrollPct, setScrollPct] = useState(0);
  const menuRef = useRef<HTMLDialogElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function update() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    }
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Close dropdown on outside click
  const handleOutsideClick = useCallback((e: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setOpenDropdown(null);
    }
  }, []);

  useEffect(() => {
    if (openDropdown) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [openDropdown, handleOutsideClick]);

  // Close menus on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        if (mobileOpen) setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Move focus into mobile menu when it opens
  useEffect(() => {
    if (mobileOpen) {
      menuRef.current?.querySelector<HTMLAnchorElement>("a, button")?.focus();
    }
  }, [mobileOpen]);

  function toggleDropdown(label: string) {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }

  function toggleMobileDropdown(label: string) {
    setMobileDropdown((prev) => (prev === label ? null : label));
  }

  return (
    <>
      <nav ref={navRef} aria-label="Main navigation">
        <Link href="/" className="nav-logo">
          <div className="logo-mark">
            <Image
              src="/pesdac fav icon.png"
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
          {NAV_LINKS.map((item) => {
            if (item.children) {
              const isOpen = openDropdown === item.label;
              return (
                <li key={item.label} className="nav-dropdown-wrapper">
                  <button
                    className="nav-dropdown-btn"
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    {item.label}
                    <i
                      className={`ti ti-chevron-down nav-chevron ${isOpen ? "nav-chevron--open" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <ul className="nav-dropdown-panel">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="nav-dropdown-link"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }
            return (
              <li key={item.label}>
                <Link href={item.href ?? "/"}>{item.label}</Link>
              </li>
            );
          })}
        </ul>

        <div className="nav-end">
          <Link href="/about#visit" className="btn-gold nav-plan-btn">
            Plan a Visit
          </Link>
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <i
              className={`ti ${mobileOpen ? "ti-x" : "ti-menu-2"}`}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Scroll progress */}
        <div className="scroll-progress" aria-hidden="true">
          <div
            className="scroll-progress-bar"
            style={{ width: `${scrollPct}%` }}
          />
        </div>
      </nav>

      {mobileOpen && (
        <dialog
          ref={menuRef}
          open
          id="mobile-menu"
          className="mobile-menu"
          aria-label="Navigation menu"
        >
          <ul className="mobile-menu-links">
            {NAV_LINKS.map((item) => {
              if (item.children) {
                const isOpen = mobileDropdown === item.label;
                return (
                  <li key={item.label} className="mobile-accordion-item">
                    <button
                      className="mobile-accordion-btn"
                      aria-expanded={isOpen}
                      onClick={() => toggleMobileDropdown(item.label)}
                    >
                      {item.label}
                      <i
                        className={`ti ti-chevron-down nav-chevron ${isOpen ? "nav-chevron--open" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <ul className="mobile-accordion-panel">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="mobile-accordion-link"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }
              return (
                <li key={item.label}>
                  <Link href={item.href ?? "/"} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/about#visit"
            className="btn-gold mobile-plan-btn"
            onClick={() => setMobileOpen(false)}
          >
            Plan a Visit
          </Link>
        </dialog>
      )}
    </>
  );
}
