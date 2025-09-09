// src/components/Button.tsx - Overwrite

import React from 'react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  style?: React.CSSProperties;
};

export default function Button({
  children,
  className = '',
  onClick,
  type = 'button',
  disabled,
  style
}: Props) {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
}



