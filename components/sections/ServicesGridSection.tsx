import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TransworldServicesData } from '@/types/templates.types';
import { FaPlane, FaShip, FaTruck, FaBox, FaTrain, FaCubes, FaWarehouse, FaTruckLoading, FaArrowRight } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPlane': return <FaPlane />;
    case 'FaShip': return <FaShip />;
    case 'FaTruck': return <FaTruck />;
    case 'FaBox': return <FaBox />;
    case 'FaTrain': return <FaTrain />;
    case 'FaCubes': return <FaCubes />;
    case 'FaWarehouse': return <FaWarehouse />;
    case 'FaTruckLoading': return <FaTruckLoading />;
    default: return <FaBox />;
  }
};

export const ServicesGridSection = ({ data }: { data?: TransworldServicesData }) => {
  if (!data) return null;

  return (
    <section className="bg-white relative z-10 py-8 lg:py-12">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12">

        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-[var(--color-accent)]" />
            <span className="text-[var(--color-accent)] font-bold text-sm tracking-[0.2em] uppercase">
              {data.subtitle}
            </span>
            <div className="w-10 h-[1px] bg-[var(--color-accent)]" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-black leading-tight text-[#0f284b] tracking-tight mb-6">
            {data.titlePart1}
            <br />
            <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
          </h2>

          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-lg transition-shadow">

              {/* Top Image Box */}
              <div className="relative h-[200px] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Icon Box */}
                <div
                  className={`absolute bottom-0 left-6 w-16 h-16 flex items-center justify-center text-white text-2xl rounded-t-xl
                  ${service.iconBgTheme === 'olive' ? 'bg-[var(--color-accent)]' : 'bg-[#0f284b]'}`}
                >
                  {renderIcon(service.icon)}
                </div>
              </div>

              {/* Bottom Content */}
              <div className="p-6 pt-5 flex flex-col flex-1">
                <span className="text-gray-400 font-medium text-sm mb-1">{service.number}</span>
                <div className="w-6 h-[2px] bg-[var(--color-accent)] mb-3" />

                <h3 className="text-[#0f284b] font-bold text-xl mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                <Link
                  href={service.url}
                  className="inline-flex items-center gap-2 font-bold text-[#0f284b] text-sm group-hover:text-[var(--color-accent)] transition-colors"
                >
                  Read More
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white ml-1">
                    <FaArrowRight size={10} />
                  </div>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
