"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import styles from "./IntroSection.module.css";

export default function IntroSection() {
  const { text } = useLanguage();

  return (
    <section className={`section ${styles.intro}`} id="intro">
      <div className="container-wide">
        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="display-lg">
              We imagine, build, and record worlds that do not exist yet.
            </h2>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="body-lg">
              {text({
                en: "NOMADIC is an archive of artificial worlds, cinematic experiments, and unfinished cities. It begins with one person's work, and is designed to expand into a collective of creators, citizens, and moving stories.",
                ko: "NOMADIC은 인공적인 세계, 시네마틱 실험, 아직 완성되지 않은 도시들을 기록하는 아카이브입니다. 한 사람의 작업에서 시작하지만, 창작자와 시민, 움직이는 이야기들이 함께 확장되는 집합체로 설계되어 있습니다.",
              })}
            </p>
            <Link href="/projects" className="link-arrow" id="intro-explore">
              EXPLORE NOMADIC <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
