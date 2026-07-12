export const siteGraph = {
  pages: [
    { id: "home", path: "/", title: "Home / Showreel", sections: ["hero", "credential", "selected-work", "impact", "contact-teaser"] },
    { id: "contact", path: "/contact", title: "Contact / Representation", sections: ["contact"] },
  ],
  shared: {
    nav: "{%part:nav-primary%}",
    footer: "{%part:section-footer%}",
  },
  motion: [
    "{%motion:hero-name-reveal%}",
    "{%motion:quote-stagger%}",
    "{%motion:big-number-reveal%}",
  ],
} as const;
