export const siteGraph = {
  origin: "https://www.lorikeetcx.ai",
  pages: [
    { id: "home", path: "/", sections: ["hero", "proof", "metrics", "compare", "workflow", "tickets", "testimonials", "cta", "footer"] },
    { id: "product", path: "/product", sections: ["hero", "omnichannel", "coach-teaser", "quotes", "footer"] },
    { id: "coach", path: "/product/coach", sections: ["hero", "ops", "ask-build", "quality", "footer"] },
    { id: "pricing", path: "/pricing", sections: ["hero", "plans", "credits", "footer"] },
    { id: "integrations", path: "/integrations", sections: ["hero", "library", "footer"] },
    { id: "stories", path: "/customer-stories", sections: ["hero", "filters", "grid", "footer"] },
    { id: "story", path: "/customer-stories/[slug]", sections: ["hero", "metrics", "body", "quote", "related", "footer"] },
    { id: "about", path: "/about", sections: ["mission", "team", "footer"] },
    { id: "faq", path: "/faq", sections: ["list", "cta", "footer"] },
    { id: "demo", path: "/get-a-demo", sections: ["form", "social-proof"] },
  ],
  motion: [
    "{%motion:status-chips%}",
    "{%motion:metric-reveal%}",
    "{%motion:workflow-nodes%}",
    "{%motion:ticket-stack%}",
    "{%motion:lenis-scroll%}",
    "{%motion:sticky-nav%}",
    "{%motion:webgl-hero%}",
  ],
  crawlDepth: {
    primary: ["/", "/product", "/product/coach", "/pricing", "/integrations", "/customer-stories", "/about", "/faq", "/get-a-demo"],
    stories: 15,
    integrations: ["zendesk", "intercom", "salesforce", "hubspot", "stripe", "twilio", "notion", "mcp"],
  },
} as const;
