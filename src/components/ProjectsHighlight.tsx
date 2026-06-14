"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import styles from "./ProjectsHighlight.module.css";

export default function ProjectsHighlight() {
  const { text } = useLanguage();

  return (
    <section className={`section section-border ${styles.projects}`} id="projects-highlight">
      <div className="container-wide">
        <div className="section-header">
          <h2 className="display-lg">PROJECTS</h2>
          <Link href="/projects" className="link-arrow" id="projects-view-all">
            VIEW ALL PROJECTS <ArrowRight size={14} />
          </Link>
        </div>

        <div className={styles.feature}>
          <motion.div
            className={styles.imageWrap}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="/media/nomadic-intro-projects.png"
              alt="Nomadic speculative city"
              className={styles.image}
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className={styles.copy}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          >
            <p className={styles.lead}>
              {text({
                en: "The future belongs to those who can reinvent themselves.",
                ko: "미래는 스스로를 다시 발명할 수 있는 사람들의 것입니다.",
              })}
            </p>
            <p>
              {text({
                en: "Nomadic is a multidisciplinary creative studio exploring architecture, cinematic storytelling, artificial intelligence, and speculative futures. Each project is an experiment, each world a question, and each story a glimpse into what humanity might become.",
                ko: "Nomadic은 건축, 시네마틱 스토리텔링, 인공지능, 사변적 미래를 탐구하는 다분야 크리에이티브 스튜디오입니다. 각각의 프로젝트는 하나의 실험이고, 각각의 세계는 하나의 질문이며, 각각의 이야기는 인류가 무엇이 될 수 있는지에 대한 작은 단서입니다.",
              })}
            </p>
            <p>
              {text({
                en: "We believe everyone will need a second identity in the age of AI.",
                ko: "우리는 AI 시대에 누구나 두 번째 정체성이 필요해질 것이라고 믿습니다.",
              })}
            </p>
            <p className={styles.closing}>
              {text({ en: "Welcome to Nomadic.", ko: "Nomadic에 오신 것을 환영합니다." })}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
