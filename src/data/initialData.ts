import { SiteConfig, BannerSlide, CasinoItem, PhilippineTourSpot, ServiceStep, PostItem, FAQItem, InquiryLead } from '../types';

export const initialSiteConfig: SiteConfig = {
  siteName: '마닐라 오아시스에이전시',
  subTitle: 'OASIS OFFICIAL VIP AGENCY',
  pointColor: '#30308A',
  fontFamily: 'Pretendard',
  kakaoId: 'OASIS66',
  kakaoUrl: 'https://open.kakao.com/o/pNldnRKi',
  telegramId: 'OASIS46',
  telegramUrl: 'https://t.me/oasis066',
  phoneNumber: '+63 917 123 4567 (현지) / 070-8098-7788 (인터넷전화)',
  email: 'vip@oasis-agent.com',
  operatingHours: '24시간 365일 연중무휴 VIP 컨시어지 데스크 운영',
  seoTitle: '마닐라 오아시스에이전시 | 필리핀 마닐라 카지노 공식 VIP 에이전트',
  seoDescription: '마닐라 오아시스에이전시 - 필리핀 마닐라 & 클락 메이저 복합리조트 공식 VIP 에이전트. 오카다, 솔레어, 시티오브드림즈, 클락 한 5성급 호텔 프리룸, 전용 의전 세단, 24시간 한국인 1:1 컨시어지 케어',
  seoKeywords: '마닐라 오아시스에이전시, 오아시스 에이전시, 필리핀 카지노, 마닐라 카지노, 클락 카지노, 오카다 마닐라, 솔레어 리조트, COD 카지노, 한 카지노, VIP 에이전시, 호텔 프리룸, 공항 의전, 필리핀 골프투어, 마닐라 여행 가이드',
  bannerTitle: '신뢰와 품격의 최고봉, 필리핀 No.1 공식 VIP 에이전트',
  bannerSubtitle: '마닐라 & 클락 메이저 복합리조트 VIP 혜택과 24시간 프라이빗 1:1 전담 의전 서비스를 경험하십시오.',
  bannerBadge: 'OFFICIAL CERTIFIED VIP AGENCY',
  companyAddress: 'OASIS TOWER 18F, Entertainment City, Parañaque, Metro Manila, Philippines',
  representative: '강태진 대표 디렉터',
  licenseNumber: 'PAGCOR Certified Official Agency No. 2018-0914-MNL',
  adminPassword: 'oasis1234!',

  // About Oasis Section Config
  aboutBadge: 'ABOUT OASIS VIP AGENCY',
  aboutTitle: 'PAGCOR · GAB · PCSO 필리핀 정부 3대 기관 공식 승인\n13년 무사고 현지 직영 VIP 공식 에이전시',
  aboutSubtitle: '오아시스는 2011년 설립 이래 13년간 마닐라와 클락 현지에 직영 지사와 상주 전문팀을 두고, 법적 리스크 없는 100% 안전한 여정과 최고급 5성급 리조트 VIP 멤버십 케어를 제공합니다. 단순한 중개 업체를 넘어 고객님의 품격 있는 모든 순간을 완벽히 책임집니다.',
  aboutStoryHeading: '“13년의 현지 운영 노하우, 타협 없는 신뢰와 원칙으로 완성합니다”',
  aboutStoryParagraph1: '오아시스 공식 에이전트는 2011년 설립 이래 13년간 필리핀 현지에서 직접 상주하며 단 한 건의 금전 사고나 안전 사고 없는 무결점 VIP 운영을 고수해 왔습니다. 필리핀 정부 게이밍 규제기관(PAGCOR), 필리핀 경기감독위원회(GAB), 필리핀 자선복권공사(PCSO)와의 공식 파트너십을 통해 법적 리스크 없는 100% 안전하고 합법적인 여정을 약속합니다.',
  aboutStoryParagraph2: '단순한 게임 테이블 안내를 넘어 마닐라(오카다, 솔레어, 시티오브드림즈, 뉴포트) 및 클락(한 카지노, 디하이츠, 로이스) 현지 법인 인프라를 바탕으로, 공항 VIP 패스트트랙 입국부터 최고급 의전 세단, 5성급 스위트룸 무료 바우처, 전담 한국인 베테랑 실장의 24시간 현지 밀착 케어까지 원스톱으로 책임집니다.',
  aboutStoryHighlight: '■ 오아시스 4대 핵심 보증: ① PAGCOR·GAB·PCSO 정부 공인 정식 라이센스 | ② 13년 무사고 전산 정산 | ③ 출국 즉시 고객 정보 영구 파기 | ④ 24시간 한국인 1:1 베테랑 실장 상주',
  aboutImageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fm=webp&fit=crop&w=600&q=75&ext=.webp',
  aboutLicenseTitle: '필리핀 정부기관 공식 승인 에이전시',
  aboutLicenseSub: 'PAGCOR · GAB · PCSO Official Registered Agency',
  aboutYearsExperience: '13년 현지 직영',
  aboutStat1Num: '13+',
  aboutStat1Label: '년 현지 직영 VIP 운영',
  aboutStat2Num: '100%',
  aboutStat2Label: '정부 3대 기관 공인',
  aboutStat3Num: '20,000+',
  aboutStat3Label: '누적 VIP 고객 케어',
  aboutStat4Num: '24 / 7',
  aboutStat4Label: '한국인 실장 현지 상주',

  // Casino Section Config
  casinoBadge: 'MAJOR CASINO & VIP RESORTS',
  casinoTitle: '필리핀 메이저 카지노 제휴 라인업',
  casinoSubtitle: '오아시스가 엄선한 마닐라 & 클락 최고급 5성급 복합 리조트 카지노를 소개합니다.',

  // Tour Service Section Config
  philippinesBadge: 'OASIS VIP TOUR SERVICE',
  philippinesTitle: '오아시스 투어서비스',
  philippinesSubtitle: '최고급 호텔 프리룸부터 전용 의전 세단, 명문 골프 및 24시간 프라이빗 케어까지,\n오아시스 VIP 회원님만을 위한 특별한 맞춤 투어 서비스를 제공합니다.',

  // Reservation & Consultation (Former Promotion) Section Config
  promotionBadge: '24/7 PRIVATE VIP RESERVATION',
  promotionTitle: '24시간 1:1 VIP 실시간 상담 및 예약',
  promotionSubtitle: '마닐라 & 클락 최고급 5성급 호텔 프리룸 바우처, 공항 VIP 단독 의전, 롤링 1.5% 우대 혜택을 24시간 실시간 전담 매니저가 비공개로 즉시 안내해 드립니다.',

  // Community Section Config
  communityTitle: '오아시스 VIP 커뮤니티',
  communitySubtitle: '마닐라 & 클락 VIP 호텔, 골프, 파인다이닝 여행 정보 및 현지 생생한 소식을 확인하세요.',

  // Process and Nav Menu Config
  navMenu1: '오아시스',
  navMenu2: '투어지역',
  navMenu3: '투어서비스',
  navMenu4: '상담예약',
  navMenu5: '커뮤니티',
  navMenu6: '이용방법',
  headerLogo: '/images/user_header_logo.webp',
};

export const initialBannerSlides: BannerSlide[] = [
  {
    id: 'slide-1',
    title: '필리핀 카지노 공식 VIP 에이전트',
    subtitle: '오카다 · 솔레어 · COD · 클락 한 카지노 공식파트너 \n차원이 다른 프리미엄 혜택과 투명한 정산 보증',
    badge: 'PAGCOR OFFICIAL CERTIFIED VIP AGENCY',
    bgImage: '/images/hero_bg.webp',
  },
  {
    id: 'slide-2',
    title: '24시간 퍼스트클래스 전담 케어',
    subtitle: '공항 VIP 패스트트랙 입국, 최고급 전용 리무진 픽업, 5성급 호텔 전액 지원',
    badge: '24/7 DEDICATED PRIVATE CONCIERGE',
    bgImage: '/images/casino_table.webp',
  },
];

export const initialCasinos: CasinoItem[] = [
  {
    id: 'okada-manila',
    name: '오카다 마닐라',
    englishName: 'Okada Manila Resort & Casino',
    region: 'manila',
    regionLabel: '마닐라 엔터테인먼트 시티',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fm=webp&fit=crop&w=600&q=75&ext=.webp',
    description: '아시아 최대 규모의 복합 엔터테인먼트 리조트로, 환상적인 분수 쇼와 럭셔리 스위트 객실, 최고급 VIP 전용 프라이빗 살롱을 보유하고 있습니다.',
    features: ['세계 최대 규모 멀티컬러 분수 쇼', '993개 전 객실 특급 스위트 구성', '프라이빗 VIP 전용 럭셔리 살롱 보유', '미슐랭 스타 다이닝 및 실내 비치클럽 코브(Cove)'],
    tableGames: 'VIP 전용 프리미엄 테이블 및 룰렛 (500+ 테이블)',
    vipRooms: '최고급 프라이빗 VIP 전담 살롱 (1:1 전담 배정 가능)',
    hotelRating: '5성급 럭셔리 호텔 (Forbes 5-Star)',
    highlights: 'VIP 회원 전용 스위트룸 무료 업그레이드 및 멤버십 리워드 혜택',
    isFeatured: true,
    order: 1,
  },
  {
    id: 'city-of-dreams',
    name: '시티 오브 드림즈 마닐라 (COD)',
    englishName: 'City of Dreams Manila',
    region: 'manila',
    regionLabel: '마닐라 엔터테인먼트 시티',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fm=webp&fit=crop&w=600&q=75&ext=.webp',
    description: '노부 호텔, 하얏트, 누와 호텔 3개의 세계적 5성급 호텔이 결합된 초대형 랜드마크로 모던하고 트렌디한 VIP 카지노 환경을 제공합니다.',
    features: ['3대 럭셔리 호텔 브랜드 집약', '드림플레이 테마파크 & 고급 라운지', '최첨단 전자 게이밍 및 프리미엄 라이브 테이블', '황금빛 돔 구조의 상징적 건축미'],
    tableGames: 'VIP 라이브 프리미엄 테이블, 룰렛 등 (300+ 테이블)',
    vipRooms: '누와 클럽 & Signature VIP 라운지',
    hotelRating: '5성급 (Nüwa, Nobu, Hyatt Regency)',
    highlights: '오아시스 고객 전담 캐셔 패스트트랙 및 식음료 무제한 바우처',
    isFeatured: false,
    order: 2,
  },
  {
    id: 'solaire-resort',
    name: '솔레어 리조트 & 카지노',
    englishName: 'Solaire Resort & Casino Manila',
    region: 'manila',
    regionLabel: '마닐라 엔터테인먼트 시티',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fm=webp&fit=crop&w=600&q=75&ext=.webp',
    description: '마닐라 베이의 아름다운 일몰을 조망하는 필리핀 최초의 통합 럭셔리 리조트로, 최상의 보안과 격조 높은 VIP 서비스를 자랑합니다.',
    features: ['마닐라 베이 오션뷰 파노라마 전경', '포브스 8년 연속 5성급 획득', '명품 부티크 거리(루이비통, 구찌 등) 입점', '세계 최고 권위의 셰프 레스토랑'],
    tableGames: '프리미엄 테이블 게임 라운지 (400+ 테이블)',
    vipRooms: '솔레어 클럽 전용 VIP 전용 살롱 및 단독 프라이빗 룸',
    hotelRating: '5성급 특급 호텔 (Forbes 5-Star Travel Guide)',
    highlights: '공항 10분 거리 전용 픽업 의전 및 맞춤형 VIP 다이닝 크레딧 제공',
    isFeatured: true,
    order: 3,
  },
  {
    id: 'newport-world-resorts',
    name: '뉴포트 월드 리조트',
    englishName: 'Newport World Resorts (구 리조트 월드 마닐라)',
    region: 'manila',
    regionLabel: '마닐라 공항 제3터미널 맞은편',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fm=webp&fit=crop&w=600&q=75&ext=.webp',
    description: '마닐라 국제공항 바로 앞에 위치하여 뛰어난 접근성을 자랑하며, 메리어트, 쉐라톤, 힐튼 등 글로벌 체인 호텔과 연결된 전통의 명문 카지노입니다.',
    features: ['마닐라 공항 3터미널 도보 브릿지 연결(Runway Manila)', '글로벌 특급 호텔 5개 결합 단지', '대형 쇼핑몰 및 뮤지컬 극장 보유', '24시간 활기찬 엔터테인먼트 시설'],
    tableGames: 'VIP 전용 테이블 게임 및 룰렛 라운지',
    vipRooms: '맥심 VIP 클럽 & 겐팅 클럽',
    hotelRating: '5성급 복합 (Marriott, Sheraton, Hilton, Okura)',
    highlights: '단기 체류 고객을 위한 초고속 공항 픽업/샌딩 최적화',
    isFeatured: false,
    order: 4,
  },
  {
    id: 'hann-casino-clark',
    name: '한 카지노 리조트 클락',
    englishName: 'Hann Casino Resort Clark',
    region: 'clark',
    regionLabel: '클락 경제자유구역 (Clark Freeport Zone)',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fm=webp&fit=crop&w=600&q=75&ext=.webp',
    description: '클락 최고의 최신식 5성급 복합 리조트로, 메리어트 호텔 & 스위소텔과 직결되어 쾌적하고 안전한 최고급 게이밍 환경을 제공합니다.',
    features: ['클락 최대 규모 최신식 5성급 시설', '스위소텔 & 클락 메리어트 호텔 직통 연결', '주변 명문 골프장 10분 이내 위치', '최고 수준의 치안 및 프라이버시 보장'],
    tableGames: '최신 전자 테이블 & VIP 전용 프리미엄 테이블',
    vipRooms: 'Hann VIP 전용 살롱 (한국인 전담 매니저 상주)',
    hotelRating: '5성급 럭셔리 (Swissôtel / Marriott)',
    highlights: '클락 골프투어 패키지 연계 및 스위트룸 무료 숙박 지원',
    isFeatured: true,
    order: 5,
  },
  {
    id: 'dheights-clark',
    name: '디하이츠 리조트 & 카지노',
    englishName: "D'Heights Resort and Casino Clark",
    region: 'clark',
    regionLabel: '클락 몬테레이 힐스',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fm=webp&fit=crop&w=600&q=75&ext=.webp',
    description: '클락의 수려한 자연경관 속에 위치한 프리미엄 리조트로, 썬밸리 골프장과 인접하여 여유로운 힐링과 고품격 게이밍을 동시에 만끽할 수 있습니다.',
    features: ['자연 친화적 힐튼 호텔 직결', '36홀 클락 썬밸리 CC 바로 인접', '조용하고 프라이빗한 VIP 전용 살롱 환경', '가족 및 비즈니스 동반 최적화 리조트'],
    tableGames: 'VIP 테이블 게임 및 전자 게임 라운지',
    vipRooms: '프라이빗 VIP 살롱 룸 완비',
    hotelRating: '5성급 힐튼 리조트 (Hilton Clark Sun Valley)',
    highlights: '골프 라운딩 + VIP 의전 결합 올인원 서비스',
    isFeatured: false,
    order: 6,
  },
];

export const initialPhilippineSpots: PhilippineTourSpot[] = [
  {
    id: 'spot-1',
    category: 'hotel',
    title: '마닐라 베이 5성급 럭셔리 스위트 호텔',
    subtitle: '오카다 / 솔레어 / 그랜드 하얏트 BGC',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fm=webp&fit=crop&w=600&q=75&ext=.webp',
    description: '오아시스 VIP 고객님께는 최고급 오션뷰 및 스위트 객실 무료 지원 또는 특별 프로모션 요율을 적용해 드립니다.',
    tags: ['5성급 호텔', '스위트룸 무료지원', '오션뷰', '24시간 룸서비스'],
    location: 'Metro Manila',
  },
  {
    id: 'spot-2',
    category: 'golf',
    title: '마닐라 & 클락 명문 프라이빗 골프 투어',
    subtitle: '미모사 골프클럽 / 클락 썬밸리 CC / FA코리아 CC',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fm=webp&fit=crop&w=600&q=75&ext=.webp',
    description: '필리핀 최고의 잔디 컨디션을 자랑하는 PGA급 코스에서 1:1 캐디 및 전용 카트, 패스트 부킹 혜택을 제공합니다.',
    tags: ['명문 골프장', 'PGA 36홀', 'VIP 티오프 우선예약', '클럽하우스 의전'],
    location: 'Clark / Angeles',
  },
  {
    id: 'spot-3',
    category: 'dining',
    title: 'BGC & 카지노 리조트 최고급 파인다이닝',
    subtitle: '미슐랭 스타 일식, 최고급 한우/와규 스테이크 & 와인 바',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fm=webp&fit=crop&w=600&q=75&ext=.webp',
    description: '필리핀 최고의 부촌 BGC(보니파시오)와 호텔 리조트 내 프리미엄 레스토랑 사전 예약 및 VIP 할인 서비스를 지원합니다.',
    tags: ['파인다이닝', '미슐랭 셰프', '프라이빗 룸', 'VIP 바우처'],
    location: 'Bonifacio Global City',
  },
  {
    id: 'spot-4',
    category: 'travel_info',
    title: '필리핀 입국 규정 및 안심 VIP 의전 가이드',
    subtitle: 'e-Travel 사전 등록 대행, 여권 6개월 이상, 무비자 30일 체류',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fm=webp&fit=crop&w=600&q=75&ext=.webp',
    description: '복잡한 입국 절차 없이 공항 내 VIP 패스트트랙 통과부터 최고급 의전 세단으로 호텔까지 안전하고 신속하게 모십니다.',
    tags: ['공항 패스트트랙', 'eTravel 지원', '안전보안', '전용 리무진'],
    location: 'NAIA Manila & Clark Airport',
  },
];

export const initialServiceSteps: ServiceStep[] = [
  {
    stepNumber: '01',
    title: '1:1 맞춤 사전 상담',
    engTitle: 'Private Consultation',
    description: '24시간 카카오톡 / 텔레그램을 통해 고객님의 방문 일정, 선호 호텔, 게임 성향 및 동행 인원을 파악하여 맞춤 일정을 설계합니다.',
    details: ['24시간 실시간 한국인 전담 실장 상담', '목적지 맞춤 리조트 & 카지노 추천', '예산 및 롤링 조건별 VIP 혜택 안내'],
    iconName: 'MessageSquare',
  },
  {
    stepNumber: '02',
    title: '항공 및 호텔 예약 대행',
    engTitle: 'Flight&Suite Booking',
    description: '최적의 항공 스케줄 안내와 함께 5성급 특급 호텔(오카다, 솔레어, 메리어트 등) 스위트 객실 무료 바우처를 신속하게 발권합니다.',
    details: ['특급 호텔 스위트룸/오션뷰 우선 배정', '얼리 체크인 & 레이트 체크아웃 지원', '항공권 예약 및 일정 변동 즉시 대응'],
    iconName: 'Building2',
  },
  {
    stepNumber: '03',
    title: '패스트트랙 & 의전 픽업',
    engTitle: 'Fast-Track & Pickup',
    description: '마닐라/클락 공항 도착 즉시 줄 서지 않는 VIP 패스트트랙 통과와 함께 최고급 전용 세단/밴으로 목적지까지 편안하게 모십니다.',
    details: ['공항 입국장 패스트트랙 에스코트', '최고급 알파드/스타리아 리무진 단독 배차', '무료 생수 및 음료, 와이파이 제공'],
    iconName: 'Car',
  },
  {
    stepNumber: '04',
    title: '24시간 전담 VIP 케어',
    engTitle: ' Dedicated Concierge ',
    description: '필리핀 현지 베테랑 한국인 전담 실장이 24시간 밀착 상주하여 쾌적한 룸 배정, 식음료 지원, 골프 및 통역 서비스를 완벽 지원합니다.',
    details: ['정켓 롤링 및 칩 교환 즉시 지원', '1:1 프라이빗 게임 룸 & 테이블 예약', '골프장 부킹 및 파인다이닝 예약 동행'],
    iconName: 'ShieldCheck',
  },
  {
    stepNumber: '05',
    title: '투명 정산 및 안전한 출국 ',
    engTitle: 'Settlement,Departure',
    description: '모든 일정 종료 후 단 1원의 오차 없는 실시간 투명 정산과 함께 공항 VIP 샌딩까지 안전하고 완벽하게 마무리해 드립니다.',
    details: ['원화/페소/달러 실시간 투명 정산', '철저한 개인정보 즉시 파기 및 보안 유지', '공항 출국장 VIP 의전 샌딩 서비스'],
    iconName: 'CheckCircle2',
  },
];

export const initialPosts: PostItem[] = [
  {
    id: 'post-7',
    category: '프로모션',
    title: '2026 뉴포트 월드 & 마닐라 COD 카지노 롤링 1.5% 및 항공권 바우처 특별 프로모션',
    author: '오아시스 마케팅팀',
    date: '2026-07-15',
    viewCount: 920,
    isPinned: false,
    summary: '뉴포트 월드 리조트(구 리조트월드 마닐라) 및 시티오브드림(COD) 하이리밋 살롱 회원 전용 롤링 혜택 및 왕복 비즈니스 항공권 페이백 안내.',
    content: `[크기:대][굵게]2026 하반기 뉴포트 월드 & COD 프리미엄 프로모션[/굵게][/크기]

오아시스 VIP 에이전시에서 마닐라 공항 인근 최상의 인프라를 자랑하는 **뉴포트 월드 리조트(Newport World Resorts)** 및 **시티 오브 드림(City of Dreams Manila)** 특별 프로모션을 진행합니다.

[크기:중][굵게]■ 프로모션 주요 혜택[/굵게][/크기]
- 롤링 커미션 최대 1.5% 즉시 지급 (게임 종료 즉시 정산)
- 왕복 비즈니스 항공권 바우처 100% 실비 지원
- 뉴포트 메리어트 / 힐튼 / 오쿠라 / 쉐라톤 최상급 호텔 무료 숙박 바우처
- 공항 NAIA 터미널3 육교 연결 초근접 이동 의전 지원

> "출입국이 가장 편리한 뉴포트 월드에서 오아시스만의 프라이빗한 케어를 경험해 보세요."

[지도:뉴포트 월드 리조트 마닐라]

자세한 참가 기준 및 롤링 조건은 24시간 오아시스 공식 메신저로 문의해 주시기 바랍니다.`,
    thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fm=webp&fit=crop&w=600&q=75&ext=.webp',
    tags: ['뉴포트월드', 'COD', '프로모션', '롤링혜택', '마닐라호텔'],
  },
  {
    id: 'post-8',
    category: 'VIP매거진',
    title: '[VIP 투어] 클락 한 카지노 리조트(Hann) & 스위소텔 최상급 럭셔리 스테이 가이드',
    author: '오아시스 클락지사',
    date: '2026-07-02',
    viewCount: 840,
    isPinned: false,
    summary: '클락 경제자유구역 최고의 럭셔리 복합리조트 한(Hann) 카지노와 메리어트/스위소텔 5성급 스위트룸, 최고급 부대시설 완벽 가이드.',
    content: `[크기:대][굵게]클락의 새로운 랜드마크, 한 카지노 리조트(Hann Resort)[/굵게][/크기]

필리핀 클락(Clark)의 중심부에 위치한 **한 카지노 리조트(Hann Casino Resort)**는 세계적인 호텔 체인 메리어트(Marriott)와 스위소텔(Swissôtel)이 입점한 초대형 하이엔드 복합리조트입니다.

[크기:중][굵게]1. 최고급 VIP 게이밍 살롱[/굵게][/크기]
- 쾌적하고 넓은 실내 공간과 최신식 바카라, 블랙잭, 룰렛 테이블
- 프라이빗 하이리밋 전용 VIP 정켓 룸 완비
- 한국인 전담 매니저의 신속한 바이인 및 정산 시스템

[크기:중][굵게]2. 5성급 럭셔리 숙박 인프라[/굵게][/크기]
- 스위소텔 클락(Swissôtel Clark) 프리미엄 스위트룸 전경
- 알프스 스타일의 최고급 스파(Pürovel Spa & Sport) 및 인피니티 풀
- 15개 이상의 글로벌 고메 레스토랑 & 와인 바

[지도:한 카지노 리조트 클락]

오아시스 고객님께는 전 일정 무료 숙박 및 클락 공항 단독 리무진 픽업이 제공됩니다.`,
    thumbnail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fm=webp&fit=crop&w=600&q=75&ext=.webp',
    tags: ['클락한카지노', '스위소텔', '클락VIP', '럭셔리호텔'],
  },
];

export const initialFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    category: '이용 및 예약',
    question: '오아시스 공식 에이전트 서비스는 누구나 이용할 수 있나요?',
    answer: '네, 필리핀 마닐라 또는 클락 카지노 방문 및 5성급 호텔 숙박, VIP 골프 투어를 계획하시는 만 18세 이상 성인 고객이라면 누구나 이용 가능합니다. 24시간 카카오톡이나 텔레그램으로 일정과 성향을 말씀해 주시면 맞춤 플랜을 안내해 드립니다.',
  },
  {
    id: 'faq-2',
    category: '호텔 및 항공',
    question: '5성급 호텔(오카다, 솔레어, 한 등) 무료 숙박 혜택은 어떤 조건인가요?',
    answer: '고객님의 예상 이용 규모 및 멤버십 실적 기준에 따라 최상급 스위트룸 및 일반 5성급 객실이 전액 무료 지원(Complimentary) 또는 특별 회원 요율로 제공됩니다. 사전 상담을 통해 투명하게 기준을 사전 안내해 드립니다.',
  },
  {
    id: 'faq-3',
    category: '공항 및 의전',
    question: '공항 도착 시 픽업 및 패스트트랙은 어떻게 진행되나요?',
    answer: '마닐라(NAIA) 또는 클락(CRK) 공항 도착 전담 의전팀이 비행기 게이트 앞 또는 입국 심사대 앞에서 네임보드를 들고 대기합니다. 신속한 VIP 라인을 통해 입국 수속을 마친 후 대기 중인 최고급 단독 리무진(알파드/스타리아)으로 호텔까지 다이렉트 이동합니다.',
  },
  {
    id: 'faq-4',
    category: '보안 및 정산',
    question: '정산 과정과 개인정보 보안은 어떻게 유지되나요?',
    answer: '오아시스는 10년 무사고 원칙으로 운영되며, 게임 종료 즉시 고객님께서 원하시는 통화(원화, 페소, 달러 등)로 1원 단위까지 투명하게 실시간 정산해 드립니다. 고객님의 모든 개인정보와 방문 내역은 출국 즉시 영구 파기되어 100% 안심하실 수 있습니다.',
  },
  {
    id: 'faq-5',
    category: 'VIP 컨시어지',
    question: '현지 체류 시 VIP 전담 컨시어지 케어는 어떻게 진행되나요?',
    answer: '현지 전담 한국인 실장이 24시간 상주하여 계신 VIP 살롱 및 전용 라운지에서 모든 맞춤 편의 서비스를 대행해 드립니다. 불필요하게 대기하실 필요 없이 편안하게 품격 있는 휴식과 VIP 서비스에만 집중하실 수 있습니다.',
  },
];

export const initialInquiryLeads: InquiryLead[] = [
  {
    id: 'inq-1',
    name: '김*호 VIP',
    contactType: 'telegram',
    contactValue: '@kim_vip_77',
    targetRegion: '마닐라 (오카다/솔레어)',
    expectedDate: '2026-09-05 ~ 2026-09-08 (3박 4일)',
    message: '오카다 스위트룸 3박 예약 및 공항 알파드 픽업 신청합니다. 3인 동행 예정입니다.',
    createdAt: '2026-08-26 14:20',
    status: '상담완료',
  },
  {
    id: 'inq-2',
    name: '이*준 VIP',
    contactType: 'kakao',
    contactValue: 'kakao_lee789',
    targetRegion: '클락 (한 카지노 + 골프 36홀)',
    expectedDate: '2026-09-12 ~ 2026-09-15 (3박 4일)',
    message: '클락 메리어트 또는 스위소텔 숙박과 미모사/썬밸리 골프 2회 라운딩 패키지 견적 문의드립니다.',
    createdAt: '2026-08-26 11:05',
    status: '상담진행중',
  },
  {
    id: 'inq-3',
    name: '박*훈 VIP',
    contactType: 'phone',
    contactValue: '010-4821-****',
    targetRegion: '마닐라 (솔레어 VIP 정켓)',
    expectedDate: '2026-09-01 ~ 2026-09-04',
    message: '솔레어 하이리밋 살롱 프라이빗 룸 이용 롤링 조건 및 항공권 바우처 지원 상담 원합니다.',
    createdAt: '2026-08-26 09:30',
    status: '접수대기',
  },
];
