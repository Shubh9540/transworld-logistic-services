import React from 'react';
import Link from 'next/link';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import { BreadcrumbData } from '@/types/templates.types';

export const Breadcrumb = ({ data }: { data?: BreadcrumbData }) => {
  if (!data) return null;

  return (
    <section
      className="relative w-full min-h-[250px] md:min-h-[350px] lg:min-h-[350px] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${data.bgImage || '/main logo/breadcrumb.jpg'}')` }}
    >


      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-4 px-4">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-black text-[var(--color-accent)] tracking-wide uppercase">
          {data.title}
        </h1>

        {/* Breadcrumb Paths */}
        <nav className="flex items-center gap-2 text-base font-medium text-white">
          {data.paths.map((path, index) => {
            const isLast = index === data.paths.length - 1;
            return (
              <React.Fragment key={index}>
                {index === 0 ? (
                  path.url ? (
                    <Link
                      href={path.url}
                      className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors"
                    >
                      <FaHome className="text-lg" />
                      <span>{path.label}</span>
                    </Link>
                  ) : (
                    <span className="flex items-center gap-1.5">
                      <FaHome className="text-lg" />
                      <span>{path.label}</span>
                    </span>
                  )
                ) : (
                  <span className={isLast ? "text-white" : "hover:text-[var(--color-accent)] transition-colors cursor-pointer"}>
                    {path.url && !isLast ? (
                      <Link href={path.url}>{path.label}</Link>
                    ) : (
                      path.label
                    )}
                  </span>
                )}
                {!isLast && (
                  <span className="text-white mx-1">/</span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </section>
  );
};
