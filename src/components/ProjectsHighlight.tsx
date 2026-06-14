"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import styles from "./ProjectsHighlight.module.css";

export default function ProjectsHighlight() {
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
              The future belongs to those who can reinvent themselves.
            </p>
            <p>
              Nomadic is a multidisciplinary creative studio exploring architecture,
              cinematic storytelling, artificial intelligence, and speculative futures.
              Each project is an experiment, each world a question, and each story a
              glimpse into what humanity might become.
            </p>
            <p>
              We believe everyone will need a second identity in the age of AI.
            </p>
            <p className={styles.closing}>Welcome to Nomadic.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
