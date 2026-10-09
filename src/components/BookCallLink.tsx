import { bookCallHref, contact } from "@/content";

type BookCallLinkProps = {
  className?: string;
  variant?: "primary" | "secondary";
  children?: string;
};

export function BookCallLink({
  className = "",
  variant = "primary",
  children,
}: BookCallLinkProps) {
  const label = children ?? contact.ctaLabel;
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const variants = {
    primary:
      "bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-3 text-sm sm:text-base",
    secondary:
      "border border-border bg-transparent hover:bg-muted px-6 py-3 text-sm sm:text-base",
  };

  return (
    <a href={bookCallHref()} className={`${base} ${variants[variant]} ${className}`}>
      {label}
    </a>
  );
}
