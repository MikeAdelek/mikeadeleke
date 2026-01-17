import React from "react";

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  onClick,
  className = ""
}) => {
  const cardClass = `bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4${
    onClick ? "cursor-pointer hover:shadow-xl transition-shadow" : ""
  } ${className}`;

  return (
    <div className={cardClass} onClick={onClick}>
      {children}
    </div>
  );
};
