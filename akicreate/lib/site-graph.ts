export const siteGraph = {
  origin: "https://akicreate.com",
  pages: [
    {
      id: "home",
      path: "/",
      title: "Home / Portfolio",
      sections: [
        "nav",
        "letter-hero",
        "edge-rails",
        "featured-works-slider",
        "talk-footer",
      ],
    },
    {
      id: "about",
      path: "/about",
      title: "About",
      sections: ["nav", "letter-hero", "edge-rails", "sky-band-bio", "talk-footer"],
    },
    {
      id: "work-index",
      path: "/work",
      title: "Works index",
      sections: ["nav", "work-grid", "talk-footer"],
    },
    {
      id: "case-study",
      path: "/work/[slug]",
      title: "Case study",
      sections: [
        "nav-minimal",
        "case-meta",
        "case-hero-media",
        "case-sections-01-03",
        "case-next-pair",
        "talk-footer",
      ],
    },
  ],
  shared: {
    nav: "{%part:nav-primary%}",
    footer: "{%part:section-footer%}",
  },
  motion: [
    "{%motion:letter-grid%}",
    "{%motion:mask-reveal%}",
    "{%motion:works-slider%}",
    "{%motion:section-fade%}",
    "{%motion:gsap-scroll-approx%}",
  ],
  crawlDepth: {
    primary: ["/", "/about"],
    cases: [
      "/underart",
      "/fine-syrup",
      "/ajenda",
      "/eggplant-hours",
      "/jazz-craft",
      "/stm-re-route",
    ],
  },
} as const;
