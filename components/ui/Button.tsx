import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface ButtonProps {
  text: string;
  url?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  withSideLines?: boolean;
  variant?: 'primary' | 'outline';
}

export const Button = ({ 
  text, 
  url, 
  onClick, 
  className = '', 
  showIcon = true,
  withSideLines = false,
  variant = 'primary'
}: ButtonProps) => {
  // New Transworld Logistics Design Buttons
  const baseClasses = variant === 'primary' 
    ? `bg-[var(--color-accent)] hover:bg-[var(--color-primary)] text-white px-6 sm:px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-fit ${className}`
    : `bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-white px-6 sm:px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 w-fit ${className}`;

  const content = (
    <>
      {text}
      {showIcon && <FaArrowRight className="text-sm font-light" />}
    </>
  );

  const buttonElement = url ? (
    <Link href={url} className={baseClasses}>
      {content}
    </Link>
  ) : (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );

  if (withSideLines) {
    return (
      <div className="flex items-center justify-center gap-4 md:gap-8 w-full max-w-5xl mx-auto">
        <div className="flex-1 h-[1px] bg-gray-200 max-w-[40px] md:max-w-[120px]" />
        {buttonElement}
        <div className="flex-1 h-[1px] bg-gray-200 max-w-[40px] md:max-w-[120px]" />
      </div>
    );
  }

  return buttonElement;
};
