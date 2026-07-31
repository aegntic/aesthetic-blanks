import { cn } from "@/lib/cn";

type Variant = "polished" | "brushed";

type MetalButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

/**
 * Metallic button.
 *
 * Polished (default) = a 6-stop steel gradient that shifts on hover; brushed
 * = a fine repeating grain. Both sink on :active via `.metal-pressable`
 * (the inset gets darker, reading as a dented metal surface). Text sits in a
 * cool engraved tone so it reads against the sheen.
 */
export function MetalButton({
  variant = "polished",
  className,
  children,
  ...props
}: MetalButtonProps) {
  const variants: Record<Variant, string> = {
    polished: "metal",
    brushed: "metal-brushed",
  };
  return (
    <button
      className={cn(
        "metal-pressable inline-flex items-center justify-center gap-2 rounded-clay-sm px-6 py-3 font-semibold text-clay-navy select-none",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
