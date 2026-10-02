// On the home page, section links are in-page anchors (smooth-scrolled by
// SmoothScroll); elsewhere they route back to the home page.
export function navLinks(home: boolean) {
  return {
    logo: home ? "#top" : "/",
    work: "/work",
    studio: home ? "#studio" : "/#studio",
    contact: home ? "#contact" : "/#contact",
  };
}
