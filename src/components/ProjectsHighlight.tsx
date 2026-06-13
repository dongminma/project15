"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import styles from "./ProjectsHighlight.module.css";

const PROJECTS = [
  {
    num: "01",
    title: "HERTZ SERIES",
    subtitle: "Cinematic Experiments",
    tag: "Series / Cinematic",
    image: "/media/hertz-series.jpg",
  },
  {
    num: "02",
    title: "NOMADIC CITY",
    subtitle: "Hong Kong Prototype",
    tag: "Worldbuilding / Architecture",
    image: "/media/nomadic-city.jpg",
  },
  {
    num: "03",
    title: "LIVE ACTION STUDIES",
    subtitle: "Emotional Realism",
    tag: "AI + Live Action",
    image: "/media/live-action-studies.jpg",
  },
  {
    num: "04",
    title: "NOMADIC ARCHITECTURE",
    subtitle: "Real & Virtual",
    tag: "Architecture / Design",
    image: "/media/architect/nomadic-architecture-04.png",
  },
  {
    num: "05",
    title: "VISUAL EXPERIMENTS",
    subtitle: "Image / Mood / Character",
    tag: "Image / Mood",
    image: "/media/nomadic city_story/floating_structure.png",
  },
  {
    num: "06",
    title: "WRITING & SCENARIOS",
    subtitle: "Narratives & Worldbuilding",
    tag: "Narrative / Text",
    image: "/media/nomadic city_story/modular_habitat.jpg",
  },
];

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

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.num}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            >
              <Link href="/projects" className={styles.cardLink}>
                <div className={styles.imageWrap}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.image}
                    loading="lazy"
                  />
                  <div className={styles.imageOverlay} />
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.num}>{project.num}.</span>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.subtitle}>{project.subtitle}</p>
                  <span className={styles.tag}>{project.tag}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
