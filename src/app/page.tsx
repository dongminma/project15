"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./page.module.css";

const ENTRIES = [
  {
    index: "01",
    title: { en: "Enter World", ko: "세계로 입장하기" },
    href: "/world",
    copy: {
      en: "Architecture, mobility, belief, society, survival, and narrative.",
      ko: "건축, 이동, 믿음, 사회, 생존 그리고 서사.",
    },
  },
  {
    index: "02",
    title: { en: "Watch Cinema", ko: "시네마 보기" },
    href: "/cinema",
    copy: {
      en: "Moving images from a world that does not yet exist.",
      ko: "아직 존재하지 않는 세계에서 온 움직이는 이미지.",
    },
  },
  {
    index: "03",
    title: { en: "Become a Citizen", ko: "시민이 되기" },
    href: "/citizen",
    copy: {
      en: "Join the first witnesses of NOMADIC.",
      ko: "노마딕의 첫 번째 증인들과 함께하기.",
    },
  },
];

export default function Home() {
  const { text } = useLanguage();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/media/nomadic-main-reel.mp4" type="video/mp4" />
        </video>
        <div className={styles.veil} />
        <div className={styles.coordinates}>37°33&apos;N / 126°58&apos;E</div>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>WORLD-BUILDING PROJECT / EST. 2026</p>
          <h1>NOMADIC</h1>
          <p className={styles.subtitle}>A World Under Construction</p>
        </div>
        <p className={styles.heroStatement}>
          {text({
            en: "NOMADIC is a world-building project for those who refuse to stand still.",
            ko: "NOMADIC은 멈춰 서기를 거부하는 사람들을 위한 세계 구축 프로젝트입니다.",
          })}
        </p>
      </section>

      <section className={styles.manifesto}>
        <div className={styles.manifestoImage} aria-hidden="true">
          <Image
            src="/media/world-under-construction.png"
            alt=""
            fill
            sizes="100vw"
          />
        </div>
        <p className={styles.sectionLabel}>000 / DECLARATION</p>
        <div className={styles.manifestoGrid}>
          <h2>THE WORLD IS NOT FINISHED.</h2>
          <div>
            <p>
              {text({
                en: "Cities move. Beliefs mutate. Citizens are invented before their nations exist.",
                ko: "도시는 움직이고, 믿음은 변이한다. 시민은 국가보다 먼저 발명된다.",
              })}
            </p>
            <p>
              {text({
                en: "NOMADIC documents the architecture, rituals, moving images, and witnesses of an unfinished civilization.",
                ko: "NOMADIC은 미완성 문명의 건축, 의식, 움직이는 이미지와 증인들을 기록합니다.",
              })}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.entrySection}>
        <p className={styles.sectionLabel}>001—003 / ENTRY POINTS</p>
        <div className={styles.entries}>
          {ENTRIES.map((entry) => (
            <Link key={entry.index} href={entry.href} className={styles.entry}>
              <span className={styles.entryIndex}>{entry.index}</span>
              <div>
                <h2>{entry.title.en}</h2>
                <p>{text(entry.copy)}</p>
              </div>
              <span className={styles.arrow}>↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.closing}>
        <p>STATUS / ACTIVE CONSTRUCTION</p>
        <h2>NOT A COMPANY.<br />NOT A CITY.<br />A WORLD.</h2>
        <Link href="/about">
          {text({ en: "Read the origin myth ↗", ko: "기원 신화 읽기 ↗" })}
        </Link>
      </section>
    </div>
  );
}
