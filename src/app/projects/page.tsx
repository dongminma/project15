"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./page.module.css";

type LocalizedText = {
  en: string;
  ko: string;
};

type Project = {
  key: string;
  num: string;
  title: string;
  subtitle: LocalizedText;
  desc: LocalizedText;
  tag: string;
  image: string;
};

type DetailItem = {
  num: string;
  title: string;
  desc: LocalizedText[];
  image: string;
  href?: string;
  cta: string;
};

const PROJECTS: Project[] = [
  {
    key: "hunters",
    num: "01",
    title: "HUNTERS SERIES",
    subtitle: { en: "Cinematic Worldbuilding", ko: "Cinematic Worldbuilding" },
    desc: {
      en: "A serialized cinematic world set inside a fractured future governed by artificial intelligence.",
      ko: "인공지능이 문명을 지배하는 균열된 미래를 배경으로 한 시네마틱 세계관 시리즈입니다.",
    },
    tag: "Hunters / Cinematic",
    image: "/media/hertz-series.jpg",
  },
  {
    key: "live-action",
    num: "02",
    title: "LIVE ACTION STUDIES",
    subtitle: { en: "Emotional Realism", ko: "Emotional Realism" },
    desc: {
      en: "AI-augmented live action experiments, reinterpreting existing stories through emotional realism and cinematic techniques.",
      ko: "기존 이야기를 감정적 리얼리즘과 영화적 기법으로 재해석하는 AI 기반 실사 실험입니다.",
    },
    tag: "AI + Live Action",
    image: "/media/live-action-studies.jpg",
  },
  {
    key: "architecture",
    num: "03",
    title: "NOMADIC ARCHITECTURE",
    subtitle: { en: "Real & Virtual", ko: "Real & Virtual" },
    desc: {
      en: "Bridging real-world construction with AI-designed speculative architecture, expanding the architect's original identity.",
      ko: "현실의 건축과 AI가 설계한 사변적 건축을 연결하며 건축가의 정체성을 확장하는 프로젝트입니다.",
    },
    tag: "Architecture / Design",
    image: "/media/architect/nomadic-architecture-04.png",
  },
  {
    key: "visual",
    num: "04",
    title: "VISUAL EXPERIMENTS",
    subtitle: { en: "Image / Mood / Character", ko: "Image / Mood / Character" },
    desc: {
      en: "A raw lab-like space sharing visual sources, mood boards, character studies, and thumbnails that inspire the work.",
      ko: "작업에 영감을 주는 이미지 소스, 무드보드, 캐릭터 연구, 썸네일을 모아두는 실험실 같은 공간입니다.",
    },
    tag: "Image / Mood",
    image: "/media/nomadic city_story/floating_structure.png",
  },
  {
    key: "writing",
    num: "05",
    title: "WRITING & SCENARIOS",
    subtitle: { en: "Narratives & Worldbuilding", ko: "Narratives & Worldbuilding" },
    desc: {
      en: "Text-centered intellectual assets including scripts, worldbuilding documents, scenarios, and speculative narratives.",
      ko: "시나리오, 세계관 문서, 스크립트, 사변적 내러티브처럼 텍스트 중심의 지적 자산을 모아둔 영역입니다.",
    },
    tag: "Narrative / Text",
    image: "/media/nomadic city_story/modular_habitat.jpg",
  },
];

const HUNTERS_DETAILS: DetailItem[] = [
  {
    num: "01",
    title: "EP.01 Hunter 001 - Kro",
    desc: [
      {
        en: "A black-unit short story set during the Second Korean War.",
        ko: "2차 한국전쟁을 배경으로 한 검은색 유닛 헌터의 단편 이야기입니다.",
      },
      {
        en: "Kro moves through a ruined battlefield as one of the earliest Hunters, tracking signals, abandoned machines, and the remains of a conflict shaped by artificial intelligence.",
        ko: "Kro는 초기 헌터 중 하나로 폐허가 된 전장을 지나며 신호, 버려진 기계, 인공지능이 만든 전쟁의 흔적을 추적합니다.",
      },
      {
        en: "This episode opens the Hunters Series with a bleak military tone and introduces the world through survival, pursuit, and fractured memory.",
        ko: "이 에피소드는 어두운 군사적 분위기로 헌터즈 시리즈의 문을 열고, 생존과 추격, 조각난 기억을 통해 세계관을 보여줍니다.",
      },
    ],
    image: "/media/hunter-002.jpg",
    href: "https://www.youtube.com/watch?v=qhrf1ndblLU&t=18s",
    cta: "WATCH EPISODE",
  },
  {
    num: "02",
    title: "EP.02 Hunter 002 - Just a Drink Gin Tonic",
    desc: [
      {
        en: "A red-unit short centered on a cowboy-like Hunter drifting through a strange frontier.",
        ko: "이상한 변경 지대를 떠도는 카우보이 스타일의 붉은색 헌터를 중심으로 한 단편입니다.",
      },
      {
        en: "Between gun smoke, old bars, and artificial memories, Hunter 002 turns a simple drink into a quiet ritual before violence begins again.",
        ko: "총연기, 오래된 술집, 인공 기억 사이에서 Hunter 002는 다시 폭력이 시작되기 전 한 잔의 술을 조용한 의식처럼 마주합니다.",
      },
      {
        en: "This episode expands the series into western atmosphere, loneliness, and the personal code of a hunter who survives by instinct.",
        ko: "이 에피소드는 서부극의 분위기, 고독, 그리고 본능으로 살아남는 헌터의 개인적 규칙을 통해 시리즈의 결을 넓힙니다.",
      },
    ],
    image: "/media/hunter-008.jpg",
    href: "https://www.youtube.com/watch?v=cZTzwwa9YLI",
    cta: "WATCH EPISODE",
  },
  {
    num: "03",
    title: "EP.03 Hunter 008 - The Second World War",
    desc: [
      {
        en: "A blue-unit short following Hunter 008 through the echoes of a second global war.",
        ko: "두 번째 세계대전의 흔적 속을 이동하는 파란색 유닛 Hunter 008의 단편입니다.",
      },
      {
        en: "Designed as a support and field-response operative, Hunter 008 moves between collapsing cities, wounded civilians, and machine-controlled territories.",
        ko: "지원 및 현장 대응 요원으로 설계된 Hunter 008은 무너지는 도시, 부상당한 민간인, 기계가 통제하는 구역 사이를 이동합니다.",
      },
      {
        en: "This chapter focuses on duty, rescue, and the fragile line between a soldier, a medic, and a weapon.",
        ko: "이 장은 임무와 구조, 그리고 군인과 의무요원, 무기 사이의 불안정한 경계에 집중합니다.",
      },
    ],
    image: "/media/hunter-001.jpg",
    href: "https://www.youtube.com/watch?v=yKwc9OKT8TM",
    cta: "WATCH EPISODE",
  },
  {
    num: "04",
    title: "EP.04 Hunter 004 - Cyborg Pokemon",
    desc: [
      {
        en: "A green-unit short that pushes the Hunters universe into hybrid creature design and AI animation.",
        ko: "헌터즈 세계관을 하이브리드 생명체 디자인과 AI 애니메이션으로 확장하는 초록색 유닛의 단편입니다.",
      },
      {
        en: "Hunter 004 enters a distorted city where familiar monsters, cybernetic bodies, and machine logic collide.",
        ko: "Hunter 004는 익숙한 몬스터, 사이버네틱 신체, 기계의 논리가 충돌하는 왜곡된 도시로 들어갑니다.",
      },
      {
        en: "The episode explores mutation, companionship, and the strange tenderness that can survive inside a synthetic battlefield.",
        ko: "이 에피소드는 돌연변이, 동행, 그리고 인공적인 전장 속에서도 살아남는 이상한 다정함을 탐구합니다.",
      },
    ],
    image: "/media/hunter-004.jpg",
    href: "https://www.youtube.com/watch?v=4c8VImCAmMs&t=95s",
    cta: "WATCH EPISODE",
  },
];

const LIVE_ACTION_DETAILS: DetailItem[] = [
  {
    num: "01",
    title: "UP(2009) Live Action - Married Life",
    desc: [
      {
        en: "A live-action reinterpretation of one of animation's most beloved emotional sequences.",
        ko: "애니메이션에서 가장 사랑받는 감정적 장면 중 하나를 실사로 재해석한 작업입니다.",
      },
      {
        en: "This study translates the quiet passage of Married Life into a real cinematic scene, focusing on aging, memory, companionship, and the fragile beauty of ordinary days.",
        ko: "Married Life의 조용한 시간 흐름을 실제 영화 장면처럼 옮기며, 노화와 기억, 동반자 관계, 평범한 날들의 섬세한 아름다움에 집중합니다.",
      },
      {
        en: "The goal is not to copy the original frame by frame, but to rebuild its emotional rhythm through light, faces, space, and time.",
        ko: "원본을 그대로 복제하는 것이 아니라 빛, 얼굴, 공간, 시간의 흐름으로 감정의 리듬을 다시 구성하는 것이 목표입니다.",
      },
    ],
    image: "/media/live-action-up.jpg",
    href: "https://www.youtube.com/watch?v=jMCljVqkOaY&t=11s",
    cta: "GO TO YOUTUBE",
  },
  {
    num: "02",
    title: "Crayon Shin-chan Live Action - Hiroshi's Reflection",
    desc: [
      {
        en: "A live-action emotional study inspired by Hiroshi's reflection from The Adult Empire Strikes Back.",
        ko: "극장판 짱구의 히로시 회상 장면에서 영감을 받은 실사 감정 연구입니다.",
      },
      {
        en: "The project reimagines childhood, family, regret, and nostalgia as a grounded domestic memory.",
        ko: "어린 시절, 가족, 후회, 향수를 현실적인 가정의 기억으로 다시 상상한 프로젝트입니다.",
      },
      {
        en: "It turns an animated moment into a believable live-action fragment about the weight of growing up and the tenderness hidden inside ordinary family life.",
        ko: "애니메이션의 순간을 성장의 무게와 평범한 가족 안에 숨어 있는 다정함을 담은 실사 장면으로 바꾸는 시도입니다.",
      },
    ],
    image: "/media/live-action-hiroshi.jpg",
    href: "https://www.youtube.com/watch?v=y8WbJZtvNKc&t=29s",
    cta: "GO TO YOUTUBE",
  },
];

function DetailCard({ item }: { item: DetailItem }) {
  const { text } = useLanguage();
  const content = (
    <>
      <div className={styles.detailImageWrap}>
        <img
          src={item.image}
          alt={item.title}
          className={styles.detailImage}
          loading="lazy"
        />
      </div>
      <div className={styles.detailMeta}>
        <div className={styles.detailCopy}>
          <h3 className={styles.detailTitle}>{item.title}</h3>
          <div className={styles.detailDesc}>
            {item.desc.map((line) => (
              <p className={styles.detailParagraph} key={line.en}>
                {text(line)}
              </p>
            ))}
          </div>
          <span className={styles.detailCta}>
            {item.cta} <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </>
  );

  if (!item.href) {
    return <article className={styles.detailCard}>{content}</article>;
  }

  return (
    <a
      className={styles.detailCard}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
}

export default function ProjectsPage() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const { text } = useLanguage();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <video
            className={styles.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/media/projects-hero.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container-wide ${styles.heroContent}`}>
          <motion.h1
            className="display-xxl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            PROJECTS
          </motion.h1>
          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {text({
              en: "Curated projects shaping the world of NOMADIC.",
              ko: "NOMADIC의 세계를 형성하는 주요 프로젝트 모음입니다.",
            })}
          </motion.p>
        </div>
      </section>

      <section className={styles.list}>
        {PROJECTS.map((project) => {
          const detailItems =
            project.key === "hunters"
              ? HUNTERS_DETAILS
              : project.key === "live-action"
                ? LIVE_ACTION_DETAILS
                : [];
          const canExpand = detailItems.length > 0;
          const isExpanded = expandedProject === project.key;

          return (
            <motion.div
              key={project.key}
              className={styles.projectBand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="container-wide">
                <div className={styles.projectGrid}>
                  <div className={styles.projectImageWrap}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.projectMedia}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.projectInfo}>
                    <span className={styles.projectNum}>{project.num}.</span>
                    <h2 className={styles.projectTitle}>{project.title}</h2>
                    <p className={styles.projectSubtitle}>{text(project.subtitle)}</p>
                    <p className={styles.projectDesc}>{text(project.desc)}</p>
                    <span className={styles.projectTag}>{project.tag}</span>
                    <button
                      className="ghost-btn"
                      style={{ marginTop: "24px" }}
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() => {
                        if (!canExpand) return;
                        setExpandedProject(isExpanded ? null : project.key);
                      }}
                    >
                      {canExpand && isExpanded ? "CLOSE PROJECT" : "VIEW PROJECT"}{" "}
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {canExpand && isExpanded && (
                    <motion.div
                      className={styles.details}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                      <div className={styles.detailGrid}>
                        {detailItems.map((item) => (
                          <DetailCard item={item} key={item.num} />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
