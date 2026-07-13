import { ButtonHTMLAttributes } from "react";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const SecondaryButton = ({
  children,
  className = "",
  ...props
}: SecondaryButtonProps) => {
  const base =
    "font-body text-sm px-4 py-2.5 rounded-sm border border-(--color-hanko)/30 text-(--color-hanko) disabled:opacity-30 hover:bg-(--color-hanko)/5 transition-colors";

  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default SecondaryButton;
