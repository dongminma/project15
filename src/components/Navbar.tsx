"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useLanguage } from "./LanguageProvider";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "WORLD", href: "/world" },
  { label: "CINEMA", href: "/cinema" },
  { label: "CITIZEN", href: "/citizen" },
  { label: "JOURNAL", href: "/journal" },
  { label: "ABOUT", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function changeLanguage(nextLanguage: "en" | "ko") {
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.brand}>
            <span className={styles.logo}>NOMADIC</span>
            <span className={styles.tagline}>A World Under Construction</span>
          </Link>

          <div className={styles.navControls}>
            <div className={styles.links}>
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`${styles.link} ${active ? styles.active : ""}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className={styles.language} aria-label="Language">
              <button
                type="button"
                className={language === "en" ? styles.languageActive : ""}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
              <span>/</span>
              <button
                type="button"
                className={language === "ko" ? styles.languageActive : ""}
                onClick={() => changeLanguage("ko")}
              >
                KR
              </button>
            </div>
          </div>

          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className={`${styles.bar} ${mobileOpen ? styles.open : ""}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.open : ""}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.mobileHeader}>
              <p className={styles.mobileEyebrow}>NOMADIC / INDEX 001</p>
              <div className={styles.language}>
                <button
                  type="button"
                  className={language === "en" ? styles.languageActive : ""}
                  onClick={() => changeLanguage("en")}
                >
                  EN
                </button>
                <span>/</span>
                <button
                  type="button"
                  className={language === "ko" ? styles.languageActive : ""}
                  onClick={() => changeLanguage("ko")}
                >
                  KR
                </button>
              </div>
            </div>
            <div className={styles.mobileLinks}>
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className={styles.mobileLink}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>0{index + 1}</span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
