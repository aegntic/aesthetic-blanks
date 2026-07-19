/**
 * Site graph for the Blumenkopf blank — reconstructed from CloakBrowser crawl.
 *
 * Entry URL was /about; nav surfaces home / about / work / imprint on every page.
 * /work is a 2-column case grid (3px black line dividers); each case links back to
 * nav only. Six cases collapsed to the six semantic slots in lib/work.ts.
 */
export const siteGraph = {
  origin: "https://blumenkopf.spatzek.studio",
  pages: [
    {
      id: "home",
      path: "/home",
      title: "Home / Index",
      sections: [
        "nav",
        "hero-wordmark",
        "hero-circle-portrait",
        "manifesto",
        "selected-work",
        "buy-this-website-marquee",
        "footer",
      ],
    },
    {
      id: "about",
      path: "/about",
      title: "About / Studio",
      sections: [
        "nav",
        "about-lead",
        "about-portrait",
        "capabilities",
        "clients-marquee",
        "footer",
      ],
    },
    {
      id: "work",
      path: "/work",
      title: "Work Index",
      sections: ["nav", "work-lead", "work-grid", "footer"],
    },
    {
      id: "case-study",
      path: "/work/[slug]",
      title: "Case Study",
      sections: ["nav", "case-hero", "case-body", "case-gallery", "case-next", "footer"],
    },
    {
      id: "imprint",
      path: "/imprint",
      title: "Imprint / Legal",
      sections: ["nav", "imprint-body", "footer"],
    },
  ],
  shared: {
    nav: "{%part:nav-primary%}",
    menu: "{%part:nav-menu-overlay%}",
    footer: "{%part:section-footer%}",
  },
  motion: [
    "{%motion:scroll-gate%}",
    "{%motion:carousel-fade%}",
    "{%motion:marquee-buy%}",
    "{%motion:line-grow%}",
    "{%motion:wordmark-reveal%}",
  ],
  crawlDepth: {
    primary: ["/home", "/about", "/work", "/imprint"],
    caseStudies: [
      "/work/project-01",
      "/work/project-02",
      "/work/project-03",
      "/work/project-04",
      "/work/project-05",
      "/work/project-06",
    ],
  },
} as const;
