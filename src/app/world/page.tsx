"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./page.module.css";

const CATEGORIES = [
  {
    num: "01",
    title: "ATLAS",
    desc: { en: "Maps, layers, and geographies.", ko: "지도, 레이어, 지리 체계." },
    longDesc: {
      en: "Explore the geographic foundations of NOMADIC — mapping spatial layers and territorial constructs of the virtual city.",
      ko: "가상 도시의 공간적 레이어와 영토 구조를 매핑하며 NOMADIC의 지리적 기반을 탐구합니다.",
    },
  },
  {
    num: "02",
    title: "DISTRICTS",
    desc: { en: "Zones, neighborhoods, and atmospheres.", ko: "구역, 이웃, 분위기." },
    longDesc: {
      en: "Navigate through distinct vertical city zones, each with its own cultural identity, density, and ambient character.",
      ko: "각기 다른 문화적 정체성, 밀도, 분위기를 가진 수직 도시 구역을 따라 이동합니다.",
    },
  },
  {
    num: "03",
    title: "CITIZENS",
    desc: { en: "People and Beings.", ko: "사람과 존재들." },
    longDesc: {
      en: "Meet the inhabitants — founders, fictional characters, AI collaborators, and future citizens of the NOMADIC world.",
      ko: "창립자, 가상 인물, AI 협업자, 미래 시민 등 NOMADIC 세계의 거주자들을 만납니다.",
    },
  },
  {
    num: "04",
    title: "MOBILITY",
    desc: { en: "Systems that move us.", ko: "이동을 가능하게 하는 시스템." },
    longDesc: {
      en: "Tubes, capsules, bridges, and drone-based transport — the future mobility infrastructure threading through the city.",
      ko: "튜브, 캡슐, 브리지, 드론 운송 등 도시를 관통하는 미래형 이동 인프라를 다룹니다.",
    },
  },
  {
    num: "05",
    title: "INFRASTRUCTURE",
    desc: { en: "The backbone of possibility.", ko: "가능성을 지탱하는 기반." },
    longDesc: {
      en: "Environmental controls, structural systems, data networks, and survival mechanisms that sustain the virtual world.",
      ko: "가상 세계를 유지하는 환경 제어, 구조 시스템, 데이터 네트워크, 생존 메커니즘을 설명합니다.",
    },
  },
  {
    num: "06",
    title: "TIMELINE",
    desc: { en: "Key events across eras.", ko: "시대별 주요 사건." },
    longDesc: {
      en: "A chronological archive of past events, present milestones, and projected futures within the NOMADIC universe.",
      ko: "NOMADIC 세계 안의 과거 사건, 현재의 이정표, 예측된 미래를 시간순으로 정리한 아카이브입니다.",
    },
  },
  {
    num: "07",
    title: "FRAGMENTS",
    desc: { en: "Collected notes and visuals.", ko: "수집된 노트와 이미지." },
    longDesc: {
      en: "Images, artifacts, fragmentary ideas, memos, and collected memories — the raw material of worldbuilding.",
      ko: "이미지, 아티팩트, 단편적 아이디어, 메모, 수집된 기억처럼 세계관을 만드는 원재료입니다.",
    },
  },
  {
    num: "08",
    title: "RULES",
    desc: { en: "Principles for coexisting.", ko: "공존을 위한 원칙." },
    longDesc: {
      en: "Physical laws, social norms, and governance frameworks that enable coexistence within the moving city.",
      ko: "움직이는 도시 안에서 공존을 가능하게 하는 물리 법칙, 사회 규범, 운영 체계를 다룹니다.",
    },
  },
];

export default function WorldPage() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const sceneRef = useRef<HTMLElement>(null);
  const { text } = useLanguage();

  function openScene(category: (typeof CATEGORIES)[number]) {
    setActiveCategory(category);
    window.setTimeout(() => {
      sceneRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  return (
    <div className={styles.page}>
      {/* Hero with Video */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <video
            className={styles.heroVideo}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/media/imagined.mp4" type="video/mp4" />
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
            NOMADIC WORLD
          </motion.h1>
          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {text({
              en: "A living archive of districts, citizens, systems, and possible futures.",
              ko: "구역, 시민, 시스템, 가능한 미래를 담은 살아 있는 아카이브입니다.",
            })}
          </motion.p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className={styles.categories}>
        <div className="container-wide">
          <div className={styles.grid}>
            {CATEGORIES.map((cat, i) => (
              <motion.button
                key={cat.num}
                type="button"
                className={`${styles.card} ${
                  activeCategory.num === cat.num ? styles.cardActive : ""
                }`}
                onClick={() => openScene(cat)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className={styles.cardInner}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardNum}>{cat.num}</span>
                    <ArrowRight size={14} className={styles.cardArrow} />
                  </div>
                  <h3 className={styles.cardTitle}>{cat.title}</h3>
                  <p className={styles.cardSubtitle}>{text(cat.desc)}</p>
                  <p className={styles.cardDesc}>{text(cat.longDesc)}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Scene Detail */}
      <section ref={sceneRef} className={`section section-border ${styles.scene}`}>
        <div className="container-wide">
          <motion.div
            key={activeCategory.num}
            className={styles.sceneGrid}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div>
              <span className={styles.sceneNum}>{activeCategory.num}</span>
              <h2 className={styles.sceneTitle}>{activeCategory.title}</h2>
            </div>
            <div className={styles.sceneCopy}>
              <p className={styles.sceneLead}>{text(activeCategory.desc)}</p>
              <p>{text(activeCategory.longDesc)}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
