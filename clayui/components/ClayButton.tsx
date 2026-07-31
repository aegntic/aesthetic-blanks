import { cn } from "@/lib/cn";

type Variant = "clay" | "gradient" | "ghost" | "dark";

/** A clay button. Presses INTO the clay (inset shadow + settle) on :active.
 *  Text is carved (engraved) via text-shadow — reads strongest on the `dark`
 *  and `gradient` surfaces and in dark mode; subtle on light matte clay. */
export function ClayButton({
  variant = "clay",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const variants: Record<Variant, string> = {
    clay: "clay text-clay-muted",
    gradient: "clay-gradient",
    ghost: "clay-inset text-clay-muted",
    dark: "clay-dark",
  };
  return (
    <button
      className={cn(
        "clay-pressable clay-text-carved inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-clay-sm select-none",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
