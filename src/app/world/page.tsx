"use client";

import { useLanguage } from "@/components/LanguageProvider";
import styles from "../worldbook.module.css";

const CHAPTERS = [
  {
    number: "01",
    title: { en: "Architecture", ko: "건축" },
    lead: {
      en: "Structures for a civilization that cannot settle.",
      ko: "정착할 수 없는 문명을 위한 구조체.",
    },
    copy: {
      en: "Cities, vessels, monuments, and modular habitats built to change position, scale, and meaning.",
      ko: "위치와 규모, 의미를 바꾸도록 설계된 도시, 선박, 기념물과 모듈형 거주지.",
    },
  },
  {
    number: "02",
    title: { en: "Mobility", ko: "이동" },
    lead: {
      en: "Movement is not transport. It is government.",
      ko: "이동은 운송이 아니다. 그것은 통치다.",
    },
    copy: {
      en: "Moving cities, migration corridors, autonomous infrastructure, and systems designed for permanent departure.",
      ko: "움직이는 도시, 이주 회랑, 자율 인프라와 영구적인 출발을 위해 설계된 시스템.",
    },
  },
  {
    number: "03",
    title: { en: "Belief", ko: "믿음" },
    lead: {
      en: "New intelligence produces new gods.",
      ko: "새로운 지능은 새로운 신을 만든다.",
    },
    copy: {
      en: "AI religions, Cyber Monks, machine rituals, and the forms of faith that emerge after certainty collapses.",
      ko: "AI 종교, 사이버 몽크, 기계 의식과 확실성이 무너진 뒤 등장하는 새로운 믿음.",
    },
  },
  {
    number: "04",
    title: { en: "Society", ko: "사회" },
    lead: {
      en: "A citizen may exist before a nation.",
      ko: "시민은 국가보다 먼저 존재할 수 있다.",
    },
    copy: {
      en: "Identity, citizenship, class, labor, economy, and power inside a world without fixed borders.",
      ko: "고정된 국경이 없는 세계 안의 정체성, 시민권, 계급, 노동, 경제와 권력.",
    },
  },
  {
    number: "05",
    title: { en: "Survival", ko: "생존" },
    lead: {
      en: "Every city is also an ark.",
      ko: "모든 도시는 하나의 방주이기도 하다.",
    },
    copy: {
      en: "Floods, disaster protocols, resource systems, Noah's Ark, and the architecture of collective survival.",
      ko: "홍수, 재난 프로토콜, 자원 시스템, 노아의 방주와 집단 생존을 위한 건축.",
    },
  },
  {
    number: "06",
    title: { en: "Narrative", ko: "서사" },
    lead: {
      en: "History begins as a rumor.",
      ko: "역사는 소문으로 시작된다.",
    },
    copy: {
      en: "Hunters, characters, conflicts, disappearances, and the evolving timeline of the NOMADIC world.",
      ko: "헌터즈, 인물, 갈등, 실종과 계속 확장되는 NOMADIC 세계의 타임라인.",
    },
  },
];

export default function WorldPage() {
  const { text } = useLanguage();

  return (
    <div className={styles.page}>
      <section
        className={styles.hero}
        style={{ backgroundImage: "url('/media/nomadic-city.jpg')" }}
      >
        <p className={styles.eyebrow}>SECTION 01 / WORLD SYSTEM</p>
        <div>
          <h1>WORLD</h1>
          <div className={styles.heroBottom}>
            <p className={styles.meta}>VERSION 0.1 / OPEN FILE</p>
            <p>
              {text({
                en: "Not a catalogue of works. A field manual for a civilization still being invented.",
                ko: "작품 목록이 아닙니다. 아직 발명 중인 문명을 위한 현장 설명서입니다.",
              })}
            </p>
          </div>
        </div>
      </section>
      <section className={styles.index}>
        <div className={styles.indexHeader}>
          <span className={styles.meta}>WORLD INDEX</span>
          <span className={styles.meta}>06 CHAPTERS</span>
        </div>
        <div className={styles.list}>
          {CHAPTERS.map((chapter) => (
            <article className={styles.row} key={chapter.number}>
              <span className={styles.number}>{chapter.number}</span>
              <h2>{chapter.title.en}</h2>
              <p className={styles.copy}>
                <strong>{text(chapter.lead)}</strong>
                {text(chapter.copy)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
