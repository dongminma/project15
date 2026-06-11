# NOMADIC 웹사이트 구현 계획

NOMADIC — 건축가 마동민(Dongmin Ma)의 건축적 상상력, 시네마틱 실험, AI 비주얼 스토리텔링을 아카이빙하는 **개인 연구소 겸 가상 세계관 플랫폼** 웹사이트를 구축합니다.

---

## Next.js 사용 판단

> [!IMPORTANT]
> **결론: Next.js 사용을 적극 권장합니다.**

| 고려 요소 | 판단 근거 |
|---|---|
| **다중 페이지 라우팅** | HOME, PROJECTS, WORLD, JOURNAL, ABOUT 5개 주요 페이지 + 하위 상세 페이지들이 필요 → App Router가 적합 |
| **대용량 미디어 최적화** | `hero.mp4`(30MB), `reality.mp4`(19MB) 등 대용량 비디오 + 다수 이미지 → `next/image` 자동 최적화, 비디오 lazy loading 필수 |
| **SEO** | 포트폴리오/아카이브 사이트 특성상 검색 노출 중요 → SSR/SSG 지원 |
| **향후 확장성** | JOURNAL 블로그, WORLD 커뮤니티 확장 계획 언급 → API Routes, MDX 지원 유리 |
| **Framer Motion 통합** | runway.md에서 참고한 motion 애니메이션 패턴 → Next.js + Framer Motion 조합이 검증됨 |

**기술 스택:**
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (CSS Modules)
- **Animation**: Framer Motion (`motion/react`)
- **Font**: Inter (Google Fonts) — D-DIN 대용, design.md 권장
- **Icons**: Lucide React (최소한의 SVG 아이콘)

---

## 미디어 에셋 인벤토리 및 매핑

### 루트 미디어 파일
| 파일 | 크기 | 용도 매핑 |
|---|---|---|
| `hero.mp4` | ~30MB | **HOME 히어로 섹션** 배경 비디오 |
| `imagined.mp4` | ~3MB | **WORLD 페이지** 인트로 비디오 |
| `memory.jpg` | ~1.2MB | **JOURNAL 섹션** 대표 이미지 |
| `reality.mp4` | ~19MB | **PROJECTS 페이지** 실사 연구 프로젝트 비디오 |

### 폴더별 에셋
| 폴더 | 파일들 | 프로젝트 매핑 |
|---|---|---|
| `HUNTERS/` | `hunters_01~04.mp4` | **HERTZ SERIES** (시네마틱 시리즈) |
| `animation/` | `shin.mp4` (~52MB) | **LIVE ACTION STUDIES** (짱구 실사화) |
| `architect/` | `.mp4` × 2, `.png` × 3, `.jpg` × 1 | **NOMADIC ARCHITECTURE** (건축 작업) |
| `music video/` | `rappers.mp4`, `rappers_return.mp4` | **VISUAL EXPERIMENTS** |
| `nomadic city/` | `historical_context_integration.md` | **NOMADIC CITY** 세계관 텍스트 |
| `nomadic city_movie/` | `movie_01.mp4` (~77MB) | **NOMADIC CITY** 시네마틱 영상 |
| `nomadic city_story/` | `.png` × 1, `.jpg` × 2 | **NOMADIC CITY** 컨셉 이미지 |

> [!WARNING]
> `architect/` 폴더의 `ckd_innovation_mobile.mp4`(462MB)와 `gongdeok_housing_urban_plan.mp4`(337MB)는 매우 큰 파일입니다. 웹사이트에서 직접 스트리밍하기엔 부담이 크므로, **YouTube/Vimeo 임베드** 또는 **압축된 프리뷰 클립**으로 대체하는 것을 권장합니다. 이 부분에 대해 의견을 주세요.

---

## 프로젝트 구조

```
project15/
├── media/                          # 기존 미디어 에셋 (변경 없음)
├── docs/                           # 기획 문서 (변경 없음)
├── public/
│   └── media/ → ../media 심볼릭 링크 또는 복사
├── src/
│   ├── app/
│   │   ├── layout.tsx              # 루트 레이아웃 (Nav + Footer)
│   │   ├── page.tsx                # HOME
│   │   ├── globals.css             # 글로벌 스타일 + 디자인 토큰
│   │   ├── projects/
│   │   │   └── page.tsx            # PROJECTS
│   │   ├── world/
│   │   │   └── page.tsx            # WORLD
│   │   ├── journal/
│   │   │   └── page.tsx            # JOURNAL
│   │   └── about/
			└── page.tsx            # ABOUT
│   ├── components/
│   │   ├── Navbar.tsx              # 상단 네비게이션 (오버레이 스타일)
│   │   ├── Footer.tsx              # 푸터 (컬럼형 네비게이션)
│   │   ├── HeroSection.tsx         # 히어로 비디오 + 타이틀
│   │   ├── IntroSection.tsx        # 브랜드 매니페스토
│   │   ├── ProjectCard.tsx         # 프로젝트 카드
│   │   ├── WorldCategory.tsx       # 세계관 카테고리 그리드 아이템
│   │   ├── JournalEntry.tsx        # 저널 아티클 리스트 아이템
│   │   ├── CitizenCard.tsx         # 시민 프로필 카드
│   │   ├── SubscribeSection.tsx    # 이메일 구독 섹션
│   │   └── GhostButton.tsx         # 고스트 필 CTA 버튼
│   └── styles/
│       ├── tokens.css              # 디자인 토큰 (색상, 타이포, 스페이싱)
│       └── components.module.css   # 컴포넌트별 CSS Modules
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 디자인 시스템 (design.md 기반)

### 색상 토큰
```css
:root {
  /* Surface */
  --canvas-night: #000000;
  --canvas-night-soft: #0a0a0a;
  --canvas-light: #ffffff;
  --canvas-cool: #f0f0fa;
  --hairline-on-dark: #3a3a3f;
  --hairline-on-light: #e0e0e8;
  
  /* Text */
  --on-primary: #ffffff;
  --on-primary-mute: #f0f0fa;
  --ink: #000000;
  --ink-mute: #5a5a5f;
}
```

### Typography Tokens
```css
:root {
  --font-family: 'Inter', 'Arial Narrow', Arial, Verdana, sans-serif;
  
  /* Display */
  --display-xxl: 80px / 0.95 / 700 / 1.6px tracking;
  --display-xl: 60px / 1.2 / 700 / 1.2px tracking;
  --display-lg: 48px / 1.25 / 700 / 0.96px tracking;
  
  /* Body & UI */
  --body-lg: 16px / 1.7 / 400 / 0.32px;
  --body-md: 16px / 1.5 / 400 / 0.32px;
  --button-cap: 13px / 0.94 / 700 / 1.17px;
  --micro-cap: 12px / 2.0 / 400 / 0.96px;
}
```

### 핵심 디자인 원칙
1. **순수 블랙 캔버스** — `#000000` 배경, 흑백만으로 모든 색채 처리
2. **풀블리드 포토/비디오** — 사진과 영상이 유일한 장식 요소
3. **대문자 디스플레이** — 모든 제목은 uppercase + wide tracking
4. **고스트 필 CTA** — 1px 테두리, 투명 배경, pill 형태(32px radius)의 버튼만 사용
5. **스크림/오버레이 금지** — 타입은 이미지 위에 직접 배치, 그라데이션 없음

---

## 페이지별 구현 계획

### 1. HOME (메인 페이지) — `app/page.tsx`

7개 섹션의 싱글 페이지 스크롤:

| 섹션 | 구성 | 사용 미디어 |
|---|---|---|
| **Hero** | `hero.mp4` 풀블리드 배경 + "NOMADIC" 타이틀 + 슬로건 + `PLAY REEL` 버튼 | `hero.mp4` |
| **Intro/Manifesto** | 좌우 분할 — 좌: 볼드 슬로건, 우: 설명 + `EXPLORE NOMADIC →` | — |
| **Projects** | 대표 3개 프로젝트 가로 카드 | `nomadic_city.jpg`, `hunters_01.mp4` 썸네일, `reality.mp4` 썸네일 |
| **World** | 6개 카테고리 그리드 (ATLAS ~ TIMELINE) | `imagined.mp4` 배경 또는 `floating_structure.png` |
| **Journal & About** | 50:50 분할 — 좌: 저널 리스트, 우: 파운더 프로필 | `memory.jpg` |
| **Subscribe** | 이메일 입력 필드 | — |
| **Footer** | 컬럼형 네비게이션 + 저작권 | — |

### 2. PROJECTS — `app/projects/page.tsx`

6개 프로젝트 카테고리를 풀블리드 밴드로 순차 배치:

| 프로젝트 | 매핑 미디어 |
|---|---|
| 01. HERTZ SERIES | `HUNTERS/hunters_01.mp4` 스틸컷 또는 루프 |
| 02. NOMADIC CITY | `architect/nomadic_city.jpg`, `nomadic city_story/` 이미지들 |
| 03. LIVE ACTION STUDIES | `animation/shin.mp4` 스틸컷, `reality.mp4` |
| 04. NOMADIC ARCHITECTURE | `architect/monuments_of_memory.png`, `night_culture.png`, `urban_visualization.png` |
| 05. VISUAL EXPERIMENTS | `music video/rappers.mp4` 스틸컷 |
| 06. WRITING & SCENARIOS | 텍스트 중심 레이아웃 + `nomadic city/historical_context_integration.md` 인용 |

### 3. WORLD — `app/world/page.tsx`

8대 세계관 카테고리를 그리드 형태로 배치:
- ATLAS, DISTRICTS, CITIZENS, MOBILITY, INFRASTRUCTURE, TIMELINE, FRAGMENTS, RULES
- 각 카테고리는 아이콘/대표 이미지 + 제목 + 한 줄 설명
- 인트로 영상으로 `imagined.mp4` 사용
- `nomadic city_story/` 이미지들을 카테고리 배경으로 활용

### 4. JOURNAL — `app/journal/page.tsx`

블로그 아카이브 레이아웃:
- 6개 카테고리 필터 탭 (Essays, Process Notes, World Building, Research Files, Scenarios, Fragments)
- 각 아티클은 날짜 + 제목 + 카테고리 태그
- 대표 이미지: `memory.jpg`
- 초기 콘텐츠는 site_structure.md의 예시 아티클 6건으로 구성

### 5. ABOUT — `app/about/page.tsx`

- 상단: ABOUT NOMADIC 인트로 카피
- 중단: 파운더 Dongmin Ma 프로필 (역할, 소개 텍스트)
- 하단: CITIZENS 리스트 (12명) — 카드형 그리드, HUMAN/FICTIONAL/AI 태그 구분

---

## 인터랙션 및 애니메이션

| 요소 | 애니메이션 |
|---|---|
| 페이지 진입 | Framer Motion `staggerChildren` — 타이틀 → 설명 → CTA 순차 등장 |
| 스크롤 기반 | `whileInView` — 각 섹션이 뷰포트에 들어올 때 fade-up |
| 히어로 비디오 | autoplay + muted + loop, `PLAY REEL` 클릭 시 사운드 ON + 확대 재생 |
| 네비게이션 | 스크롤 시 투명 → 반투명 배경 전환 (backdrop-blur) |
| 고스트 버튼 | hover 시 outline opacity 변화 + 내부 텍스트 미세 이동 |
| 프로젝트 카드 | hover 시 이미지 scale(1.03) + 타이틀 reveal |
| CITIZENS 카드 | hover 시 태그(HUMAN/AI/FICTIONAL) 색상 글로우 |

---

## 반응형 전략 (design.md 기반)

| 브레이크포인트 | 너비 | 변경사항 |
|---|---|---|
| Wide | ≥1500px | 1200px 컨텐츠 컬럼, 풀 히어로 |
| Desktop | 1280–1499px | 기본 데스크탑 레이아웃 |
| Laptop | 961–1279px | 컬럼 축소, 사진 크롭 조정 |
| Tablet | 768–960px | display 80→60px, 프로젝트 2열 |
| Mobile | 600–767px | display 48px, 1열, 고스트 필 유지 |
| Small | <600px | display 40px, 햄버거 메뉴 |

---

## 구현 순서

### Phase 1: 기반 구축
1. Next.js 15 프로젝트 초기화 (App Router, TypeScript)
2. 글로벌 CSS + 디자인 토큰 정의 (`globals.css`, `tokens.css`)
3. Inter 폰트 설정 (next/font/google)
4. 미디어 파일을 `public/media/`에 연결

### Phase 2: 공통 컴포넌트
5. `Navbar` — 오버레이 스타일 네비게이션
6. `Footer` — 컬럼형 다크 푸터
7. `GhostButton` — 재사용 가능한 CTA 컴포넌트
8. 루트 `layout.tsx` 조립

### Phase 3: HOME 페이지
9. `HeroSection` — 비디오 배경 + 타이포
10. `IntroSection` — 매니페스토
11. Projects 하이라이트 + World 요약 + Journal/About 분할
12. `SubscribeSection`

### Phase 4: 서브 페이지
13. PROJECTS 페이지
14. WORLD 페이지
15. JOURNAL 페이지
16. ABOUT 페이지

### Phase 5: 폴리싱
17. 전체 애니메이션 적용 (Framer Motion)
18. 반응형 세밀 조정
19. 미디어 최적화 (lazy loading, poster frames)
20. SEO 메타 태그 + OG 이미지

---

## Open Questions

> [!IMPORTANT]
> **대용량 비디오 처리 방안**
> `architect/` 폴더의 `ckd_innovation_mobile.mp4`(462MB)와 `gongdeok_housing_urban_plan.mp4`(337MB)는 웹 직접 서빙에 부적합합니다. 아래 중 어떤 방식을 선호하시나요?
> 1. YouTube/Vimeo에 업로드 후 임베드
> 2. 짧은 프리뷰 클립(15~30초)으로 압축하여 사용
> 3. 정지 이미지(스틸컷)만 사용하고 외부 링크로 연결

> [!IMPORTANT]
> **CONTACT 페이지**
> site_structure.md에서 CONTACT는 "인스타그램 및 유튜브 외부 링크 연결"로만 언급되어 있습니다. 별도 페이지 없이 **푸터 + 네비게이션 드롭다운**으로 처리해도 괜찮을까요? 아니면 간단한 Contact 페이지를 따로 만들까요?

> [!NOTE]
> **PLAY REEL 기능**
> 히어로 섹션의 `PLAY REEL` 버튼을 누르면 `hero.mp4`를 전체 화면으로 사운드와 함께 재생하는 모달을 구현할 예정입니다.

---

## Verification Plan

### 자동 테스트
```bash
npm run build        # 빌드 성공 확인
npm run lint         # ESLint 통과
```

### 수동 검증
- 브라우저에서 `npm run dev` 후 5개 페이지 전체 탐색
- 모바일/태블릿 반응형 확인 (Chrome DevTools)
- 비디오 autoplay 동작 확인
- 네비게이션 라우팅 정상 동작 확인
- Lighthouse 성능/접근성 점수 확인
