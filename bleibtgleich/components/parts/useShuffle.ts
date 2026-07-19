"use client";
import { useCallback } from "react";

/**
 * Hover scramble (source `.shuffle`): on enter, scramble the label text for a
 * few iterations then restore. Returns event handlers for a hoverable element.
 */
export function useShuffle(text: string, iterations = 2, intervalMs = 80) {
  const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const scramble = useCallback(
    (src: string) => {
      const arr = src.split("");
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr.join("");
    },
    [],
  );

  const run = useCallback(
    (el: HTMLElement) => {
      let it = 0;
      const tick = () => {
        el.textContent = scramble(text);
        it += 1;
        if (it < iterations) {
          setTimeout(tick, intervalMs);
        } else {
          el.textContent = text;
        }
      };
      tick();
    },
    [text, iterations, intervalMs, scramble],
  );

  return {
    onEnter: (e: React.MouseEvent<HTMLElement>) => {
      const t = e.currentTarget;
      const orig = t.dataset.orig ?? t.textContent ?? "";
      t.dataset.orig = orig;
      run(t);
    },
    glyphs,
  };
}
