"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import styles from "./Footer.module.css";

const LINKS = [
  { label: "WORLD", href: "/world" },
  { label: "CINEMA", href: "/cinema" },
  { label: "CITIZEN", href: "/citizen" },
  { label: "JOURNAL", href: "/journal" },
  { label: "ABOUT", href: "/about" },
];

export default function Footer() {
  const { text } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <p className={styles.logo}>NOMADIC</p>
          <p className={styles.statement}>A World Under Construction</p>
        </div>
        <nav className={styles.links} aria-label="Footer navigation">
          {LINKS.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.bottom}>
        <span>
          EST. 2026 / TERRITORY UNKNOWN
        </span>
        <span>
          {text({
            en: "THE WORLD REMAINS UNFINISHED.",
            ko: "THE WORLD REMAINS UNFINISHED.",
          })}
        </span>
      </div>
    </footer>
  );
}
