import React from 'react';
import { TransworldGetQuoteData, QuoteFormConfig } from '@/types/templates.types';
import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBox, FaBoxes, FaWeightHanging, FaCalendarAlt, FaFileAlt, FaCoins, FaCog, FaClock, FaHeadset, FaGlobe, FaTruck, FaShieldAlt, FaArrowRight, FaPhoneAlt } from 'react-icons/fa';

const iconMap: Record<string, React.ReactNode> = {
  FaUser: <FaUser />,
  FaBuilding: <FaBuilding />,
  FaEnvelope: <FaEnvelope />,
  FaPhone: <FaPhone />,
  FaMapMarkerAlt: <FaMapMarkerAlt />,
  FaBox: <FaBox />,
  FaBoxes: <FaBoxes />,
  FaWeightHanging: <FaWeightHanging />,
  FaCalendarAlt: <FaCalendarAlt />,
  FaFileAlt: <FaFileAlt />,
  FaCoins: <FaCoins />,
  FaCog: <FaCog />,
  FaClock: <FaClock />,
  FaHeadset: <FaHeadset />,
  FaGlobe: <FaGlobe />,
  FaTruck: <FaTruck />,
  FaShieldAlt: <FaShieldAlt />
};

export const GetQuoteContent = ({ data }: { data?: TransworldGetQuoteData }) => {
  if (!data) return null;

  return (
    <section className="bg-white py-12 lg:py-12">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

          {/* Left Column: Form Section */}
          <div className="lg:w-[60%] flex-shrink-0 bg-[#fbfbfb] rounded-xl border border-gray-100 shadow-sm p-6 sm:p-10">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-[var(--color-accent)] inline-block"></span>
                <span className="text-gray-600 font-bold text-sm tracking-widest uppercase">{data.subtitle}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-4">{data.title}</h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">{data.description}</p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.formFields.map((field) => (
                  <div key={field.id} className={field.type === 'textarea' ? 'sm:col-span-2' : ''}>
                    <label className="block text-sm font-bold text-[var(--color-primary)] mb-2">
                      {field.label.replace(' *', '')}
                      {field.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    <div className="relative">
                      <div className={`absolute left-4 text-gray-400 ${field.type === 'textarea' ? 'top-4' : 'top-1/2 -translate-y-1/2'}`}>
                        {field.icon && iconMap[field.icon]}
                      </div>

                      {field.type === 'select' ? (
                        <div className="relative">
                          <select defaultValue="" className="w-full bg-white border border-gray-200 text-gray-600 text-sm rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent block p-3.5 pl-11 appearance-none outline-none transition-all shadow-sm">
                            <option value="" disabled>{field.placeholder}</option>
                            {field.options?.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                          </select>
                          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                        </div>
                      ) : field.type === 'textarea' ? (
                        <textarea
                          placeholder={field.placeholder}
                          rows={4}
                          className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent block p-3.5 pl-11 outline-none transition-all shadow-sm resize-none"
                        ></textarea>
                      ) : (
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent block p-3.5 pl-11 outline-none transition-all shadow-sm"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Checkbox */}
              <div className="flex items-start mt-6">
                <div className="flex items-center h-5">
                  <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[var(--color-accent)] accent-[var(--color-primary)] cursor-pointer" required />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm font-semibold text-[var(--color-primary)] cursor-pointer select-none">
                  I agree to be contacted by Transworld regarding my quote request.
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full bg-[var(--color-accent)] hover:bg-[#a67b43] text-white font-bold rounded-lg text-lg px-5 py-4 text-center transition-all flex items-center justify-center gap-2 group mt-4">
                <span>{data.submitText}</span>
                <span className="bg-white text-[var(--color-accent)] rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <FaArrowRight className="text-xs" />
                </span>
              </button>
            </form>
          </div>

          {/* Right Column */}
          <div className="lg:w-[40%] flex flex-col gap-6">

            {/* Image Box */}
            <div className="relative rounded-xl overflow-hidden h-[240px] shadow-sm">
              <img src={data.rightImage} alt="Cargo" className="w-full h-full object-cover" />
              <div className="absolute top-0 right-0 bg-[var(--color-accent)] rounded-bl-[60px] p-6 pl-10 pb-10 text-white font-bold leading-tight flex flex-col text-sm text-right">
                {data.rightImageOverlay.split(' ').map((word, i) => <span key={i}>{word}</span>)}
                <span className="w-6 h-[2px] bg-white mt-3 inline-block self-end"></span>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-[#f8f9fa] rounded-xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-extrabold text-[var(--color-primary)] mb-6">{data.whyChooseUsTitle}</h3>
              <div className="flex flex-col gap-5">
                {data.features.map(f => (
                  <div key={f.id} className="flex gap-4 items-start">
                    <div className="w-11 h-11 bg-[#f3f5e9] text-[var(--color-accent)] rounded-full flex items-center justify-center flex-shrink-0 text-xl shadow-sm border border-[#e1e6cd]">
                      {iconMap[f.icon]}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[var(--color-primary)] text-sm md:text-base mb-1">{f.title}</h4>
                      <p className="text-gray-500 text-xs md:text-sm leading-snug">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-[var(--color-primary)] rounded-xl p-8 relative overflow-hidden text-white shadow-md flex-grow flex items-center">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/bg/pattern.png')] bg-cover"></div>

              <div className="relative z-10 w-2/3">
                <span className="text-[var(--color-accent)] font-semibold text-sm block mb-1">{data.helpBox.subtitle}</span>
                <h3 className="text-2xl font-extrabold mb-6 text-white">{data.helpBox.titleHighlight}</h3>

                <div className="flex flex-col gap-4 text-xs md:text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[var(--color-accent)] rounded-md flex items-center justify-center text-white flex-shrink-0">
                      <FaPhoneAlt size={12} />
                    </div>
                    <span className="font-semibold">{data.helpBox.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[var(--color-accent)] rounded-md flex items-center justify-center text-white flex-shrink-0">
                      <FaEnvelope size={12} />
                    </div>
                    <span className="font-semibold">{data.helpBox.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[var(--color-accent)] rounded-md flex items-center justify-center text-white flex-shrink-0">
                      <FaMapMarkerAlt size={12} />
                    </div>
                    <span className="font-medium leading-snug">{data.helpBox.address}</span>
                  </div>
                </div>
              </div>

              <img src={data.helpBox.image} alt="Support" className="absolute bottom-0 right-0 h-[90%] object-contain max-w-[45%]" />
            </div>

          </div>
        </div>

        {/* Bottom Features Strip */}
        <div className="mt-8 bg-[#fbfbfb] rounded-xl border border-gray-100 shadow-sm p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {data.bottomFeatures.map((bf, index) => (
            <div key={bf.id} className={`flex items-center gap-4 ${index !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}>
              <div className="text-4xl text-[var(--color-primary)]">
                {iconMap[bf.icon]}
              </div>
              <div>
                <h4 className="font-extrabold text-[var(--color-primary)] text-sm mb-1">{bf.title}</h4>
                <p className="text-gray-500 text-xs leading-tight">{bf.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
