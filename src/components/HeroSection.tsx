"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, ArrowRight, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [showReel, setShowReel] = useState(false);
  const { text } = useLanguage();

  return (
    <>
      <section className={styles.hero} id="hero">
        {/* Background Video */}
        <div className={styles.videoBg}>
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
          <div className={styles.overlay} />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <motion.h1
            className={`${styles.title} display-xxl`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            NOMADIC
          </motion.h1>

          <motion.p
            className={styles.slogan}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {text({
              en: "A personal archive today. A collective city tomorrow.",
              ko: "오늘의 개인 아카이브에서 내일의 공동 도시로.",
            })}
          </motion.p>

          <motion.button
            className={styles.playBtn}
            onClick={() => setShowReel(true)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            id="hero-play-reel"
          >
            <Play size={14} />
            <span>PLAY REEL</span>
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>SCROLL</span>
          <ArrowRight size={12} />
        </div>
      </section>

      {/* Video Reel Modal */}
      <AnimatePresence>
        {showReel && (
          <motion.div
            className="video-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowReel(false)}
          >
            <button
              className="video-overlay-close"
              onClick={() => setShowReel(false)}
              aria-label="Close video"
            >
              <X size={24} />
            </button>
            <video
              autoPlay
              controls
              playsInline
              onClick={(e) => e.stopPropagation()}
            >
              <source src="/media/hero.mp4" type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
