import React from 'react';
import { useSite } from '../../context/SiteContext';
import {
  ShieldCheck,
  Sparkles,
  Award,
  CheckCircle2,
  Landmark,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { siteConfig } = useSite();

  const title = siteConfig.aboutTitle || 'PAGCOR · GAB · PCSO 필리핀 정부 3대 기관 공식 승인\n13년 무사고 현지 직영 VIP 공식 에이전시';
  const subtitle =
    siteConfig.aboutSubtitle && siteConfig.aboutSubtitle.trim().length > 0
      ? siteConfig.aboutSubtitle
      : '오아시스는 2011년 설립 이래 13년간 마닐라와 클락 현지에 직영 지사와 상주 전문팀을 두고, 법적 리스크 없는 100% 안전한 여정과 최고급 5성급 리조트 VIP 멤버십 케어를 제공합니다.';

  return (
    <section id="about" className="py-16 sm:py-24 bg-white text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Breadcrumb & Main Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-[#30308A] bg-[#30308A]/10 border border-[#30308A]/20 uppercase font-montserrat shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#30308A]" />
            <span>{siteConfig.aboutBadge || 'ABOUT OASIS VIP AGENCY'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight whitespace-pre-line leading-[1.3] break-keep font-sans">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed break-keep max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 3 Government Agency Official Accreditation Emblem Cards (PAGCOR, GAB, PCSO) */}
        <div>
          <div className="text-center mb-8">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
              GOVERNMENT OFFICIAL ACCREDITATION
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-slate-900 mt-1">
              필리핀 정부 3대 공인 기관 정식 등록 에이전시
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              무허가 불법 중개 업체와는 차원이 다른, 법적 안전성을 100% 보장받는 정식 라이센스 협력사입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            {/* 1. PAGCOR Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-2 border-amber-400/50 shadow-xl text-center flex flex-col items-center justify-between relative overflow-hidden group hover:border-[#E5B54F] hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5B54F]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#E5B54F] via-[#F4D078] to-[#B38528] flex items-center justify-center text-slate-950 font-black mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Landmark className="w-8 h-8 sm:w-10 sm:h-10 text-slate-950" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#E5B54F] font-montserrat tracking-wider block">
                  PAGCOR
                </span>
                <span className="text-sm sm:text-base text-white font-bold block mt-1">
                  필리핀 게이밍 규제위원회
                </span>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed break-keep">
                  필리핀 대통령 직속 국영 카지노 감독 및 규제 기구 정식 파트너십
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 w-full flex items-center justify-center">
                <span className="text-xs text-emerald-400 font-bold bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full inline-flex items-center gap-1.5 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  정식 규정 준수 승인
                </span>
              </div>
            </div>

            {/* 2. GAB Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-2 border-emerald-400/50 shadow-xl text-center flex flex-col items-center justify-between relative overflow-hidden group hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-300 to-emerald-600 flex items-center justify-center text-slate-950 font-black mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-slate-950" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-emerald-300 font-montserrat tracking-wider block">
                  GAB
                </span>
                <span className="text-sm sm:text-base text-white font-bold block mt-1">
                  필리핀 경기감독위원회
                </span>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed break-keep">
                  필리핀 정부 공인 스포츠 및 엔터테인먼트 경기 합법성 감독 인가
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 w-full flex items-center justify-center">
                <span className="text-xs text-emerald-400 font-bold bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full inline-flex items-center gap-1.5 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  정부 라이센스 취득
                </span>
              </div>
            </div>

            {/* 3. PCSO Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-2 border-sky-400/50 shadow-xl text-center flex flex-col items-center justify-between relative overflow-hidden group hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-300 to-blue-600 flex items-center justify-center text-slate-950 font-black mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-slate-950" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-sky-300 font-montserrat tracking-wider block">
                  PCSO
                </span>
                <span className="text-sm sm:text-base text-white font-bold block mt-1">
                  필리핀 자선복권관리공사
                </span>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed break-keep">
                  국가 공익 자선 기금 조성 및 공식 복권 게이밍 관리기관 정식 인가
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 w-full flex items-center justify-center">
                <span className="text-xs text-emerald-400 font-bold bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full inline-flex items-center gap-1.5 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  합법성 공식 보증
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
