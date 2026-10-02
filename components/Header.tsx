"use client";

import NavLink from "./NavLink";
import { useEffect, useState } from "react";
import { navLinks } from "./navLinks";

export default function Header({ home = false }: { home?: boolean }) {
  const links = navLinks(home);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeaderBorder = () => setScrolled(window.scrollY > 0);
    updateHeaderBorder();
    window.addEventListener("scroll", updateHeaderBorder, { passive: true });
    return () => window.removeEventListener("scroll", updateHeaderBorder);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <div className="wrap header-inner">
        <NavLink href={links.logo} className="logo">line labs</NavLink>

        <nav className="main-nav" aria-label="Primary">
          <NavLink href={links.work}>Work</NavLink>
          <NavLink href={links.studio}>Studio</NavLink>
          <NavLink href={links.contact}>Contact</NavLink>
        </nav>

        <NavLink href={links.contact} className="btn btn-primary btn-small nav-cta">Let&apos;s talk</NavLink>

        <button
          className={"menu-toggle" + (menuOpen ? " is-open" : "")}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <nav id="mobile-nav" className={"mobile-nav" + (menuOpen ? " is-open" : "")} aria-label="Mobile">
        <NavLink href={links.work} onClick={closeMenu}>Work</NavLink>
        <NavLink href={links.studio} onClick={closeMenu}>Studio</NavLink>
        <NavLink href={links.contact} onClick={closeMenu}>Contact</NavLink>
      </nav>
    </header>
  );
}
