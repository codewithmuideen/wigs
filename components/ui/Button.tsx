import { ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline-light";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition duration-200 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-burgundy text-ivory hover:bg-burgundy-light",
  secondary: "bg-gold text-burgundy hover:bg-gold-soft",
  ghost: "bg-transparent text-burgundy hover:bg-burgundy/5",
  "outline-light": "border border-ivory/60 text-ivory hover:bg-ivory/10",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-sm",
};

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className = ""
) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; size?: ButtonSize }
>(({ variant = "primary", size = "md", className = "", ...props }, ref) => (
  <button ref={ref} className={buttonClasses(variant, size, className)} {...props} />
));
Button.displayName = "Button";

export default Button;
