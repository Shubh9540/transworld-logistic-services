import React from 'react';
import { PricingTableData } from '@/types/templates.types';
import { FaCheckCircle, FaMinus } from 'react-icons/fa';

export const PricingTable = ({ data }: { data?: PricingTableData }) => {
  if (!data) return null;

  return (
    <section className="pb-16 lg:pb-12 bg-white relative">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="bg-[#fdfaf6] rounded-xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col xl:flex-row gap-12 xl:gap-8">

          {/* Left Text Column */}
          <div className="w-full xl:w-1/3 shrink-0 pt-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#1a1a1a]">
                {data.subtitle}
              </span>
            </div>
            <h2 className="text-4xl lg:text-[42px] font-black text-[#1a1a1a] mb-4 leading-[1.1] whitespace-pre-line">
              {data.titlePart1}
              <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base whitespace-pre-line">
              {data.description}
            </p>
          </div>

          {/* Right Table Column */}
          <div className="w-full xl:w-2/3 overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm text-center border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left font-bold text-[#1a1a1a] border-b border-gray-200 w-1/4">
                    Features
                  </th>
                  {data.plans.map((planName, idx) => (
                    <th key={idx} className="p-4 font-bold text-[#1a1a1a] border-b border-gray-200">
                      {planName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.features.map((feature) => (
                  <tr key={feature.id} className="border-b border-gray-200 last:border-b-0 hover:bg-white/50 transition-colors">
                    <td className="p-4 text-left text-gray-600 font-medium border-r border-gray-100">
                      {feature.featureName}
                    </td>
                    <td className="p-4 text-gray-500 border-r border-gray-100">
                      {feature.basic === true ? (
                        <FaCheckCircle className="text-[var(--color-accent)] mx-auto" />
                      ) : feature.basic === false ? (
                        <FaMinus className="text-gray-300 mx-auto" />
                      ) : (
                        feature.basic
                      )}
                    </td>
                    <td className="p-4 text-gray-500 border-r border-gray-100">
                      {feature.standard === true ? (
                        <FaCheckCircle className="text-[var(--color-accent)] mx-auto" />
                      ) : feature.standard === false ? (
                        <FaMinus className="text-gray-300 mx-auto" />
                      ) : (
                        feature.standard
                      )}
                    </td>
                    <td className="p-4 text-gray-500 border-r border-gray-100">
                      {feature.premium === true ? (
                        <FaCheckCircle className="text-[var(--color-accent)] mx-auto" />
                      ) : feature.premium === false ? (
                        <FaMinus className="text-gray-300 mx-auto" />
                      ) : (
                        feature.premium
                      )}
                    </td>
                    <td className="p-4 text-gray-500">
                      {feature.elite === true ? (
                        <FaCheckCircle className="text-[var(--color-accent)] mx-auto" />
                      ) : feature.elite === false ? (
                        <FaMinus className="text-gray-300 mx-auto" />
                      ) : (
                        feature.elite
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
};
