import Link from "next/link";
import type { ComponentProps } from "react";

// In-page "#" anchors stay plain <a> so SmoothScroll handles them instead of
// the Next router; everything else is a client-side <Link>.
export default function NavLink({ href, ...props }: ComponentProps<"a"> & { href: string }) {
  if (href.startsWith("#")) return <a href={href} {...props} />;
  return <Link href={href} {...props} />;
}
