#!/usr/bin/env python3
"""CloakBrowser full-depth site capture for aesthetic-blanks.

Usage:
  python3 capture_site.py https://www.example.com/ [slug] [max_pages]

Writes: aesthetic-blanks/_capture/<slug>/{summary,pages,ia,graph,motion-timeline}.json + screenshots/
Requires: cloakbrowser (`from cloakbrowser import launch`)
"""
from __future__ import annotations

import json
import re
import sys
import time
from pathlib import Path
from urllib.parse import urljoin, urlparse

from cloakbrowser import launch

# Override via argv
ORIGIN = sys.argv[1].rstrip("/") if len(sys.argv) > 1 else "https://www.example.com"
SLUG = sys.argv[2] if len(sys.argv) > 2 else urlparse(ORIGIN).netloc.replace("www.", "").split(".")[0]
MAX_PAGES = int(sys.argv[3]) if len(sys.argv) > 3 else 40

# Resolve output relative to aesthetic-blanks root if present
CANDIDATES = [
    Path("/home/ae/AE/03_Vault/aesthetic-blanks"),
    Path.cwd(),
]
ROOT = next((p for p in CANDIDATES if (p / "README.md").exists() or p.name == "aesthetic-blanks"), Path.cwd())
OUT = ROOT / "_capture" / SLUG


def same_origin(href: str) -> bool:
    if not href or href.startswith(("mailto:", "tel:", "javascript:", "#")):
        return False
    host = urlparse(urljoin(ORIGIN + "/", href)).netloc.replace("www.", "")
    return host == urlparse(ORIGIN).netloc.replace("www.", "")


def normalize(href: str) -> str:
    absu = urljoin(ORIGIN + "/", href)
    p = urlparse(absu)
    path = p.path.rstrip("/") or "/"
    return f"{p.scheme}://{p.netloc}{path}" + (f"?{p.query}" if p.query else "")


def path_of(url: str) -> str:
    p = urlparse(url)
    return p.path.rstrip("/") or "/"


def goto_retry(page, url: str, attempts: int = 4) -> None:
    last = None
    for i in range(attempts):
        try:
            page.goto(url, wait_until="domcontentloaded", timeout=45000)
            page.wait_for_timeout(2500)
            return
        except Exception as e:
            last = e
            if i < attempts - 1:
                page.wait_for_timeout(1500 + i * 500)
            else:
                raise last


EXTRACT_JS = """() => {
  const abs = (u) => { try { return new URL(u, location.href).href; } catch { return u; } };
  const css = (el, prop) => getComputedStyle(el).getPropertyValue(prop);
  const rect = (el) => {
    const r = el.getBoundingClientRect();
    return { x: Math.round(r.x), y: Math.round(r.y + window.scrollY), w: Math.round(r.width), h: Math.round(r.height) };
  };
  const meta = {
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.content || '',
    ogImage: document.querySelector('meta[property="og:image"]')?.content || '',
    canonical: document.querySelector('link[rel="canonical"]')?.href || location.href,
    lang: document.documentElement.lang || '',
  };
  const links = [...document.querySelectorAll('a[href]')].map(a => ({
    href: abs(a.getAttribute('href')),
    text: (a.innerText || '').trim().slice(0, 120),
  }));
  const nav = [...document.querySelectorAll('nav a, header a, [role="navigation"] a')].map(a => ({
    href: abs(a.getAttribute('href')),
    text: (a.innerText || a.getAttribute('aria-label') || '').trim().slice(0, 80),
  }));
  const sectionEls = [...document.querySelectorAll('main section, main > div, section, footer, header')];
  const seen = new Set();
  const sections = [];
  for (const el of sectionEls) {
    const r = rect(el);
    if (r.h < 40 || r.w < 80) continue;
    const key = `${r.y}-${r.h}-${el.tagName}`;
    if (seen.has(key)) continue;
    seen.add(key);
    sections.push({
      tag: el.tagName.toLowerCase(),
      id: el.id || '',
      className: (el.className && String(el.className).slice(0, 160)) || '',
      r,
      text: (el.innerText || '').replace(/\\s+/g, ' ').trim().slice(0, 800),
      headings: [...el.querySelectorAll('h1,h2,h3,h4')].slice(0, 6).map(h => ({
        tag: h.tagName.toLowerCase(),
        text: (h.innerText || '').trim().slice(0, 200),
        styles: {
          fontSize: css(h, 'font-size'),
          fontWeight: css(h, 'font-weight'),
          letterSpacing: css(h, 'letter-spacing'),
          color: css(h, 'color'),
          fontFamily: css(h, 'font-family').slice(0, 120),
        },
      })),
      imgs: [...el.querySelectorAll('img, video')].slice(0, 12).map(n => ({
        kind: n.tagName.toLowerCase(),
        src: n.currentSrc || n.src || '',
        alt: n.alt || '',
        r: rect(n),
      })),
    });
  }
  const textNodes = [...document.querySelectorAll('h1,h2,h3,h4,p,blockquote,button,a')].slice(0, 200).map(el => ({
    tag: el.tagName.toLowerCase(),
    text: (el.innerText || '').trim().slice(0, 300),
    r: rect(el),
    styles: {
      fontSize: css(el, 'font-size'),
      fontWeight: css(el, 'font-weight'),
      letterSpacing: css(el, 'letter-spacing'),
      color: css(el, 'color'),
      fontFamily: css(el, 'font-family').slice(0, 100),
      opacity: css(el, 'opacity'),
      transform: css(el, 'transform'),
    },
  })).filter(t => t.text.length > 0);
  const media = {
    images: [...document.querySelectorAll('img')].slice(0, 80).map(img => ({
      src: img.currentSrc || img.src, alt: img.alt || '', w: img.naturalWidth, h: img.naturalHeight, r: rect(img),
    })),
    videos: [...document.querySelectorAll('video')].map(v => ({
      src: v.currentSrc || v.src || '', poster: v.poster || '', r: rect(v),
    })),
  };
  const body = document.body;
  const root = document.documentElement;
  const tokens = {
    bodyBg: css(body, 'background-color'),
    bodyColor: css(body, 'color'),
    bodyFont: css(body, 'font-family').slice(0, 160),
    cssVars: {},
  };
  const styles = getComputedStyle(root);
  for (let i = 0; i < styles.length; i++) {
    const name = styles[i];
    if (name.startsWith('--')) tokens.cssVars[name] = styles.getPropertyValue(name).trim().slice(0, 120);
  }
  const animEls = [];
  for (const el of document.querySelectorAll('*')) {
    const s = getComputedStyle(el);
    if ((s.animationName && s.animationName !== 'none') || (s.transform && s.transform !== 'none') || (s.willChange && s.willChange !== 'auto')) {
      if (animEls.length < 80) {
        animEls.push({
          tag: el.tagName.toLowerCase(),
          className: (el.className && String(el.className).slice(0, 100)) || '',
          animationName: s.animationName,
          animationDuration: s.animationDuration,
          transform: s.transform,
          opacity: s.opacity,
          text: (el.innerText || '').trim().slice(0, 80),
          r: rect(el),
        });
      }
    }
  }
  const keyframes = [];
  try {
    for (const sheet of document.styleSheets) {
      let rules; try { rules = sheet.cssRules; } catch { continue; }
      if (!rules) continue;
      for (const rule of rules) {
        if (rule.type === CSSRule.KEYFRAMES_RULE) {
          keyframes.push({ name: rule.name, css: rule.cssText.slice(0, 500) });
        }
      }
    }
  } catch {}
  const libs = {
    gsap: !!(window.gsap || window.GreenSockGlobals),
    ScrollTrigger: !!(window.ScrollTrigger),
    lenis: !!(window.Lenis || window.lenis),
    loco: !!(window.LocoScroll || document.querySelector('[data-scroll-container]')),
    barba: !!(window.barba || window.Barba),
    three: !!(window.THREE),
    webflow: !!document.querySelector('[data-wf-page], html.w-mod-js'),
    next: !!document.querySelector('#__next') || !!window.__NEXT_DATA__,
    scripts: [...document.scripts].map(s => s.src).filter(Boolean).slice(0, 40),
  };
  return {
    meta, nav, links, sections, textNodes, media, tokens,
    motion: { animEls, keyframes: keyframes.slice(0, 40), libs },
    scrollHeight: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
  };
}"""


def extract_page(page, url: str) -> dict:
    page.evaluate(
        """async () => {
      const sleep = (ms) => new Promise(r => setTimeout(r, ms));
      const h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      const step = Math.max(400, Math.floor(window.innerHeight * 0.7));
      for (let y = 0; y < h; y += step) { window.scrollTo(0, y); await sleep(280); }
      window.scrollTo(0, 0); await sleep(600);
    }"""
    )
    data = page.evaluate(EXTRACT_JS)
    data["url"] = url
    data["path"] = path_of(url)
    return data


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    shots = OUT / "screenshots"
    shots.mkdir(exist_ok=True)
    browser = launch(headless=True, humanize=True, human_preset="default")
    try:
        page = browser.new_page()
        page.set_viewport_size({"width": 1440, "height": 900})
        queue = [ORIGIN + "/"]
        seen: set[str] = set()
        pages: list[dict] = []
        graph: dict[str, list[str]] = {}
        while queue and len(seen) < MAX_PAGES:
            nurl = normalize(queue.pop(0))
            if nurl in seen or not same_origin(nurl):
                continue
            if re.search(r"\.(pdf|jpg|jpeg|png|gif|webp|svg|mp4|webm|zip|css|js)(\?|$)", nurl, re.I):
                continue
            seen.add(nurl)
            print(f"[{len(seen)}/{MAX_PAGES}] {nurl}", flush=True)
            try:
                goto_retry(page, nurl)
            except Exception as e:
                pages.append({"url": nurl, "path": path_of(nurl), "error": str(e)})
                continue
            data = extract_page(page, nurl)
            slug = re.sub(r"[^a-z0-9]+", "-", data["path"].strip("/")) or "home"
            try:
                page.screenshot(path=str(shots / f"{slug}-desktop.png"), full_page=True, timeout=60000)
            except Exception as e:
                data["screenshot_desktop_error"] = str(e)
            page.set_viewport_size({"width": 390, "height": 844})
            page.wait_for_timeout(500)
            try:
                page.screenshot(path=str(shots / f"{slug}-mobile.png"), full_page=True, timeout=60000)
            except Exception as e:
                data["screenshot_mobile_error"] = str(e)
            page.set_viewport_size({"width": 1440, "height": 900})
            pages.append(data)
            outs = []
            for link in data.get("links", []) + data.get("nav", []):
                href = link.get("href") or ""
                if same_origin(href):
                    nu = normalize(href)
                    outs.append(nu)
                    if nu not in seen and nu not in queue:
                        queue.append(nu)
            graph[data["path"]] = sorted(set(path_of(u) for u in outs))

        # motion timeline on home
        try:
            goto_retry(page, ORIGIN + "/")
            samples = []
            for pct in [0, 0.15, 0.35, 0.55, 0.75, 0.95]:
                page.evaluate(
                    """(pct) => {
                      const h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
                      window.scrollTo(0, Math.max(0, h * pct));
                    }""",
                    pct,
                )
                page.wait_for_timeout(600)
                samples.append(
                    page.evaluate(
                        """(pct) => {
                          const items = [];
                          for (const el of document.querySelectorAll('h1,h2,h3,p,img,video,section,div')) {
                            const s = getComputedStyle(el);
                            if (s.opacity !== '1' || (s.transform && s.transform !== 'none')) {
                              const r = el.getBoundingClientRect();
                              if (r.bottom < 0 || r.top > window.innerHeight) continue;
                              if (items.length >= 25) break;
                              items.push({ tag: el.tagName.toLowerCase(), text: (el.innerText||'').trim().slice(0,60), opacity: s.opacity, transform: s.transform, y: Math.round(r.y) });
                            }
                          }
                          return { pct, scrollY: window.scrollY, items };
                        }""",
                        pct,
                    )
                )
            (OUT / "motion-timeline.json").write_text(json.dumps(samples, indent=2), encoding="utf-8")
        except Exception as e:
            print(f"motion deep-dive fail: {e}", flush=True)

        summary = {
            "origin": ORIGIN,
            "slug": SLUG,
            "capturedAt": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
            "pageCount": len(pages),
            "paths": [p.get("path") for p in pages],
            "graph": graph,
            "errors": [p for p in pages if p.get("error")],
        }
        (OUT / "summary.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")
        (OUT / "pages.json").write_text(json.dumps(pages, indent=2), encoding="utf-8")
        (OUT / "graph.json").write_text(json.dumps(graph, indent=2), encoding="utf-8")
        ia = []
        for p in pages:
            if p.get("error"):
                continue
            ia.append(
                {
                    "path": p.get("path"),
                    "title": p.get("meta", {}).get("title"),
                    "description": p.get("meta", {}).get("description"),
                    "nav": p.get("nav", [])[:20],
                    "headings": [h for s in p.get("sections", []) for h in s.get("headings", [])][:20],
                    "textSamples": [t for t in p.get("textNodes", []) if t.get("tag") in ("h1", "h2", "h3", "p", "blockquote")][:30],
                    "mediaCounts": {
                        "images": len(p.get("media", {}).get("images", [])),
                        "videos": len(p.get("media", {}).get("videos", [])),
                    },
                    "libs": p.get("motion", {}).get("libs", {}),
                    "animCount": len(p.get("motion", {}).get("animEls", [])),
                    "tokens": p.get("tokens", {}),
                }
            )
        (OUT / "ia.json").write_text(json.dumps(ia, indent=2), encoding="utf-8")
        print(json.dumps(summary, indent=2))
        print(f"Wrote → {OUT}")
    finally:
        browser.close()


if __name__ == "__main__":
    main()
