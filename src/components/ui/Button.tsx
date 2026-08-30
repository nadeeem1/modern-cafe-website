import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export type ButtonVariant = "primary" | "dark" | "outline" | "outlineLight" | "light";
export type ButtonSize = "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  /** Internal route — renders a React Router Link. */
  to?: string;
  /** External URL — renders an anchor. */
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const baseClasses =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full text-[13px] font-semibold tracking-[0.01em] whitespace-nowrap transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-500 disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-clay-500 text-cream-50 shadow-[0_1px_2px] shadow-espresso-950/20 hover:bg-clay-600 hover:shadow-[0_8px_20px_-8px] hover:shadow-espresso-950/40",
  dark: "bg-espresso-900 text-cream-50 shadow-[0_1px_2px] shadow-espresso-950/20 hover:bg-espresso-800",
  outline:
    "border border-espresso-900/20 text-espresso-900 hover:border-espresso-900 hover:bg-espresso-900 hover:text-cream-50",
  outlineLight: "border border-cream-50/35 text-cream-50 hover:bg-cream-50 hover:text-espresso-900",
  light: "bg-cream-50 text-espresso-900 hover:bg-cream-200",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5",
  lg: "px-7 py-3.5",
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  onClick,
  className = "",
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
