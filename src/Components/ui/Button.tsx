import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "primary" | "secondary";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "primary",
  disabled = false,
  className = ""
}) => {
  const baseClass = "px-6 py-3 rounded-xl font-medium transition-colors";
  const primaryClass = "bg-blue-600 text-white hover:bg-blue-700";
  const secondaryClass = "bg-gray-100 text-gray-900 hover:bg-gray-200";

  const buttonClass = `${baseClass} ${
    type === "primary" ? primaryClass : secondaryClass
  } ${className}`;

  return (
    <button
      aria-label="Button Colors"
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
