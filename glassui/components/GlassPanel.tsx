import { cn } from "@/lib/cn";

type GlassPanelProps = {
  className?: string;
  children: React.ReactNode;
  /** Renders as a <div> by default; pass a tag if you need semantics. */
  as?: "div" | "section" | "article" | "aside";
};

/**
 * Liquid-glass panel.
 *
 * A translucent surface that sits over the page's aurora backdrop: real
 * backdrop-filter blur + saturation, a faint white sheen, a refraction rim
 * (inset shadow), and two specular highlights (::before top-left, ::after
 * bottom-right). All of the look lives in the `.glass` utility in
 * globals.css — this component just scopes it and forwards a tag + ref.
 */
export function GlassPanel({ className, children, as = "div" }: GlassPanelProps) {
  const Tag = as;
  return (
    <Tag className={cn("glass rounded-clay p-6", className)}>{children}</Tag>
  );
}
