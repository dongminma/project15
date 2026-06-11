"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "./LanguageProvider";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "PROJECTS", href: "/projects" },
  { label: "WORLD", href: "/world" },
  { label: "JOURNAL", href: "/journal" },
  { label: "ABOUT", href: "/about" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} id="nav-logo">
            NOMADIC
          </Link>

          <div className={styles.links}>
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <Link href={link.href} className={styles.link} id={`nav-${link.label.toLowerCase()}`}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className={styles.right}>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
              >
                {link.label}
              </a>
            ))}
            <div className={styles.languageToggle} aria-label="Language selector">
              <button
                type="button"
                className={`${styles.languageButton} ${
                  language === "en" ? styles.languageActive : ""
                }`}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
              <span className={styles.languageDivider}>/</span>
              <button
                type="button"
                className={`${styles.languageButton} ${
                  language === "ko" ? styles.languageActive : ""
                }`}
                onClick={() => setLanguage("ko")}
              >
                KR
              </button>
            </div>
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="nav-hamburger"
          >
            <span className={`${styles.bar} ${mobileOpen ? styles.open : ""}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.open : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileLinks}>
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    className={styles.mobileLink}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className={styles.mobileSocial}>
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mobileSocialLink}
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
              <div className={styles.mobileLanguage}>
                <button
                  type="button"
                  className={`${styles.languageButton} ${
                    language === "en" ? styles.languageActive : ""
                  }`}
                  onClick={() => setLanguage("en")}
                >
                  ENGLISH
                </button>
                <button
                  type="button"
                  className={`${styles.languageButton} ${
                    language === "ko" ? styles.languageActive : ""
                  }`}
                  onClick={() => setLanguage("ko")}
                >
                  KOREAN
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
