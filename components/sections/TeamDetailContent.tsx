import React from 'react';
import { TeamMember } from '@/types/templates.types';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaDumbbell, FaFire, FaRunning, FaClipboardList, FaAppleAlt, FaHeartbeat, FaMedal, FaChild, FaBolt, FaWalking, FaYinYang, FaBandAid, FaSync, FaMusic, FaUsers, FaBiking, FaSmile, FaHeadset, FaClipboardCheck, FaCalendarCheck, FaRegSmile, FaHandshake, FaChartLine, FaComments, FaStar, FaLeaf, FaCarrot, FaListAlt, FaUser, FaClock, FaCertificate, FaMapMarkerAlt } from 'react-icons/fa';

export const TeamDetailContent = ({ data }: { data?: TeamMember }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaFacebookF': return <FaFacebookF size={16} />;
      case 'FaInstagram': return <FaInstagram size={16} />;
      case 'FaLinkedinIn': return <FaLinkedinIn size={16} />;
      case 'FaYoutube': return <FaYoutube size={16} />;
      case 'FaDumbbell': return <FaDumbbell size={24} className="text-[var(--color-accent)]" />;
      case 'FaFire': return <FaFire size={24} className="text-[var(--color-accent)]" />;
      case 'FaRunning': return <FaRunning size={24} className="text-[var(--color-accent)]" />;
      case 'FaClipboardList': return <FaClipboardList size={24} className="text-[var(--color-accent)]" />;
      case 'FaAppleAlt': return <FaAppleAlt size={24} className="text-[var(--color-accent)]" />;
      case 'FaHeartbeat': return <FaHeartbeat size={24} className="text-[var(--color-accent)]" />;
      case 'FaMedal': return <FaMedal size={24} className="text-[var(--color-accent)]" />;
      case 'FaChild': return <FaChild size={24} className="text-[var(--color-accent)]" />;
      case 'FaBolt': return <FaBolt size={24} className="text-[var(--color-accent)]" />;
      case 'FaWalking': return <FaWalking size={24} className="text-[var(--color-accent)]" />;
      case 'FaYinYang': return <FaYinYang size={24} className="text-[var(--color-accent)]" />;
      case 'FaBandAid': return <FaBandAid size={24} className="text-[var(--color-accent)]" />;
      case 'FaSync': return <FaSync size={24} className="text-[var(--color-accent)]" />;
      case 'FaMusic': return <FaMusic size={24} className="text-[var(--color-accent)]" />;
      case 'FaUsers': return <FaUsers size={24} className="text-[var(--color-accent)]" />;
      case 'FaBiking': return <FaBiking size={24} className="text-[var(--color-accent)]" />;
      case 'FaSmile': return <FaSmile size={24} className="text-[var(--color-accent)]" />;
      case 'FaHeadset': return <FaHeadset size={24} className="text-[var(--color-accent)]" />;
      case 'FaClipboardCheck': return <FaClipboardCheck size={24} className="text-[var(--color-accent)]" />;
      case 'FaCalendarCheck': return <FaCalendarCheck size={24} className="text-[var(--color-accent)]" />;
      case 'FaRegSmile': return <FaRegSmile size={24} className="text-[var(--color-accent)]" />;
      case 'FaHandshake': return <FaHandshake size={24} className="text-[var(--color-accent)]" />;
      case 'FaChartLine': return <FaChartLine size={24} className="text-[var(--color-accent)]" />;
      case 'FaComments': return <FaComments size={24} className="text-[var(--color-accent)]" />;
      case 'FaStar': return <FaStar size={24} className="text-[var(--color-accent)]" />;
      case 'FaLeaf': return <FaLeaf size={24} className="text-[var(--color-accent)]" />;
      case 'FaCarrot': return <FaCarrot size={24} className="text-[var(--color-accent)]" />;
      case 'FaListAlt': return <FaListAlt size={24} className="text-[var(--color-accent)]" />;
      default: return <FaDumbbell size={24} className="text-[var(--color-accent)]" />;
    }
  };

  return (
    <section className="bg-white py-16 lg:py-12">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-20">

          {/* Left: Image & Quote */}
          <div className="lg:col-span-4">
            <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-[400px]">
                <Image
                  src={data.image}
                  alt={data.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-white text-lg font-light italic mb-4">
                  {data.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-[var(--color-accent)]" />
                  <span className="text-gray-400 text-sm">{data.name}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h4 className="text-[var(--color-accent)] text-sm font-bold tracking-widest uppercase mb-2">
              {data.role}
            </h4>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-6">
              {data.name.split(' ')[0]} <span className="text-[var(--color-accent)]">{data.name.split(' ').slice(1).join(' ')}</span>
            </h2>

            <div className="text-[#4a4a4a] text-base leading-relaxed space-y-4 mb-10 whitespace-pre-line">
              {data.biography}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                  <FaClock size={20} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <h5 className="font-bold text-[#1a1a1a] mb-1">Experience</h5>
                  <p className="text-sm text-[#4a4a4a]">{data.experience}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                  <FaCertificate size={20} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <h5 className="font-bold text-[#1a1a1a] mb-1">Certification</h5>
                  <p className="text-sm text-[#4a4a4a]">{data.certification}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                  <FaDumbbell size={20} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <h5 className="font-bold text-[#1a1a1a] mb-1">Specialization</h5>
                  <p className="text-sm text-[#4a4a4a]">{data.specialization}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                  <FaStar size={20} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <h5 className="font-bold text-[#1a1a1a] mb-1">Training Style</h5>
                  <p className="text-sm text-[#4a4a4a]">{data.trainingStyle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Info */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-6 pb-4 border-b border-gray-200">
                Quick Info
              </h3>

              <ul className="space-y-6 mb-8">
                <li className="flex gap-4">
                  <FaUser size={18} className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-sm font-semibold text-[#1a1a1a]">Position</h5>
                    <p className="text-sm text-[#6b7280]">{data.quickInfo.position}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <FaClock size={18} className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-sm font-semibold text-[#1a1a1a]">Experience</h5>
                    <p className="text-sm text-[#6b7280]">{data.quickInfo.experience}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <FaDumbbell size={18} className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-sm font-semibold text-[#1a1a1a]">Specialization</h5>
                    <p className="text-sm text-[#6b7280]">{data.quickInfo.specialization}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <FaCertificate size={18} className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-sm font-semibold text-[#1a1a1a]">Certification</h5>
                    <p className="text-sm text-[#6b7280]">{data.quickInfo.certification}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <FaMapMarkerAlt size={18} className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-sm font-semibold text-[#1a1a1a]">Location</h5>
                    <p className="text-sm text-[#6b7280]">{data.quickInfo.location}</p>
                  </div>
                </li>
              </ul>

              <div className="pt-6 border-t border-gray-200">
                <h5 className="text-sm font-bold text-[#1a1a1a] mb-4">Connect</h5>
                <div className="flex gap-3">
                  {data.social.map((soc) => (
                    <a
                      key={soc.id}
                      href={soc.url}
                      className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[var(--color-accent)] transition-colors"
                    >
                      {renderIcon(soc.icon)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Expertise */}
        <div>
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-2">
              <h4 className="text-[var(--color-accent)] text-sm font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                AREAS OF EXPERTISE
              </h4>
              <div className="flex-grow h-[1px] bg-gray-200" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-black text-[#1a1a1a]">
              What {data.name.split(' ')[0]} <span className="text-[var(--color-accent)]">Specializes In</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.expertise.map((exp) => (
              <div key={exp.id} className="bg-white border border-gray-100 p-8 rounded-xl text-center shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:border-[var(--color-accent)] transition-colors">
                <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {renderIcon(exp.icon)}
                </div>
                <h4 className="text-lg font-bold text-[#1a1a1a] mb-3">{exp.title}</h4>
                <p className="text-sm text-[#6b7280]">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
