"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./page.module.css";

const CATEGORIES = [
  "ALL",
  "ESSAYS",
  "PROCESS NOTES",
  "WORLD BUILDING",
  "RESEARCH FILES",
  "SCENARIOS",
  "FRAGMENTS",
];

const ARTICLES = [
  {
    date: "2024.04.30",
    title: "Why I started NOMADIC",
    category: "ESSAYS",
    desc: {
      en: "The story behind NOMADIC: why one architect decided to build a personal archive of imagined worlds.",
      ko: "한 건축가가 상상 속 세계를 개인 아카이브로 만들기로 한 이유와 NOMADIC의 시작에 대한 이야기입니다.",
    },
  },
  {
    date: "2024.04.11",
    title: "Making UP Live Action with AI",
    category: "PROCESS NOTES",
    desc: {
      en: "Behind the scenes of reimagining Pixar's UP as a live-action film using AI generation tools.",
      ko: "AI 생성 도구를 활용해 픽사의 UP을 실사 영화처럼 재해석한 작업의 제작 과정입니다.",
    },
  },
  {
    date: "2024.04.08",
    title: "What is an artificial memory?",
    category: "RESEARCH FILES",
    desc: {
      en: "Exploring the concept of manufactured nostalgia and AI-generated memories.",
      ko: "제조된 향수와 AI가 만들어내는 기억이라는 개념을 탐구합니다.",
    },
  },
  {
    date: "2024.04.03",
    title: "Architecture after AI",
    category: "ESSAYS",
    desc: {
      en: "What happens to the profession of architecture when AI can generate buildings faster than humans can design them?",
      ko: "AI가 사람이 설계하는 속도보다 빠르게 건축 이미지를 만들 수 있을 때, 건축이라는 직업은 어떻게 바뀌는지에 대한 글입니다.",
    },
  },
  {
    date: "2024.04.02",
    title: "The city that keeps moving",
    category: "WORLD BUILDING",
    desc: {
      en: "Notes on designing a city that never settles: the philosophical foundations of NOMADIC CITY.",
      ko: "정착하지 않는 도시를 설계하기 위한 노트이자 NOMADIC CITY의 철학적 기반입니다.",
    },
  },
  {
    date: "2024.03.28",
    title: "Notes on failure, boredom, and unfinished projects",
    category: "FRAGMENTS",
    desc: {
      en: "Honest reflections on the creative process: embracing incompleteness as a methodology.",
      ko: "불완전함을 하나의 방법론으로 받아들이는 창작 과정에 대한 솔직한 기록입니다.",
    },
  },
];

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const { text } = useLanguage();

  const filtered =
    activeCategory === "ALL"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img
            src="/media/journal-hero.png"
            alt=""
            className={styles.heroImage}
            aria-hidden="true"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container-wide ${styles.heroContent}`}>
          <motion.h1
            className="display-xxl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            JOURNAL
          </motion.h1>
          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {text({
              en: "Notes, thoughts, process, writing, and research.",
              ko: "노트, 생각, 과정, 글쓰기, 리서치를 모은 공간입니다.",
            })}
          </motion.p>
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {text({
              en: "A working archive of ideas and inquiry. Reflections on worlds, methods, and the act of building futures.",
              ko: "아이디어와 질문을 계속 축적하는 작업형 아카이브입니다. 세계, 방법론, 미래를 만드는 행위에 대한 기록을 담습니다.",
            })}
          </motion.p>
        </div>
      </section>

      <section className={styles.filters}>
        <div className="container-wide">
          <div className={styles.tabs}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.tab} ${activeCategory === cat ? styles.active : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.articles}>
        <div className="container-wide">
          {filtered.map((article, i) => (
            <motion.article
              key={article.title}
              className={styles.articleRow}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className={styles.articleMeta}>
                <span className={styles.articleDate}>{article.date}</span>
                <span className={styles.articleCategory}>{article.category}</span>
              </div>
              <div className={styles.articleContent}>
                <h2 className={styles.articleTitle}>{article.title}</h2>
                <p className={styles.articleDesc}>{text(article.desc)}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
