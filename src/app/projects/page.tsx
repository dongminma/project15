"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./page.module.css";

const PROJECTS = [
  {
    num: "01",
    title: "HERTZ SERIES",
    subtitle: { en: "Cinematic Experiments", ko: "시네마틱 실험" },
    desc: {
      en: "A serialized cinematic series — not a one-off project, but a continuously accumulating body of visual experiments.",
      ko: "단발성 작업이 아니라 계속 축적되는 시네마틱 시리즈이자 비주얼 실험의 아카이브입니다.",
    },
    tag: "Series / Cinematic",
    image: "/media/hertz-series.jpg",
  },
  {
    num: "02",
    title: "NOMADIC CITY",
    subtitle: { en: "Hong Kong Prototype", ko: "홍콩 프로토타입" },
    desc: {
      en: "The origin project and worldbuilding prototype — a graduation work that became the seed of the NOMADIC universe.",
      ko: "NOMADIC 세계관의 씨앗이 된 시작점이자 세계관 프로토타입으로, 졸업 작업에서 출발한 프로젝트입니다.",
    },
    tag: "Worldbuilding / Architecture",
    image: "/media/nomadic-city.jpg",
  },
  {
    num: "03",
    title: "LIVE ACTION STUDIES",
    subtitle: { en: "Emotional Realism", ko: "감정적 리얼리즘" },
    desc: {
      en: "AI-augmented live action experiments — reinterpreting existing stories through emotional realism and cinematic techniques.",
      ko: "AI를 활용한 실사화 실험으로, 기존 이야기를 감정적 리얼리즘과 시네마틱 기법으로 재해석합니다.",
    },
    tag: "AI + Live Action",
    image: "/media/live-action-studies.jpg",
  },
  {
    num: "04",
    title: "NOMADIC ARCHITECTURE",
    subtitle: { en: "Real & Virtual", ko: "현실과 가상" },
    desc: {
      en: "Bridging real-world construction with AI-designed speculative architecture — the architect's original identity.",
      ko: "현실의 건축과 AI로 설계한 사변적 건축을 연결하며, 건축가로서의 정체성을 확장하는 작업입니다.",
    },
    tag: "Architecture / Design",
    image: "/media/architect/nomadic-architecture-04.png",
  },
  {
    num: "05",
    title: "VISUAL EXPERIMENTS",
    subtitle: { en: "Image / Mood / Character", ko: "이미지 / 무드 / 캐릭터" },
    desc: {
      en: "A raw, lab-like space sharing visual sources, mood boards, character studies, and thumbnails that inspire the work.",
      ko: "작업의 영감이 되는 이미지 소스, 무드보드, 캐릭터 스터디, 썸네일을 공유하는 실험실 같은 공간입니다.",
    },
    tag: "Image / Mood",
    image: "/media/nomadic city_story/floating_structure.png",
  },
  {
    num: "06",
    title: "WRITING & SCENARIOS",
    subtitle: { en: "Narratives & Worldbuilding", ko: "서사와 세계관" },
    desc: {
      en: "Text-centered intellectual assets — scripts, worldbuilding documents, scenarios, and speculative narratives.",
      ko: "시나리오, 세계관 문서, 설정 글, 사변적 서사를 중심으로 축적하는 텍스트 기반 자산입니다.",
    },
    tag: "Narrative / Text",
    image: "/media/nomadic city_story/modular_habitat.jpg",
  },
];

export default function ProjectsPage() {
  const { text } = useLanguage();

  return (
    <div className={styles.page}>
      {/* Hero */}
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

      {/* Project List */}
      <section className={styles.list}>
        {PROJECTS.map((project) => (
          <motion.div
            key={project.num}
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
                  <button className="ghost-btn" style={{ marginTop: "24px" }}>
                    VIEW PROJECT <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
