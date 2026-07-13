import { ButtonHTMLAttributes } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryButton = ({
  children,
  className = "",
  ...props
}: PrimaryButtonProps) => {
  const base =
    "font-body text-sm px-4 py-2.5 rounded-sm border border-(--color-sumi)/15 text-(--color-sumi) disabled:opacity-30 hover:border-(--color-aizome) transition-colors";

  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
