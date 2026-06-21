"use client";

import { useLanguage } from "@/components/LanguageProvider";
import styles from "../worldbook.module.css";

const CITIZENS = [
  ["N-001", "Citizen 001", "시민 001", "Seoul, Korea", "서울, 한국", "Founder", "창립자", "Founding Citizen", "창립 시민"],
  ["N-002", "Citizen 002", "시민 002", "Seoul, Korea", "서울, 한국", "Architect", "건축가", "Founding Citizen", "창립 시민"],
  ["N-003", "Citizen 003", "시민 003", "Busan, Korea", "부산, 한국", "Filmmaker", "필름메이커", "Founding Citizen", "창립 시민"],
  ["N-014", "Citizen 014", "시민 014", "Seoul, Korea", "서울, 한국", "Designer", "디자이너", "Founding Citizen", "창립 시민"],
  ["N-021", "Citizen 021", "시민 021", "Unknown", "미상", "Researcher", "연구자", "Founding Citizen", "창립 시민"],
  ["N-030", "Citizen 030", "시민 030", "Unregistered", "미등록", "Witness", "증인", "Pending", "대기 중"],
];

export default function CitizenPage() {
  const { language, text } = useLanguage();

  return (
    <div className={styles.page}>
      <section
        className={styles.hero}
        style={{ backgroundImage: "url('/media/about-members.png')" }}
      >
        <p className={styles.eyebrow}>SECTION 03 / CIVIC REGISTRY</p>
        <div>
          <h1>CITIZEN</h1>
          <div className={styles.heroBottom}>
            <p className={styles.meta}>FOUNDING POPULATION / 30</p>
            <p>
              {text({
                en: "They are not workers behind the project. They are the first citizens and witnesses of the world.",
                ko: "이들은 프로젝트 뒤의 작업자가 아닙니다. 이 세계의 첫 시민이자 증인입니다.",
              })}
            </p>
          </div>
        </div>
      </section>
      <section className={styles.index}>
        <div className={styles.indexHeader}>
          <span className={styles.meta}>FOUNDING CITIZENS</span>
          <span className={styles.meta}>REGISTRY OPEN / 2026</span>
        </div>
      </section>
      <section className={styles.citizenGrid}>
        {CITIZENS.map(
          ([id, nameEn, , originEn, originKo, jobEn, jobKo, statusEn, statusKo]) => (
            <article className={styles.citizenCard} key={id}>
              <div>
                <p className={styles.number}>{id}</p>
                <h2>{nameEn}</h2>
              </div>
              <dl className={styles.data}>
                <dt>{text({ en: "Origin", ko: "출신" })}</dt>
                <dd>{language === "en" ? originEn : originKo}</dd>
                <dt>{text({ en: "Occupation", ko: "직업" })}</dt>
                <dd>{language === "en" ? jobEn : jobKo}</dd>
                <dt>{text({ en: "Status", ko: "상태" })}</dt>
                <dd>{language === "en" ? statusEn : statusKo}</dd>
                <dt>{text({ en: "Joined", ko: "가입" })}</dt>
                <dd>2026</dd>
              </dl>
            </article>
          )
        )}
      </section>
    </div>
  );
}
