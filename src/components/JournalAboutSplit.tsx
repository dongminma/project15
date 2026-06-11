"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import styles from "./JournalAboutSplit.module.css";

const ARTICLES = [
  { date: "2024.04.30", title: "Why I started NOMADIC" },
  { date: "2024.04.11", title: "Making a city with AI" },
  { date: "2024.04.03", title: "Architecture after AI" },
  { date: "2024.04.02", title: "The city that keeps moving" },
  { date: "2024.03.28", title: "Notes on failure, boredom, and unfinished projects" },
];

export default function JournalAboutSplit() {
  return (
    <section className={`section section-border ${styles.split}`} id="journal-about">
      <div className="container-wide">
        <div className={styles.grid}>
          {/* Journal Side */}
          <motion.div
            className={styles.journal}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="section-header">
              <h2 className={styles.sectionTitle}>JOURNAL</h2>
              <Link href="/journal" className="link-arrow" id="journal-view-all">
                VIEW ALL ARTICLES <ArrowRight size={14} />
              </Link>
            </div>

            <ul className={styles.articleList}>
              {ARTICLES.map((article, i) => (
                <li key={i} className={styles.articleItem}>
                  <Link href="/journal" className={styles.articleLink}>
                    <span className={styles.date}>{article.date}</span>
                    <span className={styles.articleTitle}>{article.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* About Side */}
          <motion.div
            className={styles.about}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="section-header">
              <h2 className={styles.sectionTitle}>ABOUT</h2>
              <Link href="/about" className="link-arrow" id="about-founder">
                MEET THE FOUNDER <ArrowRight size={14} />
              </Link>
            </div>

            <div className={styles.founderCard}>
              <div className={styles.founderImageWrap}>
                <img
                  src="/media/about-members.png"
                  alt="NOMADIC members"
                  className={styles.founderImage}
                  loading="lazy"
                />
                <div className={styles.founderOverlay} />
              </div>
              <div className={styles.founderContent}>
                <p className={styles.founderText}>
                  NOMADIC was founded by Dongmin Ma as a personal archive for
                  architectural imagination, cinematic experiments, and AI-based
                  visual storytelling.
                </p>
                <Link href="/about" className="link-arrow" id="about-learn-more">
                  LEARN MORE <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
