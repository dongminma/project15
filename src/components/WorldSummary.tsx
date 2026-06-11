"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import styles from "./WorldSummary.module.css";

const CATEGORIES = [
  { title: "ATLAS", desc: "Maps and Territories" },
  { title: "DISTRICTS", desc: "Areas and Zones" },
  { title: "CITIZENS", desc: "People and Beings" },
  { title: "MOBILITY", desc: "Movement Systems" },
  { title: "INFRASTRUCTURE", desc: "Systems and Networks" },
  { title: "TIMELINE", desc: "History and Future" },
];

export default function WorldSummary() {
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
                <p className={styles.desc}>{cat.desc}</p>
                <ArrowRight size={14} className={styles.arrow} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
