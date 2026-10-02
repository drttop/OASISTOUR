import React from 'react';
import { useSite } from '../../context/SiteContext';
import { Compass, MapPin, Sparkles } from 'lucide-react';
import { getResponsiveImageProps } from '../../utils/imageOptimizer';

export const PhilippinesSection: React.FC = () => {
  const { philippineSpots, siteConfig } = useSite();

  const philippinesBadge = siteConfig.philippinesBadge || 'OASIS VIP TOUR SERVICE';
  const philippinesTitle = siteConfig.philippinesTitle || '오아시스 투어서비스';
  const philippinesSubtitle =
    siteConfig.philippinesSubtitle ||
    '최고급 호텔 프리룸부터 전용 의전 세단, 명문 골프 및 24시간 프라이빗 케어까지,\n오아시스 VIP 회원님만을 위한 특별한 맞춤 투어 서비스를 제공합니다.';

  return (
    <section id="philippines" className="py-20 sm:py-28 bg-white text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider text-[#30308A] bg-[#30308A]/10 uppercase font-montserrat">
            <Compass className="w-3.5 h-3.5" />
            <span>{philippinesBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight whitespace-pre-line leading-tight">
            {philippinesTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-balance whitespace-pre-line">
            {philippinesSubtitle}
          </p>
        </div>

        {/* Spots Grid: 1 column on mobile, 2 columns on desktop for optimal typography & visual presence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {philippineSpots.map((spot) => (
            <div
              key={spot.id}
              className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Area - Clean view with location badge, NO title/subtitle overlay */}
              <div className="relative h-52 sm:h-64 md:h-72 w-full overflow-hidden bg-slate-900">
                <img
                  {...getResponsiveImageProps(
                    spot.image,
                    640,
                    '(max-width: 768px) 100vw, 50vw'
                  )}
                  alt={spot.title}
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={420}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-3 py-1.5 rounded-lg bg-[#1E1E4F]/95 backdrop-blur-xs text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-[#E5B54F]" />
                    {spot.location}
                  </span>
                </div>
              </div>

              {/* Description Area - Title and Subtitle brought down here with larger, highly intuitive fonts */}
              <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2 sm:space-y-2.5">
                  {/* Main Title (Significantly larger & intuitive font) */}
                  <h3 className="text-lg sm:text-2xl font-black text-slate-950 group-hover:text-[#30308A] transition-colors leading-snug tracking-tight">
                    {spot.title}
                  </h3>

                  {/* Subtitle / Facilities */}
                  {spot.subtitle && (
                    <p className="text-xs sm:text-sm md:text-base font-bold text-[#b8860b] dark:text-[#E5B54F] leading-snug">
                      {spot.subtitle}
                    </p>
                  )}

                  {/* Detailed Description */}
                  <p className="text-xs sm:text-sm text-slate-600 sm:text-slate-700 leading-relaxed pt-1 font-normal">
                    {spot.description}
                  </p>
                </div>

                {/* VIP Benefit Footer - Hashtags completely removed */}
                <div className="pt-3.5 sm:pt-4 flex items-center gap-2 border-t border-slate-200/80 text-xs sm:text-sm font-bold text-[#30308A]">
                  <Sparkles className="w-4 h-4 text-[#E5B54F]" />
                  <span>오아시스 VIP 전담 케어 혜택</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
