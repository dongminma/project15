# NOMADIC 웹사이트 콘텐츠 및 구조 정의서

본 문서는 `docs/프레젠테이션1.pdf` 파일에 수록된 디자인 시안과 기획 메모를 바탕으로 작성되었습니다. 웹사이트 제작 시 텍스트 구성 및 메뉴 레이아웃의 기준점으로 활용할 수 있도록 정리한 기획 정의서입니다.

---

## 1. 개요 및 디자인 컨셉 (Overview & Design Concept)

* **프로젝트명**: NOMADIC (또는 NOMADIC WORLD / MDM STUDIO)
* **주요 성격**: 창작자 마동민(Dongmin Ma)의 건축적 상상력, 시네마틱 실험, AI 비주얼 스토리텔링을 아카이빙하는 개인 연구소 겸 가상 세계관 플랫폼.
* **디자인 및 비주얼 방향성**:
  * **애플 스타일 타이포그래피**: 서로 다른 임시 폰트들을 사용하기보다, 굵직하고 신뢰도 높은 서체(예: Inter, D-DIN 계열 등)로 통일하여 미니멀하고 단단한 인상을 제공합니다.
  * **다크 모드 & 고대비**: 블랙 배경을 캔버스로 삼아 시네마틱 이미지와 비디오가 돋보이게 구성합니다.
  * **유연한 레이아웃**: 제공된 시안의 배치는 전체적인 구성 목록을 보여주기 위한 참고용이며, 실제 구현 시 디자인에 맞춰 유연하게 레이아웃을 다듬어 사용할 수 있습니다.

---

## 2. 전체 웹사이트 네비게이션 구조 (Navigation Menu)

* **로고 (Brand Logo)**: NOMADIC
* **상단 네비게이션 메뉴**:
  1. [PROJECTS](#32-projects-프로젝트-페이지) (메인 작업들)
  2. [WORLD](#33-world-세계관-페이지) (결과물들이 공유하는 세계관 공간)
  3. [JOURNAL](#34-journal-저널-페이지) (작업 철학 및 고민을 다루는 저널)
  4. [ABOUT](#35-about-소개-페이지) (소개 및 참여자 프로필)
  5. **CONTACT** (연락처 / 인스타그램 및 유튜브 외부 링크 연결)

---

## 3. 세부 구성 및 텍스트 정의

### 3.1. HOME (홈 페이지)

홈 페이지는 단일 페이지 스크롤 형태로, NOMADIC의 핵심 슬로건을 전달하고 주요 카테고리를 직관적으로 탐색할 수 있는 허브 역할을 합니다. 이미지 시안에 기초하여 다음과 같이 섹션을 구성합니다.

* **1. 히어로 섹션 (Hero Section)**
  * **비주얼**: 메인 비주얼/비디오 (예: 밤의 미래 도시 NOMADIC 비주얼 전경)
  * **텍스트**:
    * 브랜드 타이틀: `NOMADIC`
    * 브랜드 슬로건: `A personal archive today. A collective city tomorrow.`
  * **인터랙션/기능**:
    * `PLAY REEL` 버튼 (시네마틱 재생 아이콘 포함)
    * 우측 하단 `SCROLL ->` 인디케이터

* **2. 브랜드 인트로 섹션 (Intro / Manifesto)**
  * **레이아웃**: 좌우 분할 구조
  * **좌측 슬로건 (Bold, Large)**:
    > **We imagine, build, and record worlds that do not exist yet.**
    > (우리는 아직 존재하지 않는 세계를 상상하고, 짓고, 기록합니다.)
  * **우측 설명글 (Regular, Small)**:
    > NOMADIC is an archive of artificial worlds, cinematic experiments, and unfinished cities.
    > It begins with one person's work, and is designed to expand into a collective of creators, citizens, and moving stories.
    * `EXPLORE NOMADIC ->` 링크 버튼

* **3. 프로젝트 하이라이트 섹션 (Projects Section)**
  * **상단 헤더**: `PROJECTS` (좌측), `VIEW ALL PROJECTS ->` (우측)
  * **콘텐츠**: 대표 프로젝트 3선 가로 카드 배열
    1. **01. NOMADIC CITY**
       * 서브타이틀: `Hong Kong Prototype`
       * 태그/분야: `Cinematic Worldbuilding`
    2. **02. AI ARCHITECTURAL FILMS**
       * 서브타이틀: `Visual Experiments`
       * 태그/분야: `AI Generated`
    3. **03. LIVE ACTION STUDIES**
       * 서브타이틀: `Emotional Realism`
       * 태그/분야: `AI + Live Action`

* **4. 세계관 요약 섹션 (World Section)**
  * **상단 헤더**: `WORLD` (좌측), `ENTER THE WORLD ->` (우측)
  * **콘텐츠**: 세계관을 구성하는 6가지 주요 카테고리 (가로 그리드 배치)
    1. **ATLAS**: `Maps and Territories`
    2. **DISTRICTS**: `Areas and Zones`
    3. **CITIZENS**: `People and Beings`
    4. **MOBILITY**: `Movement Systems`
    5. **INFRASTRUCTURE**: `Systems and Networks`
    6. **TIMELINE**: `History and Future`

* **5. 저널 & 어바웃 스플릿 섹션 (Journal & About Section)**
  * **레이아웃**: 50:50 좌우 배치
  * **좌측 - JOURNAL**:
    * 헤더: `JOURNAL` (좌측), `VIEW ALL ARTICLES ->` (우측)
    * 최근 아티클 리스트 (날짜 + 제목):
      * `2024.04.30` Why I started NOMADIC
      * `2024.04.11` Making a city with AI
      * `2024.04.03` Architecture after AI
      * `2024.04.02` The city that keeps moving
      * `2024.03.28` Notes on failure, boredom, and unfinished projects
    * 우측에 대표 저널 이미지 배치
  * **우측 - ABOUT**:
    * 헤더: `ABOUT` (좌측), `MEET THE FOUNDER ->` (우측)
    * 설립자 소개 카드 (Dongmin Ma 프로필 이미지 배경 및 오버레이 텍스트):
      > NOMADIC was founded by Dongmin Ma as a personal archive for architectural imagination, cinematic experiments, and AI-based visual storytelling.
      * 하단 `LEARN MORE ->` 버튼

* **6. 구독 섹션 (Stay Updated Section)**
  * **좌측**:
    * 타이틀: `Stay Updated`
    * 서브타이틀: `Subscribe to receive updates on new projects, journal entries, and world expansion.`
  * **우측**: 이메일 입력 필드 (`Enter your email`) 및 제출 화살표 버튼

* **7. 푸터 (Footer)**
  * **상단**: 브랜드 슬로건 및 전체 사이트 구조 컬럼형 네비게이션
    * **NOMADIC**: `A personal archive today. A collective city tomorrow.`
    * **PROJECTS**: `All Projects`, `Films`, `Cities`, `Visuals`, `Writing`
    * **WORLD**: `Atlas`, `Districts`, `Citizens`, `Mobility`, `Infrastructure`, `Timeline`
    * **JOURNAL**: `Essays`, `Process`, `Worldbuilding`, `Research`, `Fragments`
    * **ABOUT**: `Founder`, `Vision`, `Collaborators`
    * **CONTACT**: `Email`, `Instagram`, `YouTube`
  * **하단**:
    * 좌측: `© 2024 NOMADIC. All rights reserved.`
    * 우측: `PRIVACY`, `TERMS`

---

### 3.3. PROJECTS (프로젝트 페이지)

창작자의 주요 시각 작업을 분류하여 모아둔 포트폴리오 영역입니다.

* **소개 타이틀**:
  > **PROJECTS**
  > Curated projects shaping the world of NOMADIC.
* **상세 카테고리 구성 (6개 분류)**:
  1. **01. HERTZ SERIES (헤르츠 시리즈)**
     * *성격*: 연재형 영상 시리즈 / 시네마틱 실험
     * *기획 메모*: 일회성 단발 작업이 아닌 지속적으로 누적될 수 있는 시리즈형 콘텐츠이므로, 프로젝트 리스트의 최상단에 배치하여 주목도를 높임.
  2. **02. NOMADIC CITY (노마딕 시티)**
     * *성격*: 졸업작품 / 세계관의 시작 / 이동도시
     * *기획 메모*: 창작자 프로젝트의 뿌리가 되는 핵심 결과물. 뒤에 나오는 'WORLD' 카테고리와 설명이 겹치지 않도록, 이곳에서는 '졸업작품이자 세계관의 원형(prototype) 프로젝트' 관점으로 서술.
  3. **03. REAL LIFE STUDIES 또는 LIVE ACTION STUDIES (실사화 연구)**
     * *성격*: 실사화 / 감정적 리얼리즘 / 기존 이야기의 재해석
     * *수록 예정 내용*: 제영님 컬래버 영상, 무비, 짱구 실사화, UP(업) 실사화 등.
     * *기획 메모*: 단순 'REAL LIFE'라는 명칭은 모호하므로 뒤에 'STUDIES' 혹은 'LIVE ACTION STUDIES'를 덧붙여 개념을 구체화할 것을 제안.
  4. **04. NOMADIC ARCHITECTURE (노마딕 아키텍처)**
     * *성격*: 실제 건축 + 가상 건축
     * *기획 메모*: 건축가로서의 오리지널 정체성을 보여주는 핵심 카테고리. 오프라인에서 실제 설계 및 시공한 건축물 사진과 AI 툴로 설계한 미래 지향적 가상 건축을 병렬 배치.
  5. **05. VISUAL EXPERIMENTS (비주얼 실험실)**
     * *성격*: 이미지 / 무드 / 캐릭터보드 / 썸네일
     * *기획 메모*: 완전히 매끄럽게 정돈된 완성형 프로젝트보다는, 연구실/작업실 느낌으로 창작의 원천이 되는 비주얼 소스나 썸네일을 러프하게 공개하는 공간.
  6. **06. WRITING & SCENARIOS (시나리오 및 설정집)**
     * *성격*: 시나리오 / 내러티브 / 세계관 텍스트 글
     * *기획 메모*: 창작자가 직접 구상한 방대한 세계관 설정집, 동영상 대본, 기획 각본 등 텍스트 중심의 지적 자산을 읽을 수 있는 영역.

---

### 3.4. WORLD (세계관 페이지)

프로젝트들 저변에 흐르는 가상의 법칙들과 세계관 설정을 아카이빙하는 공간입니다.

* **소개 타이틀**:
  > **NOMADIC WORLD**
  > A living archive of districts, citizens, systems, and possible futures.
* **기획 메모**:
  * 단순 아카이브를 넘어 노마딕 월드에 관한 독자적 철학과 세계관 설정이 드러나야 함.
  * 물리적 이동 도시인 'NOMADIC CITY' 단일 프로젝트와 영역을 차별화하고, 추후 이용자들이 방문하여 소통할 수 있는 커뮤니티 성격으로의 확장을 염두에 둠.
* **최종 WORLD 구성 카테고리 (8대 요소)**:
  1. **01. ATLAS (지도)**: 지리, 지도 및 다양한 공간 레이어 (Maps, layers, and geographies).
  2. **02. DISTRICTS (구역)**: 가상 도시 구역과 수직 도시 공간 탐색 (Zones, neighborhoods, and atmospheres).
  3. **03. CITIZENS (시민)**: 세계관 내 주요 인물 아카이브. 설립자, 가상 인물, 협업 파트너 및 AI 창작자 프로필.
  4. **04. MOBILITY (모빌리티)**: 도시를 관통하는 튜브, 캡슐, 다리 등 미래 이동수단 및 교통 인프라 (Systems that move us).
  5. **05. INFRASTRUCTURE (인프라)**: 환경 제어, 구조, 데이터망, 생존 시스템 등 가상 세계를 지탱하는 뼈대 (The backbone of possibility).
  6. **06. TIMELINE (타임라인)**: 역사적 사건들의 타임라인. 과거, 현재, 그리고 발생 가능한 미래 기록 (Key events across eras).
  7. **07. FRAGMENTS (기록의 파편)**: 이미지, 아티팩트, 단편적인 아이디어 메모 및 기억 수집 공간 (Collected notes and visuals).
  8. **08. RULES (규칙)**: 도시 내 공존을 위한 물리적 법칙, 가상 세계관의 사회 규범 (Principles for coexisting).

---

### 3.5. JOURNAL (저널 페이지)

창작 과정에서의 고뇌, 이론 연구, 일상적인 고민들을 기록하는 블로그형 아카이브입니다.

* **소개 타이틀**:
  > **JOURNAL**
  > Notes, thoughts, process, writing, and research.
  > *A working archive of ideas and inquiry. Reflections on worlds, methods, and the act of building futures.*
* **기획 메모**:
  * 단순한 개인 신변잡기형 "일기"가 아닌, 작업에 적용된 아이디어와 창작 과정을 추적하는 **"작업 노트(Work Note)"** 형식 지향.
  * 창작자의 복잡한 생각과 연구 기록들을 구조화하여 보여줌으로써 방문객들에게 웹사이트의 깊이감과 오리지널리티를 전달.
* **저널 세부 카테고리 (6대 분류)**:
  1. **01. ESSAYS (에세이)**: 도시, 건축, 기억, 그리고 세계의 미래에 관한 긴 호흡의 생각과 성찰.
  2. **02. PROCESS NOTES (작업 노트)**: 작업 비하인드. 기획 방법론, 프로토타입 실험, 스케치, 아이디어 디벨롭 과정.
  3. **03. WORLD BUILDING (세계관 기록)**: 가상 세계의 문화, 가치관, 시스템 구축 연구.
  4. **04. RESEARCH FILES (연구실 파일)**: 역사, 과학, 영화 연구 등 다양한 학문에서 가져온 레퍼런스 및 영감 서적 분석.
  5. **05. SCENARIOS (시나리오)**: 창작 스토리를 이루는 초기 설정, 내러티브 씨앗, 시범적 상황극.
  6. **06. FRAGMENTS (조각 기록)**: 영감을 준 짧은 인용구, 단편적 낙서, 스냅샷 이미지들.
* **다룰 만한 저널 아티클 예시**:
  * *Why I started NOMADIC* (내가 노마딕을 시작한 이유)
  * *Making UP Live Action with AI* (AI를 활용한 UP 실사화 도전기)
  * *What is an artificial memory?* (인공 기억이란 무엇인가?)
  * *Architecture after AI* (인공지능 도래 이후의 미래 건축학)
  * *The city that keeps moving* (끊임없이 이동하는 도시에 대하여)
  * *Notes on failure, boredom, and unfinished projects* (실패와 지루함, 미완의 프로젝트에 보내는 기록)

---

### 3.6. ABOUT (소개 페이지)

창작 주체에 대한 진정성 있고 내밀한 소개가 이루어지는 페이지입니다.

* **기획 메모**:
  * 처음부터 규모가 큰 단체처럼 "우리는 세계관 창작 집단입니다"로 거창하게 시작하는 대신, **"창작자 개인의 아카이브에서 출발했다"는 사실을 담담하고 솔직하게 전달**하는 편이 독자에게 훨씬 매력적이고 지지를 얻기 쉽습니다.
* **소개 타이틀 및 메인 카피**:
  > **ABOUT NOMADIC**
  >
  > NOMADIC was founded by Dongmin Ma as a personal archive for architectural imagination, cinematic experiments, and AI-based visual storytelling.
  >
  > It begins with one person’s work, but it is designed to expand – into a small constellation of collaborators, fictional citizens, and artificial creators.
  >
  > *(NOMADIC은 마동민이 건축적 상상력, 영화적 실험, AI 기반 비주얼 스토리텔링을 위해 만든 개인 아카이브로 설립되었습니다. 한 사람의 작업으로 시작하지만, 협업자, 세계관 속 가상 시민, 인공지능 창작자들로 이루어진 작은 별자리로 확장되도록 설계되었습니다.)*
* **설립자 (Founder) 소개**:
  * **DONGMIN MA (마동민)**
    * *역할*: Founder / Architect / Filmmaker / AI Creator
    * *소개 프로필*:
      건축을 전공한 마동민은 현실과 상상의 경계를 탐구합니다. 그의 작업은 건축, 영화, AI 생성 이미지, 그리고 세계관 설정을 넘나들며, 아직 존재하지 않는 가상의 이야기를 위한 새로운 비주얼 언어를 창조합니다. NOMADIC은 그의 지속적인 프로젝트이자 향후 다각적인 협업을 이어 나갈 기반이 됩니다.

* **CITIZENS (시민 리스트 - 가상 및 실제 참여 인력 목록)**:
  * *기획 메모*: ABOUT 섹션 하단에 '시민(CITIZENS)' 리스트를 배치하여 실제 협력 인원, 세계관 속 가상 등장인물, 그리고 활용 중인 AI 페르소나들을 카드형 또는 명단 형태로 유기적으로 통합합니다.
  * **시민 분류 태그**: `HUMAN` (현실 참가자), `FICTIONAL` (세계관 가상 인물), `AI` (인공지능 창작 주체)
  * **시민 아카이브 리스트 예시 (시안 참고)**:
    1. **DONGMIN MA** (Human - Founder / Architect / Filmmaker / AI Creator)
    2. **MINJUN L.** (Human - Concept Artist / Future Collaborator)
    3. **V-01** (AI - Cinematic Director)
    4. **AIRA** (AI - Visual Artist)
    5. **JAEIN K.** (Fictional - Writer / Worldbuilder)
    6. **SEOJUN P.** (Fictional - Urban Researcher)
    7. **ORBIT** (AI System - Archive System)
    8. **OLD TAE** (Fictional - Harbor Engineer)
    9. **M.O.S** (AI - Modular Operating System)
    10. **LINA** (Fictional - Memory Collector)
    11. **NOMADIC** (Fictional - Wanderer)
    12. **NEW CITIZEN** (Unknown - Coming Soon)

---

## 4. 사이트 제작 시 디자인/개발 팁 (Tip)

1. **애플 스타일 타이포그래피 구현**:
   * 본문과 제목 모두 산세리프 계열(Inter 혹은 원작자가 언급한 굵고 튼튼한 서체)을 사용하고 가독성 좋은 굵은 두께(700~800)와 일반 두께(400) 두 가지로만 단순화합니다.
2. **그리드와 정렬**:
   * 각 페이지(Projects, World, Journal, About)는 1200px 정도의 내부 컨테이너 그리드를 설정하고 좌우 대칭이 미니멀하게 떨어지도록 정렬합니다.
3. **가볍고 빠른 로딩**:
   * 고화질 이미지나 영상이 많은 만큼 최적화(WebP 포맷, 비디오 스트리밍 최적화)가 중요합니다. 홈 히어로 영상도 용량이 클 경우 루프되는 짧고 압축된 클립으로 구성하는 것을 권장합니다.
