# alitwotimes.com — reference-site discovery

Research date: 2026-11-14. Purpose: inform an original mattaecooper.org portfolio, not copy the reference site's media, branding, or proprietary typeface.

## 1. Coverage and limits

1. **Page inventory:** fetched all 83 URLs listed in the site's five WordPress sitemaps. All returned HTTP 200 without redirects. HTTP success does not prove a page is useful, that its media plays, or that every interaction works.
2. **Source inspection:** inspected homepage, contact and player HTML, published stylesheet, sitemap index and representative campaign content.
3. **Runtime sampling:** REA Chromium desktop captures confirmed homepage-to-Bio navigation and captured the player. A mobile-sized contact capture exercised the Caviar link. Player Info and play controls were clicked, but accessibility snapshots did not establish their visual or playback effects.
4. **Not complete interaction coverage:** no frame-by-frame recording, full scroll traversal, hover matrix, video playback verification, keyboard audit, device testing, or inspection of every route transition was completed. Claims about specific animation timing beyond the stylesheet are unverified. The full machine-readable page inventory, including discovered links and media references, is saved alongside this report as [inventory.json](inventory.json).
5. **Evidence:** REA captures `ev_5b3eb48987388c025691e39ac685f95fa3532e5c5b3a397d73772880e1eb0269` (home), `ev_3ac77134fa4dbd94354887bfe3f3017479f6ffea07b8255021e654324b02305f` (home → bio), `ev_042fcff66e3ecb05313ede8a351d718eb8fff2a729fb607279e1539ff5907804` (player control attempts), `ev_37dabbc786a693ff482a55bb8743ce3687547e54fca22598629110fd17317c5a` (mobile-width contact).

## 2. Site architecture

The [sitemap index](https://alitwotimes.com/wp-sitemap.xml) lists:

1. **3 main pages:** [Work/home](https://alitwotimes.com/), [Bio](https://alitwotimes.com/bio/), [Contact](https://alitwotimes.com/contact/).
2. **39 film pages:** [work sitemap](https://alitwotimes.com/wp-sitemap-posts-work-1.xml); all fetched HTML uses `a-page is-player`.
3. **22 campaign archives:** [campaign sitemap](https://alitwotimes.com/wp-sitemap-taxonomies-campaign-1.xml). These can group films; not every archive is linked from the homepage.
4. **16 client archives:** [client sitemap](https://alitwotimes.com/wp-sitemap-taxonomies-client-1.xml). The scanner found no image or video `src` attributes in their returned HTML; e.g. [Heineken](https://alitwotimes.com/client/heineken/) exposes a title and “More” but no listed project images in the text rendering. Do not assume they function like populated campaign pages.
5. **3 author archives:** [author sitemap](https://alitwotimes.com/wp-sitemap-users-1.xml); all returned a generic `a-page is-` and empty page title suffix. Their usefulness has not been verified.

### Work routes

All paths below are relative to `https://alitwotimes.com/work/`:

1. `diesel-be-a-follower/`, `lavazza-the-real-italian-coffee/`, `amazon-the-biggest-sale-of-the-year/`, `du-tuesday-the-man-sitting-next-to-you/`, `bud-light-millennial-beach/`.
2. `du-telecom-too-depressing/`, `badya-life-imitates-art/`, `panda-never-say-no-to-panda/`, `du-telecom-too-silly/`, `biddi-horses/`.
3. `lavazza-coffee-at-home/`, `fargo/`, `too-noisy/`, `too-informative/`, `too-insulting/`.
4. `meeting/`, `theraphy/`, `changing-diner/`, `tomatina-festival/`, `the-russian-odyssey/`.
5. `tears-of-winter/`, `verisimilitude-at-noon/`, `too-complicated/`, `never-say-no-to-panda/`, `the-big-turnaround/`.
6. `the-visitor/`, `forrest-gump/`, `too-scary/`, `too-boring/`, `rockin-mamas/`.
7. `laundry/`, `party/`, `undressing/`, `the-night-is-young/`, `cheers-to-all-fans/`.
8. `heineken-the-cleaners/`, `the-mad-queen/`, `the-cowboy/`, `the-mobster/`.

### Campaign routes

All paths below are relative to `https://alitwotimes.com/campaign/`:

1. `lavazza/`, `diesel/`, `sell-anything/`, `badya-creative-city/`, `bud-light/`, `never-say-no-to-panda/`, `amazon/`, `du-telecom/`.
2. `two-for-one-tickets/`, `if-you-have-a-minute/`, `molto/`, `piraeus-bank/`, `lavazza-2/`, `film-interviews/`, `hohos/`, `elite-wafer/`.
3. `du-telecom-2/`, `rolling-stone/`, `heineken/`, `heineken-2/`, `heineken-3/`, `floward/`.

### Client routes

All paths below are relative to `https://alitwotimes.com/client/`:

1. `diesel/`, `lavazza/`, `amazon/`, `bud-light/`, `du-telecom/`, `badya-creative-city/`, `panda-cheese/`, `biddi/`.
2. `loctite-glue/`, `molto/`, `piraeus-bank/`, `hohos/`, `elite-wafer/`, `rolling-stone/`, `heineken/`, `floward/`.

### Author routes

1. `/author/robexoape-com/`
2. `/author/robbertexoape-com/`
3. `/author/ronaldexoape-com/`

## 3. Page and component inventory

### 3.1 Home / Work

1. Full-viewport introduction: large SVG name mark, email, showreel label and year, short director description.
2. Fixed navigation with Bio, Work and Contact. Markup contains separate light and dark menu layers.
3. Selected Work: 22 linked project tiles, each with an image and a muted, loop-enabled MP4 preview in the published HTML. Seven links are marked `data-transition=\"campaign\"`; 15 are marked `data-transition=\"work\"`. The video attributes establish configuration, not whether playback starts on hover or in every browser.
4. Asymmetric desktop composition using a 12-column grid and five row variations (`l-a` through `l-e`), with varied thumbnail sizes and whitespace. At ≤580px tiles collapse into one column, show title overlays and hide thumbnail videos.
5. Contact teaser: large “Get in touch”, short text, five regional representation entries. CSS defines collapsed rows and active states; actual expansion behavior was not captured.
6. Footer: copyright, creator credit and Back to top button.

### 3.2 Biography

1. Dark full-screen introductory hero with name mark, portrait and links.
2. Editorial career timeline: photographs, location/year captions, biography paragraphs, pull quotes.
3. Viral-campaign feature: large numeric display with digits structured as vertically stacked elements; a 94,082,898 views label in the page text. A count-up or rolling animation is plausible but has not been captured.
4. Roots/family section and awards/recognition section with logos and a year-grouped list. CSS includes a hidden overflow area for additional awards; the expansion action was not verified.
5. Shared contact teaser and footer.

### 3.3 Contact

1. Full-viewport heading and list of five representatives linked to location fragments; email, Vimeo and Instagram.
2. Detailed country/contact sections and footer. Published CSS displays these details expanded on the dedicated contact page rather than using the collapsed teaser layout.
3. CSS hides the hero social links at ≤580px. REA's mobile-width Caviar click completed without an observed URL change; destination scroll position was not captured, so do not assert whether it scrolled.

### 3.4 Campaign

1. [Floward](https://alitwotimes.com/campaign/floward/): back link, client name and film count, large featured project, description, “More” project grid.
2. [Two for One Tickets](https://alitwotimes.com/campaign/two-for-one-tickets/): a featured film followed by seven more, demonstrating a larger campaign.
3. CSS specifies a 12-column desktop layout and a single-column mobile layout. Thumbnail and film links appear in page content; exact transition behavior has not been measured.

### 3.5 Player / film detail

1. Full-screen black video area, back affordance, loading spinner, play/pause text, range slider/progress, and Info control.
2. Below-video section contains client, film title, description and, when present, award information. The inspected Cleaners video source is a Vimeo progressive MP4.
3. CSS gives the video `object-fit: contain`. Device-specific selectors hide custom controls and info/footer for `.is-device`; this is a stylesheet observation, not a verified result on a particular device.
4. REA successfully dispatched Info and play-control clicks, but the captured accessibility tree remained unchanged. Playback and scroll effect are **not confirmed**.

## 4. Visual system and motion evidence

Source: [published stylesheet](https://alitwotimes.com/wp-content/themes/aliali/public/main.css) and [homepage HTML](https://alitwotimes.com/).

1. **Typography:** Monument Grotesk Regular and Medium are loaded. Large, tightly tracked viewport-relative headings contrast with small uppercase section labels. Font licensing must be checked; select an authorized alternative for Mattae's site.
2. **Color:** default canvas `#fcf6f4`, ink `#100f0f`; bio and player invert to dark; campaign `#dbe3e5`; contact `#e5e5e5`.
3. **Grain:** a fixed pseudo-element uses a noise image with a one-second, two-step, infinite keyframe animation; CSS disables it at ≤580px.
4. **Rotating mark:** a small hero star has `spinning 10s linear infinite`.
5. **Link underlines:** 0.4-second ease-out horizontal scaling; menu and campaign links define active/hover variants. Mobile CSS changes some hover behavior.
6. **Text reveal infrastructure:** `data-effect=\"mask\"` and `data-effect=\"fade\"` elements start hidden in CSS, with line wrappers. These are implementation clues, not a verified animation sequence.
7. **Project media:** desktop thumbnail video is initially `opacity: 0`; mobile hides it and keeps a title gradient. The event that reveals it needs runtime testing.
8. **Scroll system:** the desktop stylesheet fixes the main page and uses a transform-ready `.a-scroll`; `.is-device` switches to an overflow-scrolling wrapper. Smooth-scroll behavior and inertia need measurement.
9. **Routing:** HTML uses a router wrapper and `data-transition` values `header`, `contact`, `campaign`, `work`, and `back`. These are transition categories, not proof of their exact visual effects or durations.
10. **Player loader:** spinner styling and `spinning` keyframes exist, but the loader's timing was not captured.

## 5. Reusable direction for mattaecooper.org

1. Adapt the **editorial hierarchy**: a distinctive name-led opening, curated work, meaningful project pages, and a clear contact path.
2. Build a **purposeful asymmetric gallery** with own imagery and predictable mobile fallbacks rather than replicating the exact grid or assets.
3. Use **motion as navigation feedback**: prototype a measured subset after capturing reference timing and confirm reduced-motion support.
4. Model projects as **campaigns containing films** only if Mattae's material warrants that structure; otherwise keep the information architecture simpler.
5. Improve on the reference where appropriate: semantic buttons, keyboard access, accessible video controls and labels, reduced motion, responsive media, graceful playback failures and properly formed metadata.

## 6. Remaining work for a genuinely exhaustive motion audit

1. Record desktop and mobile sessions at stable viewport sizes and motion settings. Capture full-page screenshots and frame-by-frame clips of every navigation transition.
2. Test every template's entrance, exit, loading, scroll, hover, focus, tap, back, resize, and failure states; measure duration, delay, easing, direction and trigger.
3. Verify project-preview playback, player play/pause/seek/info, back navigation, contact anchors, location accordions, awards expansion and back-to-top, including keyboard and touch.
4. Verify 39 film sources, each campaign's members, and any site routes not indexed in the sitemaps. Do not equate sitemap coverage with full site coverage.
5. Capture desktop/mobile screenshots and precise typography/layout measurements; compare reduced-motion behavior and identify any runtime errors.
