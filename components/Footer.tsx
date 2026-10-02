import NavLink from "./NavLink";
import { navLinks } from "./navLinks";

export default function Footer({ home = false }: { home?: boolean }) {
  const links = navLinks(home);

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-inner">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/knot.png" alt="" className="footer-knot" aria-hidden="true" />
            <NavLink href={links.logo} className="logo">line labs</NavLink>
          </div>
          <div className="footer-nav-col">
            <span className="eyebrow">Explore</span>
            <nav className="footer-nav" aria-label="Footer">
              <NavLink href={links.work}>Work</NavLink>
              <NavLink href={links.studio}>Studio</NavLink>
              <NavLink href={links.contact}>Contact</NavLink>
            </nav>
            <p className="footer-copy">© 2026 line labs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
