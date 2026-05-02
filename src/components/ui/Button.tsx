import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "ghost" | "primary-light" | "outline-light" | "ghost-light";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dim border border-accent hover:border-accent-dim",
  outline:
    "bg-transparent text-accent border border-accent hover:bg-accent hover:text-white",
  ghost:
    "bg-transparent text-accent hover:text-accent-dim border border-transparent",
  "primary-light":
    "bg-deep-text text-deep hover:bg-white border border-deep-text hover:border-white",
  "outline-light":
    "bg-transparent text-deep-text border border-deep-text/60 hover:border-deep-text hover:bg-white/8",
  "ghost-light":
    "bg-transparent text-deep-muted hover:text-deep-text border border-transparent",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm tracking-wide",
  md: "px-6 py-3 text-sm tracking-wide",
  lg: "px-8 py-4 text-base tracking-wide",
};

const base =
  "inline-block transition-colors duration-150 font-sans";

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
