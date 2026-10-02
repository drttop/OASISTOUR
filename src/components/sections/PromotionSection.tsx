import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import {
  MessageCircle,
  Send,
  Sparkles,
  ShieldCheck,
  Hotel,
  Car,
  Clock,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';

export const PromotionSection: React.FC = () => {
  const { siteConfig } = useSite();
  const [copiedId, setCopiedId] = useState<'kakao' | 'telegram' | null>(null);

  const kakaoId = 'OASIS66';
  const telegramId = 'OASIS46';
  const kakaoUrl = siteConfig.kakaoUrl || 'https://open.kakao.com/o/pNldnRKi';
  const telegramUrl = siteConfig.telegramUrl || 'https://t.me/oasis066';

  const handleCopy = (id: string, type: 'kakao' | 'telegram', e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(id);
      setCopiedId(type);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <section
      id="promotion"
      className="py-14 sm:py-24 bg-black text-white scroll-mt-20 relative overflow-hidden border-t border-b border-neutral-900"
    >
      {/* Subtle luxury glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5B54F]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-[#0274b3]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-[#E5B54F] bg-[#E5B54F]/10 border border-[#E5B54F]/30 uppercase font-montserrat shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E5B54F]" />
            <span>{siteConfig.promotionBadge || '24/7 PRIVATE VIP RESERVATION'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug break-keep">
            {siteConfig.promotionTitle && siteConfig.promotionTitle !== '오아시스 VIP 특별 프로모션'
              ? siteConfig.promotionTitle
              : '24시간 1:1 VIP 실시간 상담 및 예약'}
          </h2>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto break-keep">
            {siteConfig.promotionSubtitle &&
            !siteConfig.promotionSubtitle.includes('스위트룸 무료 숙박 바우처, 항공권')
              ? siteConfig.promotionSubtitle
              : '마닐라 & 클락 최고급 5성급 호텔 프리룸 바우처, 공항 VIP 단독 의전, 롤링 1.5% 우대 혜택을 24시간 실시간 전담 매니저가 비공개로 즉시 안내해 드립니다.'}
          </p>
        </div>

        {/* Big Buttons Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-10 sm:mb-14">
          
          {/* 1. KakaoTalk Big Button */}
          <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-[#FEE500]/40 via-neutral-800 to-neutral-900 hover:from-[#FEE500] hover:to-[#FEE500]/40 transition-all duration-300 shadow-2xl">
            <div className="bg-[#121212] rounded-[22px] p-6 sm:p-8 flex flex-col justify-between h-full border border-neutral-800/80">
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#FEE500]/20 text-[#FEE500] border border-[#FEE500]/40">
                    <span className="w-2 h-2 rounded-full bg-[#FEE500] animate-ping" />
                    실시간 빠른 응답
                  </span>
                  <span className="text-neutral-400 text-xs font-medium">연중무휴 24시간</span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FEE500] flex items-center justify-center shrink-0 shadow-lg shadow-[#FEE500]/20">
                    <MessageCircle className="w-8 h-8 sm:w-9 sm:h-9 text-slate-950 fill-slate-950" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#FEE500] transition-colors tracking-tight">
                      카카오톡 상담
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-neutral-400">공식 아이디</span>
                      <span className="text-sm sm:text-base font-black text-[#FEE500] tracking-wider">
                        {kakaoId}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  카카오톡 1:1 오픈채팅으로 호텔 프리룸 잔여 객실 확인 및 사전 예약 상담을 즉시 도와드립니다.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <a
                  href={kakaoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-[#FEE500] hover:bg-[#ffea2e] text-slate-950 font-black text-base sm:text-lg flex items-center justify-center gap-2.5 shadow-lg shadow-[#FEE500]/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950" />
                  <span>카카오톡 1:1 상담 바로가기</span>
                  <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                </a>

                <button
                  type="button"
                  onClick={(e) => handleCopy(kakaoId, 'kakao', e)}
                  className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-bold flex items-center justify-center gap-2 border border-neutral-700/80 transition-colors cursor-pointer"
                >
                  {copiedId === 'kakao' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-extrabold">카카오톡 ID '{kakaoId}' 복사 완료!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>카카오톡 ID '{kakaoId}' 복사하기</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

          {/* 2. Telegram Big Button */}
          <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-[#0274b3]/50 via-neutral-800 to-neutral-900 hover:from-[#0274b3] hover:to-[#0274b3]/40 transition-all duration-300 shadow-2xl">
            <div className="bg-[#121212] rounded-[22px] p-6 sm:p-8 flex flex-col justify-between h-full border border-neutral-800/80">
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#0274b3]/20 text-[#38bdf8] border border-[#0274b3]/40">
                    <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping" />
                    100% 보안 & 비공개
                  </span>
                  <span className="text-neutral-400 text-xs font-medium">실시간 전담 배정</span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#0274b3] to-[#015180] flex items-center justify-center shrink-0 shadow-lg shadow-[#0274b3]/30">
                    <Send className="w-7 h-7 sm:w-8 sm:h-8 text-white -translate-x-0.5 translate-y-0.5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#38bdf8] transition-colors tracking-tight">
                      텔레그램 상담
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-neutral-400">공식 아이디</span>
                      <span className="text-sm sm:text-base font-black text-[#38bdf8] tracking-wider">
                        {telegramId}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  철저한 보안과 비밀 보장이 요구되는 VIP 전용 맞춤 혜택 및 일정 의전을 1:1로 조율해 드립니다.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#0274b3] to-[#028cd8] hover:from-[#028cd8] hover:to-[#02a0f8] text-white font-black text-base sm:text-lg flex items-center justify-center gap-2.5 shadow-lg shadow-[#0274b3]/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <Send className="w-5 h-5 text-white" />
                  <span>텔레그램 1:1 상담 바로가기</span>
                  <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                </a>

                <button
                  type="button"
                  onClick={(e) => handleCopy(telegramId, 'telegram', e)}
                  className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-bold flex items-center justify-center gap-2 border border-neutral-700/80 transition-colors cursor-pointer"
                >
                  {copiedId === 'telegram' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-extrabold">텔레그램 ID '{telegramId}' 복사 완료!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>텔레그램 ID '{telegramId}' 복사하기</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Pillars of VIP Service & Trust Guarantees */}
        <div className="bg-neutral-950 rounded-2xl sm:rounded-3xl border border-neutral-800/90 p-5 sm:p-8 max-w-4xl mx-auto shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-800/80">
            
            <div className="pt-2 md:pt-0 flex flex-col items-center space-y-1.5 px-2">
              <div className="w-10 h-10 rounded-xl bg-[#E5B54F]/10 border border-[#E5B54F]/20 flex items-center justify-center mb-1">
                <Hotel className="w-5 h-5 text-[#E5B54F]" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white">5성급 호텔 프리룸</h4>
              <p className="text-[11px] text-neutral-400 leading-tight">오카다/솔레어/COD 스위트룸 지원</p>
            </div>

            <div className="pt-2 md:pt-0 flex flex-col items-center space-y-1.5 px-2">
              <div className="w-10 h-10 rounded-xl bg-[#E5B54F]/10 border border-[#E5B54F]/20 flex items-center justify-center mb-1">
                <Car className="w-5 h-5 text-[#E5B54F]" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white">공항 전용 의전 세단</h4>
              <p className="text-[11px] text-neutral-400 leading-tight">알파드 리무진 단독 픽업/샌딩</p>
            </div>

            <div className="pt-2 md:pt-0 flex flex-col items-center space-y-1.5 px-2">
              <div className="w-10 h-10 rounded-xl bg-[#E5B54F]/10 border border-[#E5B54F]/20 flex items-center justify-center mb-1">
                <Clock className="w-5 h-5 text-[#E5B54F]" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white">24시간 한국인 케어</h4>
              <p className="text-[11px] text-neutral-400 leading-tight">현지 상주 1:1 전담 매니저 배정</p>
            </div>

            <div className="pt-2 md:pt-0 flex flex-col items-center space-y-1.5 px-2">
              <div className="w-10 h-10 rounded-xl bg-[#E5B54F]/10 border border-[#E5B54F]/20 flex items-center justify-center mb-1">
                <ShieldCheck className="w-5 h-5 text-[#E5B54F]" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white">100% 안전 보장</h4>
              <p className="text-[11px] text-neutral-400 leading-tight">PAGCOR/GAB 정부 공인 13년</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
