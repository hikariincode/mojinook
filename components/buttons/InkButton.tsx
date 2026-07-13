import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "danger";
};

const InkButton = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center font-body font-medium px-6 py-3 rounded-sm transition-all duration-150";

  const variants = {
    primary:
      "bg-(--color-aizome) text-(--color-washi) border border-(--color-aizome) hover:opacity-90",
    ghost: "bg-transparent text-(--color-aizome) border-(--color-aizome)/40",
    danger: "bg-(--color-hanko) text-(--color-washi) border-(--color-hanko)",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default InkButton;
