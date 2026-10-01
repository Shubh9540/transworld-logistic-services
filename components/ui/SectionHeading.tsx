import React from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  titlePart1?: string;
  titleHighlight?: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeading = ({
  subtitle,
  titlePart1,
  titleHighlight,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) => {
  return (
    <div className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} mb-12 md:mb-16 ${className}`}>
      {subtitle && (
        <div className="flex items-center gap-4 mb-4">
          {align === 'center' && <div className="w-12 h-[2px] bg-[var(--color-accent)]" />}
          <span className="text-[var(--color-accent)] font-bold tracking-[0.2em] text-xs md:text-sm uppercase">
            {subtitle}
          </span>
          <div className="w-12 h-[2px] bg-[var(--color-accent)]" />
        </div>
      )}
      {(titlePart1 || titleHighlight) && (
        <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-primary)] tracking-tight leading-[1.2] mb-5">
          {titlePart1}{' '}
          {titleHighlight && (
            <span className="text-[var(--color-accent)]">{titleHighlight}</span>
          )}
        </h2>
      )}
      {description && (
        <p className="text-gray-500 max-w-2xl text-[13px] md:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
