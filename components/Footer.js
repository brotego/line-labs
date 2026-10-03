import NavLink from './NavLink';

export default function Footer({ home = false }) {
  const base = home ? '' : '/';

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/assets/knot.png" alt="" className="footer-knot" aria-hidden="true" />
            <NavLink href={home ? '#top' : '/'} className="logo">line labs</NavLink>
          </div>
          <div className="footer-nav-col">
            <span className="eyebrow">Explore</span>
            <nav className="footer-nav" aria-label="Footer">
              <NavLink href="/work">Work</NavLink>
              <NavLink href={`${base}#studio`}>Studio</NavLink>
              <NavLink href={`${base}#contact`}>Contact</NavLink>
            </nav>
            <p className="footer-copy">© 2026 line labs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
