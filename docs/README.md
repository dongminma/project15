# NOMADIC — Web Platform

건축가 마동민(Dongmin Ma)의 건축적 상상력, 시네마틱 실험, AI 비주얼 스토리텔링을 아카이빙하는 **개인 연구소 겸 가상 세계관 플랫폼**입니다. 본 저장소는 기획 문서와 풍부한 비디오/이미지 에셋을 기반으로 Next.js 15+ 환경에서 개발된 반응형 웹사이트입니다.

---

## 🚀 프로젝트 시작하기

### 개발 서버 실행
```bash
npm run dev
# 또는
npm run dev -- --turbo
```
브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 개발 버전을 확인하실 수 있습니다.

### 정적 빌드 및 배포 검증
```bash
npm run build
```

---

## 🛠 기술 스택 및 구조

- **프레임워크**: Next.js 15 (App Router)
- **언어**: TypeScript
- **스타일링**: Vanilla CSS (CSS Modules) 및 글로벌 스타일 시스템
- **애니메이션**: Framer Motion (`motion/react`)
- **타이포그래피**: Inter 폰트
- **아이콘**: Lucide React

---

## 📂 프로젝트 구조

- [`src/app/`](file:///c:/Users/sungs/Desktop/PROJECT/project15/src/app): 각 서브 페이지 라우팅 및 메인 페이지 구성
  - [`page.tsx`](file:///c:/Users/sungs/Desktop/PROJECT/project15/src/app/page.tsx): HOME 페이지
  - [`projects/page.tsx`](file:///c:/Users/sungs/Desktop/PROJECT/project15/src/app/projects/page.tsx): PROJECTS 페이지
  - [`world/page.tsx`](file:///c:/Users/sungs/Desktop/PROJECT/project15/src/app/world/page.tsx): WORLD 페이지
  - [`journal/page.tsx`](file:///c:/Users/sungs/Desktop/PROJECT/project15/src/app/journal/page.tsx): JOURNAL 페이지
  - [`about/page.tsx`](file:///c:/Users/sungs/Desktop/PROJECT/project15/src/app/about/page.tsx): ABOUT 페이지
  - [`globals.css`](file:///c:/Users/sungs/Desktop/PROJECT/project15/src/app/globals.css): CSS 변수 및 디자인 토큰, 핵심 UI 유틸리티
- [`src/components/`](file:///c:/Users/sungs/Desktop/PROJECT/project15/src/components): 재사용 가능한 UI 컴포넌트
  - [`Navbar.tsx`](file:///c:/Users/sungs/Desktop/PROJECT/project15/src/components/Navbar.tsx): 스크롤 반응형 오버레이 네비게이션
  - [`Footer.tsx`](file:///c:/Users/sungs/Desktop/PROJECT/project15/src/components/Footer.tsx): 6열 컬럼형 다크 푸터
- [`docs/`](file:///c:/Users/sungs/Desktop/PROJECT/project15/docs): 기획 및 디자인 시스템 요구사항
- [`media/`](file:///c:/Users/sungs/Desktop/PROJECT/project15/media): 원본 대용량 비디오 및 이미지 에셋

---

## 📖 웹사이트 개발 과정 (Development Process)

본 웹사이트는 사용자의 요구사항과 에셋 분석을 토대로 단계별로 체계적으로 설계 및 구현되었습니다.

### **Phase 1: 기획 검토 및 Next.js 채택**
- **기획 문서 검토**: `docs/` 내의 가이드라인과 설계서를 분석하여 캔버스 배경 설정(`#000000`), 고스트 필 CTA 등의 시각 지침을 정리했습니다.
- **Next.js 사용 결정**: 다중 페이지 라우팅, 대용량 비디오 스트리밍을 위한 레이지 로딩(Lazy Loading), SEO 메타데이터 관리 등의 최적화 요구사항을 고려하여 Next.js 15+ 환경을 최종 채택하였습니다.
- **에셋 연동**: 프로젝트 내의 대용량 비디오 및 이미지 자원을 `public/media`를 통해 안전하게 참조할 수 있도록 매핑하였습니다.

### **Phase 2: 공통 디자인 시스템 구축**
- **디자인 토큰화**: [`globals.css`](file:///c:/Users/sungs/Desktop/PROJECT/project15/src/app/globals.css)에 색상, 폰트 비율(Display, Body), 반응형 브레이크포인트 등의 핵심 토큰을 Vanilla CSS 변수로 선언하여 일관성을 높였습니다.
- **기본 레이아웃 구성**: 스크롤 시 반투명해지는 오버레이형 `Navbar`와 외부 소셜 링크가 포함된 컬럼형 `Footer`를 결합하여 공통 레이아웃을 다졌습니다.

### **Phase 3: 메인 (HOME) 페이지 구현**
- **비주얼 섹션**: `hero.mp4` 비디오를 배경으로 하는 메인 히어로 섹션을 구축하고, `PLAY REEL` 버튼 클릭 시 비디오를 사운드와 함께 모달창으로 풀스크린 재생할 수 있도록 제작했습니다.
- **콘텐츠 흐름**: 한글과 영어 매니페스토를 배치한 인트로 섹션, 대표 3개 카드가 담긴 프로젝트 하이라이트 그리드, 세계관 카테고리 요약 섹션, 저널 리스트와 파운더 프로필을 좌우 50:50으로 배치한 그리드, 그리고 마지막으로 이메일 수집을 위한 구독 섹션까지 총 7개 영역을 자연스럽게 이어 붙였습니다.

### **Phase 4: 4대 서브 페이지 구축**
- **PROJECTS**: HERTZ SERIES, NOMADIC CITY 등 6가지 대표 건축 및 영상 프로젝트를 풀블리드 밴드 카드로 나열하였습니다.
- **WORLD**: 세계관을 관통하는 8가지 핵심 카테고리(Atlas, Districts, Citizens 등)를 설명과 함께 카드 그리드 구조로 보기 쉽게 구현했습니다.
- **JOURNAL**: 카테고리 필터 탭 기능을 통해 에세이, 프로세스 노트 등 다양한 종류의 저널 아티클을 손쉽게 필터링하여 읽을 수 있도록 만들었습니다.
- **ABOUT**: 파운더 마동민(Dongmin Ma)의 프로필과 더불어 12인의 가상 세계관 시민 프로필 카드를 Grid 레이아웃으로 상세히 구축했습니다.

### **Phase 5: 인터랙션 적용 및 프로덕션 검증**
- **애니메이션 효과**: Framer Motion을 활용하여 스크롤 시 화면에 컴포넌트가 나타날 때 미세하게 떠오르는(Fade-in & Up) 모션 효과와, 순차 등장(Stagger) 인터랙션을 부여하였습니다.
- **반응형 세부 튜닝**: 모바일 화면 크기(<600px)에서 네비게이션 바가 햄버거 메뉴로 자동 전환되도록 처리하고, 카드 컬럼 수가 자동 축소되도록 6가지 브레이크포인트를 꼼꼼하게 다듬었습니다.
- **최종 빌드**: `npm run build`를 통해 빌드가 완전 무결하게 완료되는 것을 최종 검증하였습니다.
