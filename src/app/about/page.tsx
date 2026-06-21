"use client";

import { useLanguage } from "@/components/LanguageProvider";
import styles from "../worldbook.module.css";

export default function AboutPage() {
  const { text } = useLanguage();

  return (
    <div className={styles.page}>
      <section className={styles.myth}>
        <p className={styles.eyebrow}>SECTION 05 / ORIGIN MYTH</p>
        <h2>NOMADIC IS NOT A COMPANY.<br />IT IS NOT A CITY.<br />IT IS A WORLD UNDER CONSTRUCTION.</h2>
        <p className={styles.meta}>FOUNDING RECORD / 2026 / AUTHOR UNKNOWN</p>
      </section>
      <section className={styles.founder}>
        <div>
          <p className={styles.eyebrow}>FOUNDER / FILE 001</p>
          <h2>CITIZEN 001<br />THE FIRST NOMAD</h2>
        </div>
        <dl>
          <dt>{text({ en: "Identity", ko: "정체" })}</dt>
          <dd>{text({ en: "Unknown", ko: "미상" })}</dd>
          <dt>{text({ en: "Origin", ko: "출신" })}</dt>
          <dd>{text({ en: "Seoul, Korea", ko: "서울, 한국" })}</dd>
          <dt>{text({ en: "Role", ko: "역할" })}</dt>
          <dd>
            {text({
              en: "Founder / Witness / World Builder",
              ko: "창립자 / 증인 / 세계 구축자",
            })}
          </dd>
          <dt>{text({ en: "Status", ko: "상태" })}</dt>
          <dd>{text({ en: "Active", ko: "활동 중" })}</dd>
          <dt>{text({ en: "Joined", ko: "가입" })}</dt>
          <dd>2026</dd>
        </dl>
      </section>
    </div>
  );
}
