import React from 'react';
import type { ReactNode } from 'react';


type Props = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function Card({ children, className = '', style }: Props) {
  return (
    <div className={`light-card ${className}`} style={style}>
      {children}
    </div>
  );
}
