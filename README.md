개인 포트폴리오 원페이지(One-Page) 웹사이트 기능 명세서
1) 목적/컨셉

목적: 경력/레퍼런스/스킬을 신뢰감 있게 제시하고, 문의 전환(CTA) 유도

톤&무드: 모던·미니멀(화이트/다크 모드 지원), 전문적 타이포, 적당한 마이크로 인터랙션

KPI: 스크롤 완독률, CTA 클릭률(문의), 이탈률, 평균 체류시간

2) IA(Information Architecture) & 섹션 구성

헤더/고정 내비게이션

로고/이름(좌), 내비 링크(우): About, Work, Skills, Awards/Press, Contact

테마 토글(라이트/다크), 언어 토글(ko/en, 선택)

Hero(첫 화면)

핵심 Value Proposition 1–2줄 + 보조 설명

주요 CTA 버튼 2개: View Work / Contact

대표 이미지/짧은 루프 동영상(선택), 타이포 모션 0.6–0.9s

About

3–5줄 요약(역할, 강점, 도메인 전문성)

핵심 경력 타임라인(최근 5개 노드) + 다운로드용 이력서(PDF)

Work(대표 작업물)

카드 그리드(2–3열 반응형), 필터(분야/연도/역할)

카드 내용: 썸네일, 프로젝트명, 한줄 임팩트, 역할 태그

상세 모달(또는 별도 상세 슬라이드): 문제정의 → 접근 → 결과 지표(전/후, KPI) / 사용기술 / 링크

Skills

카테고리(기획/UX/프론트/툴)별 레벨 인디케이터(“실무/숙련/전문” 3단계)

뱃지/아이콘 리스트 + 2줄 설명(차별화 포인트)

Awards/Press(선택)

리스트: 수상/보도 제목, 매체/기관, 링크, 연도

Testimonials(선택)

캐러셀: 인용구, 작성자/직함, 프로젝트명

Contact

폼 필드: 이름, 이메일, 회사/조직(선택), 내용, 파일첨부(선택, 10MB↓, pdf/png/jpg)

발송 성공/실패 상태, 스팸 방지(hCaptcha 등), 소셜 링크 및 이메일 링크

푸터

저작권, SNS 아이콘, 미니 사이트맵, 개인정보 처리 안내 링크

3) 핵심 기능 요구사항
3.1 네비게이션/레이아웃

고정 헤더 + 클릭 시 부드러운 앵커 스크롤(500–700ms, 포커스 이동)

현재 섹션 스크롤스파이(활성 상태 표시)

반응형:

모바일 <640px, 타블렛 641–1024px, 데스크톱 >1024px

모바일 내비는 햄버거 → 오버레이 메뉴

3.2 다크/라이트 테마

시스템 기본 감지(prefers-color-scheme) + 사용자 토글(로컬 스토리지 저장)

명암 대비(AAA 텍스트 우선, 최소 AA 준수)

3.3 프로젝트 카드 & 상세

필터(멀티 선택) 즉시 반응, URL 쿼리 반영(?tag=ux&year=2024)

상세 모달: 이미지 슬라이드, 영상(무음 자동재생 옵션), 성과지표 숫자 애니메이션 카운트업

외부 링크(실서비스, 깃허브, 기사 등) 새창 + rel="noopener"

3.4 연락 폼

입력 검증(프론트+서버): 이메일 형식, 본문 최소 20자

스팸 방지: hCaptcha(or reCAPTCHA v3), 허니팟

제출 후 토스트 알림/상태 메시지, 실패 시 재시도 가이드

서버 수신 시 메일 전송 + DB/시트 저장(선택), 관리자 알림 웹훅(Slack 등, 선택)

3.5 접근성(A11y)

키보드 포커스 트랩(모달), 포커스 스타일 명확화

이미지에 대체 텍스트, 의미 있는 ARIA 라벨

모션 최소화 토글(prefers-reduced-motion 준수)

폼 오류는 텍스트로도 안내(색상만 의존 금지)

3.6 성능/최적화

LCP 요소: Hero 텍스트/대표이미지 우선 로드

이미지 <picture> + srcset(WebP/AVIF), 지연 로딩(lazy)

폰트: 서브셋, font-display: swap, 1–2종 내로 제한

번들 최적화(Code-splitting), 필수 외부 스크립트만 사용

3.7 SEO/공유(OG)

기본 메타(제목/설명), OG/Twitter 카드, 파비콘 세트

구조화 데이터(Organization/Person + Project에 CreativeWork, 선택)

Sitemap.xml, robots.txt

3.8 분석/관측

기본 이벤트: 섹션 가시성(=완독률), CTA 클릭, 카드 상세 보기, 폼 제출

도구: GA4 + Plausible(선택), 에러 로깅(Sentry 등)

4) 컴포넌트 목록(개발 단위)

HeaderNav(고정, 테마/언어 토글, 햄버거)

Hero(헤드라인, 보조문구, CTA, 백그라운드 모션)

SectionTitle(앵커 ID, 보조설명)

AboutSummary + Timeline

FilterBar(체크/토글/칩), WorkGrid, WorkCard, WorkModal

SkillBadges(레벨 인디케이터 포함)

AwardsList, PressList, TestimonialCarousel

ContactForm(검증/캡차/상태), SocialLinks

Footer

공통: Button, Tag, Chip, Icon, Toast, Modal, Tooltip

5) 데이터 스키마(예시)
{
  "profile": {
    "name": "홍길동",
    "role": "웹기획자 · UX 전략",
    "summary": "플랫폼/커머스 20+년, 데이터 기반 UX 개선과 전환율 최적화."
  },
  "projects": [
    {
      "id": "proj-001",
      "title": "B2C 커머스 UX 리뉴얼",
      "year": 2025,
      "role": ["UX 기획", "리서치"],
      "tags": ["ecommerce", "ux", "web"],
      "thumb": "/img/work/001.webp",
      "media": ["/img/work/001-1.webp", "/video/work/001.mp4"],
      "problem": "장바구니 이탈률↑",
      "approach": "퍼널 분석 기반 단계 축소, 신뢰요소 강화",
      "outcome": {"cvR": "+18%", "dropOff": "-22%"},
      "links": {"live": "https://...", "case": "/cases/001"}
    }
  ],
  "skills": [
    {"name": "UX 전략", "level": "전문", "desc": "퍼널/리텐션 중심"},
    {"name": "프로토타이핑", "level": "숙련", "tools": ["Figma", "Axure"]}
  ],
  "awards": [{"title": "웹어워드", "org": "KIPFA", "year": 2024, "url": "https://..."}],
  "press": [{"title": "인터뷰", "media": "ZDNet", "year": 2023, "url": "https://..."}],
  "contacts": {"email": "me@domain.com", "sns": {"linkedin": "..."}}
}

6) 비기능 요구사항

호환성: 최신 크롬/엣지/사파리/파폭, iOS/Android 주요 버전

보안: HTTPS, 보안 헤더, 폼 업로드 파일 유형/크기 서버 검증

접근성 기준: WCAG 2.2 AA 목표

성능 목표: Lighthouse Performance ≥ 90, LCP < 2.5s(3G Fast 기준)

7) 기술 스택 제안(예시)

프론트: Next.js(SSR/SSG), TypeScript, Tailwind CSS

UI: shadcn/ui, Framer Motion(경량 모션)

이미지: next/image + CDN

폼 처리: 서버 액션/Edge Function + 메일 전송(Resend 등)

i18n(선택): next-intl

배포: Vercel/Netlify, DNS & SSL

8) 상호작용/모션 가이드

스크롤 시 섹션 페이드-업(20–40px, 250–400ms, ease-out, reduced-motion 대응)

버튼/카드 호버: 그림자↑, 살짝 스케일(1.02)

숫자 카운트업: 600–1200ms, 뷰포트 진입 시 1회 트리거

9) 콘텐츠 가이드(요청 산출물)

Hero 카피: 40–60자, 보조문구 90–140자

프로젝트: 6–12개, 각 케이스 250–400자(문제/접근/성과)

스킬: 8–16개, 카테고리화

추천사: 2–5개, 120–200자

10) 품질 기준(AC: Acceptance Criteria)

내비/앵커: 모든 메뉴 클릭 시 해당 섹션 1s 이내 포커스, URL 해시 갱신

필터: 다중 선택 시 200ms 이내 결과 반영, 0건일 경우 ‘일치 항목 없음’ 안내

이미지: 100% CLS 0, LCP 이미지 사전 로드

접근성: 키보드만으로 모든 기능 수행 가능, 모달 Esc/바깥클릭 닫힘, 포커스 트랩

폼: 유효성 실패 시 필드별 에러 문구 노출, 성공 시 확인 메시지 + 메일 수신

SEO: 페이지 소스에 OG 태그, 사이트맵 접근 가능

다크모드: 새로고침 후 사용자 선택 상태 유지

11) 테스트 시나리오(핵심)

단말/브라우저 매트릭스별 렌더링/레이아웃 깨짐 여부

키보드 탭 순서/포커스 가시성/리더기 대체텍스트 확인

느린 네트워크(Throttle)에서 LCP/CLS/폼 제출 동작

프로젝트 필터 조합/URL 공유 시 동일 상태 복원

캡차 실패/서버 에러(5xx)/타임아웃 처리 메시지

12) 운영/배포

GitHub Actions CI: 린트/타입체크/빌드, Lighthouse CI 리포트

환경변수 분리(메일 API 키, 캡차 키)

로그/알림: 에러(Sentry), 폼 제출 Slack 웹훅(선택)

정기 점검: 분기별 프로젝트/성과 갱신, 링크 체커

13) 페이지 사양 요약(개발 전달 체크리스트)

 반응형 3단 브레이크포인트 / 12컬럼 그리드

 다크/라이트 테마 토글 + 시스템 연동

 앵커 스크롤 + 스크롤스파이

 Work 카드 그리드 + 필터 + 모달 상세

 Contact 폼(검증/캡차/메일연동)

 접근성 AA, 모달 포커스 트랩

 이미지 최적화(WebP/AVIF, lazy)

 SEO & OG & 구조화데이터

 분석 이벤트(CTA/완독/폼)

 배포/모니터링 파이프라인