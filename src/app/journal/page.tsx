"use client";

import { useLanguage } from "@/components/LanguageProvider";
import styles from "../worldbook.module.css";

const ARTICLES = [
  {
    code: { en: "ESSAY 001", ko: "에세이 001" },
    title: { en: "Why Cities Must Move", ko: "도시는 왜 움직여야 하는가" },
    category: { en: "ESSAYS", ko: "에세이" },
  },
  {
    code: { en: "NOTE 004", ko: "노트 004" },
    title: { en: "The End of Settlement", ko: "정착의 종말" },
    category: { en: "NOTES", ko: "노트" },
  },
  {
    code: { en: "RESEARCH 002", ko: "리서치 002" },
    title: { en: "AI and Religion", ko: "AI와 종교" },
    category: { en: "RESEARCH", ko: "리서치" },
  },
  {
    code: { en: "ESSAY 003", ko: "에세이 003" },
    title: { en: "A World Under Construction", ko: "건설 중인 세계" },
    category: { en: "ESSAYS", ko: "에세이" },
  },
  {
    code: { en: "UPDATE 006", ko: "업데이트 006" },
    title: {
      en: "Founding Citizens: The First Thirty",
      ko: "창립 시민: 최초의 30명",
    },
    category: { en: "UPDATES", ko: "업데이트" },
  },
];

export default function JournalPage() {
  const { text } = useLanguage();

  return (
    <div className={styles.page}>
      <section
        className={styles.hero}
        style={{ backgroundImage: "url('/media/journal-hero.png')" }}
      >
        <p className={styles.eyebrow}>SECTION 04 / FIELD NOTES</p>
        <div>
          <h1>JOURNAL</h1>
          <div className={styles.heroBottom}>
            <p className={styles.meta}>ESSAYS / NOTES / RESEARCH / UPDATES</p>
            <p>
              {text({
                en: "Thoughts recorded while the world is still unstable enough to change.",
                ko: "세계가 아직 변화할 수 있을 만큼 불안정할 때 기록한 생각들.",
              })}
            </p>
          </div>
        </div>
      </section>
      <section className={styles.index}>
        <div className={styles.indexHeader}>
          <span className={styles.meta}>LATEST ENTRIES</span>
          <span className={styles.meta}>ARCHIVE 2026</span>
        </div>
      </section>
      <section className={styles.articleList}>
        {ARTICLES.map((article) => (
          <article className={styles.article} key={article.code.en}>
            <p>{article.code.en}</p>
            <h2>{article.title.en}</h2>
            <p>{article.category.en} ↗</p>
          </article>
        ))}
      </section>
    </div>
  );
}
