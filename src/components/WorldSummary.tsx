"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import styles from "./WorldSummary.module.css";

const CATEGORIES = [
  { title: "ATLAS", desc: { en: "Maps and Territories", ko: "지도와 영토" } },
  { title: "DISTRICTS", desc: { en: "Areas and Zones", ko: "구역과 지역" } },
  { title: "CITIZENS", desc: { en: "People and Beings", ko: "사람과 존재들" } },
  { title: "MOBILITY", desc: { en: "Movement Systems", ko: "이동 시스템" } },
  { title: "INFRASTRUCTURE", desc: { en: "Systems and Networks", ko: "시스템과 네트워크" } },
  { title: "TIMELINE", desc: { en: "History and Future", ko: "역사와 미래" } },
];

export default function WorldSummary() {
  const { text } = useLanguage();

  return (
    <section className={`section section-border ${styles.world}`} id="world-summary">
      <div className="container-wide">
        <div className="section-header">
          <h2 className="display-lg">WORLD</h2>
          <Link href="/world" className="link-arrow" id="world-enter">
            ENTER THE WORLD <ArrowRight size={14} />
          </Link>
        </div>

        <div className={styles.grid}>
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <Link href="/world" className={styles.cardLink}>
                <span className={styles.index}>0{i + 1}</span>
                <h3 className={styles.title}>{cat.title}</h3>
                <p className={styles.desc}>{text(cat.desc)}</p>
                <ArrowRight size={14} className={styles.arrow} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
