import Link from 'next/link';

// In-page anchors stay plain <a> so SmoothScroll can intercept them;
// everything else is a client-side route.
export default function NavLink({ href, ...props }) {
  if (href.startsWith('#')) return <a href={href} {...props} />;
  return <Link href={href} {...props} />;
}
