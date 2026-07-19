/**
 * Site graph — bleibtgleich.com (Mar 2026 webarchive snapshot).
 *
 * Two routes: home (/) and about (/about). Nav surfaces logo · grid-toggle ·
 * about · socials (in/tg/mail) on every page. Projects live inline on home as
 * a grid (some real, four encrypted); no /work/[slug] case pages in source.
 */
export const siteGraph = {
  origin: "https://www.bleibtgleich.com",
  pages: [
    {
      id: "home",
      path: "/",
      title: "Home",
      sections: [
        "nav",
        "grid-overlay",
        "hero-page-wrap",
        "hero-truth-top",
        "hero-info-logo",
        "services-bg-text",
        "services-truth",
        "my-vision-sticky",
        "my-vision-webgl-plate",
        "projects-heading",
        "projects-grid",
        "projects-footer",
        "footer-drop-a-message",
      ],
    },
    {
      id: "about",
      path: "/about",
      title: "About",
      sections: ["nav", "about-lead", "capabilities", "clients-field", "footer"],
    },
  ],
  shared: {
    nav: "{%part:nav-primary%}",
    gridOverlay: "{%part:grid-overlay%}",
    footer: "{%part:section-footer%}",
  },
  motion: [
    "{%motion:hero-wrap%}", // scale .01→1, rotate -48→0, blur 32em→0
    "{%motion:truth-reveal%}", // word-split, random stagger opacity
    "{%motion:rule-x%}", // horizontal rule grow 3s
    "{%motion:rule-y%}", // vertical rule grow 8s
    "{%motion:grid-overlay%}", // 12-col toggle scaleX
    "{%motion:project-storm%}", // hover floating stills
    "{%motion:shuffle%}", // link hover text scramble
    "{%motion:webgl-distort%}", // Three.js mouse-data-texture (documented)
    "{%motion:lenis%}", // smooth scroll 1.2 exp easing
  ],
  crawlDepth: {
    primary: ["/", "/about"],
  },
} as const;
