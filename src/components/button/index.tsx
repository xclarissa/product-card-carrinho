import React from "react";

interface CustomButtonProps {
  variant?: "primary" | "secondary" | "terciary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  ...props
}: CustomButtonProps) => {
  return (
    <button className={`btn ${variant} ${size}`} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
