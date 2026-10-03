'use client';

import { useEffect, useState } from 'react';
import NavLink from './NavLink';

export default function Header({ home = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 0);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const base = home ? '' : '/';
  const links = [
    { href: '/work', label: 'Work' },
    { href: `${base}#studio`, label: 'Studio' },
    { href: `${base}#contact`, label: 'Contact' },
  ];

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="wrap header-inner">
        <NavLink href={home ? '#top' : '/'} className="logo">line labs</NavLink>

        <nav className="main-nav" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.label} href={l.href}>{l.label}</NavLink>
          ))}
        </nav>

        <NavLink href={`${base}#contact`} className="btn btn-primary btn-small nav-cta">Let&apos;s talk</NavLink>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <nav id="mobile-nav" className={`mobile-nav${menuOpen ? ' is-open' : ''}`} aria-label="Mobile">
        {links.map((l) => (
          <NavLink key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</NavLink>
        ))}
      </nav>
    </header>
  );
}
