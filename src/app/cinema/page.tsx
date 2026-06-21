"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "../worldbook.module.css";

const COLLECTIONS = [
  {
    code: { en: "SERIES 001", ko: "시리즈 001" },
    title: { en: "Hunters Series", ko: "헌터즈 시리즈" },
    description: {
      en: "Ongoing cinematic universe.",
      ko: "계속 확장되는 시네마틱 유니버스.",
    },
    details: {
      en: "Seasons, evolving characters, and an expanding world.",
      ko: "시즌, 성장하는 캐릭터와 확장되는 세계관.",
    },
    works: [
      { en: "Episode 01", ko: "에피소드 01" },
      { en: "Episode 02", ko: "에피소드 02" },
      { en: "Episode 03", ko: "에피소드 03" },
      { en: "More to come", ko: "계속 공개 예정" },
    ],
    type: "video",
    src: "/media/projects-hero.mp4",
  },
  {
    code: { en: "LIVE ACTION 001", ko: "실사화 001" },
    title: { en: "Live Action", ko: "라이브 액션" },
    description: {
      en: "Worlds brought into reality.",
      ko: "세계를 현실로 구현합니다.",
    },
    details: {
      en: "AI live-action films with cinematic worlds, characters, and atmosphere.",
      ko: "영화적 세계와 인물, 분위기를 구현하는 AI 실사 영상.",
    },
    works: [
      { en: "Cyber Monk", ko: "사이버 몽크" },
      { en: "Noah's Ark", ko: "노아의 방주" },
      { en: "Future City", ko: "퓨처 시티" },
      { en: "Nomadic City", ko: "노마딕 시티" },
    ],
    type: "image",
    src: "/media/live-action-hiroshi.jpg",
  },
  {
    code: { en: "NOMADIC ORIGINALS", ko: "노마딕 오리지널" },
    title: { en: "Nomadic Films", ko: "노마딕 필름" },
    description: {
      en: "Original short films and visual stories.",
      ko: "오리지널 단편 영화와 비주얼 스토리.",
    },
    details: {
      en: "The open film archive of NOMADIC — short films, music videos, journeys, architecture, and experiments.",
      ko: "단편, 뮤직비디오, 여행, 건축과 실험 영상을 담는 NOMADIC의 열린 필름 아카이브.",
    },
    works: [
      { en: "The Last Train", ko: "마지막 열차" },
      { en: "Citizen 024", ko: "시민 024" },
      { en: "Rain in Seoul", ko: "서울의 비" },
      { en: "The Architect", ko: "건축가" },
    ],
    type: "image",
    src: "/media/nomadic-films-portrait.png",
    featured: true,
  },
];

export default function CinemaPage() {
  const { text } = useLanguage();

  return (
    <div className={styles.page}>
      <section
        className={styles.hero}
        style={{ backgroundImage: "url('/media/hunter-004.jpg')" }}
      >
        <p className={styles.eyebrow}>SECTION 02 / MOVING IMAGE ARCHIVE</p>
        <div>
          <h1>CINEMA</h1>
          <div className={styles.heroBottom}>
            <p className={styles.meta}>THREE CINEMATIC TERRITORIES</p>
            <p>
              {text({
                en: "WORLD is where the universe is read. CINEMA is where it becomes visible.",
                ko: "WORLD가 세계를 읽는 곳이라면, CINEMA는 그 세계를 보는 곳입니다.",
              })}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.index}>
        <div className={styles.indexHeader}>
          <span className={styles.meta}>CINEMA INDEX</span>
          <span className={styles.meta}>03 COLLECTIONS</span>
        </div>
      </section>

      <section className={styles.mediaGrid}>
        {COLLECTIONS.map((collection) => (
          <article
            className={`${styles.mediaCard} ${
              collection.featured ? styles.mediaFeatured : ""
            }`}
            key={collection.code.en}
          >
            {collection.type === "video" ? (
              <video autoPlay muted loop playsInline preload="metadata">
                <source src={collection.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image src={collection.src} alt="" fill sizes="100vw" />
            )}

            <div className={styles.mediaTop}>
              <div className={styles.mediaMeta}>
                <span className={styles.mediaMark}>N</span>
                <p className={styles.meta}>{collection.code.en}</p>
              </div>
              {collection.featured && (
                <span className={styles.featuredLabel}>
                  CORE ARCHIVE
                </span>
              )}
            </div>

            <div className={styles.mediaContent}>
              <div className={styles.mediaTitle}>
                <div>
                  <h2>{collection.title.en}</h2>
                  <p className={styles.mediaDescription}>
                    {text(collection.description)}
                  </p>
                </div>
                <span aria-hidden="true">↗</span>
              </div>

              <div className={styles.mediaDetails}>
                <p>{text(collection.details)}</p>
                <ul>
                  {collection.works.map((work) => (
                    <li key={work.en}>{text(work)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
