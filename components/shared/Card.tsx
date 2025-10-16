
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg transition-shadow hover:shadow-xl ${className}`}>
      {children}
    </div>
  );
};

export default Card;
