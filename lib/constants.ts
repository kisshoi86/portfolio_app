export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
] as const;

export const profile = {
  name: "홍길동",
  role: "웹기획자 · UX 전략",
  summary: "플랫폼/커머스 20+년, 데이터 기반 UX 개선과 전환율 최적화.",
  email: "me@domain.com",
  social: {
    linkedin: "https://linkedin.com/in/example",
    github: "https://github.com/example",
  },
} as const;

export const projects = [
  {
    id: "proj-001",
    title: "B2C 커머스 UX 리뉴얼",
    year: 2025,
    role: ["UX 기획", "리서치"],
    tags: ["ecommerce", "ux", "web"],
    problem: "장바구니 이탈률↑",
    approach: "퍼널 분석 기반 단계 축소, 신뢰요소 강화",
    outcome: { cvR: "+18%", dropOff: "-22%" },
    links: { live: "https://example.com", case: "/cases/001" },
  },
  {
    id: "proj-002",
    title: "모바일 앱 온보딩 개선",
    year: 2024,
    role: ["UX 디자인", "프로토타이핑"],
    tags: ["mobile", "ux", "app"],
    problem: "신규 사용자 이탈률 높음",
    approach: "단계별 가이드 최적화, 개인화 경험 제공",
    outcome: { retention: "+25%", completion: "+30%" },
    links: { live: "https://example.com", case: "/cases/002" },
  },
  {
    id: "proj-003",
    title: "대시보드 리디자인",
    year: 2024,
    role: ["UI/UX 디자인", "프론트엔드"],
    tags: ["web", "dashboard", "ui"],
    problem: "정보 밀도 과다, 사용성 저하",
    approach: "카드 기반 레이아웃, 필터링 강화",
    outcome: { efficiency: "+35%", satisfaction: "+20%" },
    links: { live: "https://example.com", case: "/cases/003" },
  },
] as const;

export const skills = [
  {
    category: "기획",
    items: [
      { name: "UX 전략", level: "전문", desc: "퍼널/리텐션 중심" },
      { name: "데이터 분석", level: "숙련", desc: "GA, Mixpanel 활용" },
    ],
  },
  {
    category: "UX/UI",
    items: [
      { name: "프로토타이핑", level: "숙련", tools: ["Figma", "Axure"] },
      { name: "사용자 리서치", level: "숙련", desc: "인터뷰, 설문" },
    ],
  },
  {
    category: "프론트엔드",
    items: [
      { name: "React/Next.js", level: "실무", desc: "컴포넌트 개발" },
      { name: "TypeScript", level: "실무", desc: "타입 안정성" },
    ],
  },
  {
    category: "툴",
    items: [
      { name: "Figma", level: "숙련" },
      { name: "Notion", level: "숙련" },
    ],
  },
] as const;

export const timeline = [
  {
    year: "2024",
    title: "시니어 UX 기획자",
    company: "테크 스타트업",
    description: "플랫폼 전반 UX 개선, 전환율 최적화 프로젝트 리드",
  },
  {
    year: "2022",
    title: "UX 기획자",
    company: "이커머스 기업",
    description: "모바일 앱 리뉴얼, 사용자 여정 개선",
  },
  {
    year: "2020",
    title: "프로덕트 기획자",
    company: "IT 기업",
    description: "신규 서비스 런칭, MVP 기획 및 검증",
  },
] as const;




