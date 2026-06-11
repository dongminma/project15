"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./page.module.css";

type LocalizedText = {
  en: string;
  ko: string;
};

type Member = {
  name: string;
  type: string;
  role: LocalizedText;
  image?: string;
  bio?: LocalizedText;
  disabled?: boolean;
};

const FOUNDER: Member = {
  name: "DONGMIN MA",
  type: "HUMAN",
  role: {
    en: "Founder / Architect / Filmmaker / AI Creator",
    ko: "창립자 / 건축가 / 필름메이커 / AI 크리에이터",
  },
  image: "/media/profile.jpg",
  bio: {
    en: "Trained in architecture, Dongmin Ma explores the boundary between reality and imagination through architecture, film, AI-generated imagery, and worldbuilding.",
    ko: "건축을 전공한 마동민은 건축, 영화, AI 생성 이미지, 세계관 구축을 통해 현실과 상상의 경계를 탐구합니다.",
  },
};

const MEMBERS: Member[] = [
  FOUNDER,
  {
    name: "KIM SUNGSOO",
    type: "HUMAN",
    role: {
      en: "Developer / AI Specialist / Architecture-trained Automation & Software Developer",
      ko: "개발자 / AI 전문가 / 건축 기반 자동화 및 프로그램 개발자",
    },
    image: "/media/kim-sungsoo.png",
    bio: {
      en: "Kim Sungsoo is a developer and AI specialist trained in architecture. His work connects automation, software development, and AI-driven systems for creative and practical workflows.",
      ko: "김성수는 건축을 전공한 개발자이자 AI 관련 전문가입니다. 자동화, 프로그램 개발, AI 기반 시스템을 연결해 창작과 실무에 필요한 워크플로를 구축합니다.",
    },
  },
  {
    name: "BENJAMIN JE",
    type: "FICTIONAL",
    role: {
      en: "Philosopher / Explorer / Novelist / Historian of NOMADIC CITY",
      ko: "철학자 / 탐험가 / 소설가 / 노마딕시티의 역사학자",
    },
    image: "/media/benjamin-je.png",
    bio: {
      en: "Benjamin Je is a philosopher, explorer, and novelist who wanders in search of the lost history of humanity. He studies the future and present condition of humankind, the law of equivalent exchange, and the fragile balance between memory, civilization, and survival. Within NOMADIC CITY, he records history as both witness and questioner.",
      ko: "밴자민 제는 사라진 인류의 역사를 찾아 헤매는 철학자이자 탐험가, 소설가입니다. 그는 인류의 현재와 미래, 등가교환의 법칙, 기억과 문명과 생존 사이의 균형을 연구하며, NOMADIC CITY 안에서 목격자이자 질문자로서 역사를 기록합니다.",
    },
  },
  {
    name: "ADD",
    type: "NEXT",
    role: { en: "Future member slot", ko: "추가 멤버 자리" },
    disabled: true,
  },
];

function getTypeColor(type: string) {
  switch (type) {
    case "HUMAN":
      return "#ffffff";
    case "AI":
      return "#6eb5ff";
    case "FICTIONAL":
      return "#c4a3ff";
    default:
      return "#5a5a5f";
  }
}

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const memberDetailRef = useRef<HTMLElement>(null);
  const { text } = useLanguage();

  function openMember(member: Member) {
    if (member.disabled) {
      return;
    }
    setSelectedMember(member);
    window.setTimeout(() => {
      memberDetailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img
            src="/media/about-members.png"
            alt=""
            className={styles.heroImage}
            aria-hidden="true"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container-wide ${styles.heroContent}`}>
          <motion.h1
            className="display-xxl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ABOUT NOMADIC
          </motion.h1>
          <motion.div
            className={styles.heroCopy}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              {text({
                en: "NOMADIC was founded by Dongmin Ma as a personal archive for architectural imagination, cinematic experiments, and AI-based visual storytelling.",
                ko: "NOMADIC은 마동민이 건축적 상상력, 시네마틱 실험, AI 기반 비주얼 스토리텔링을 기록하기 위해 시작한 개인 아카이브입니다.",
              })}
            </p>
            <p>
              {text({
                en: "It begins with one person's work, but it is designed to expand into a small constellation of collaborators, fictional citizens, and artificial creators.",
                ko: "한 사람의 작업에서 시작하지만, 협업자와 가상의 시민, 인공 창작자들이 함께 확장되는 작은 세계로 설계되어 있습니다.",
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className={`section section-border ${styles.founder}`}>
        <div className="container-wide">
          <div className={styles.founderGrid}>
            <motion.div
              className={styles.founderImageWrap}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/media/profile.jpg"
                alt="Dongmin Ma"
                className={styles.founderImage}
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className={styles.founderInfo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className={styles.label}>FOUNDER</span>
              <h2 className={styles.founderName}>DONGMIN MA</h2>
              <p className={styles.founderRole}>
                {text(FOUNDER.role)}
              </p>
              <p className={styles.founderBio}>
                {text(FOUNDER.bio ?? { en: "", ko: "" })}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Members */}
      <section className={`section section-border ${styles.members}`}>
        <div className="container-wide">
          <div className="section-header">
            <h2 className="display-lg">MEMBERS</h2>
          </div>
          <div className={styles.memberGrid}>
            {MEMBERS.map((member, i) => (
              <motion.button
                key={member.name}
                type="button"
                className={`${styles.memberCard} ${
                  member.disabled ? styles.memberCardDisabled : ""
                }`}
                onClick={() => openMember(member)}
                disabled={member.disabled}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <div className={styles.memberTop}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <span
                    className={styles.memberType}
                    style={{ color: getTypeColor(member.type) }}
                  >
                    {member.type}
                  </span>
                </div>
                <p className={styles.memberRole}>{text(member.role)}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {selectedMember && (
        <section
          ref={memberDetailRef}
          className={`section section-border ${styles.memberDetail}`}
        >
          <div className="container-wide">
            <motion.div
              key={selectedMember.name}
              className={styles.memberDetailGrid}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              {selectedMember.image && (
                <div className={styles.memberDetailImageWrap}>
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className={styles.memberDetailImage}
                    loading="lazy"
                  />
                </div>
              )}
              <div className={styles.memberDetailInfo}>
                <span className={styles.label}>{selectedMember.type}</span>
                <h2 className={styles.founderName}>{selectedMember.name}</h2>
                <p className={styles.founderRole}>{text(selectedMember.role)}</p>
                {selectedMember.bio && (
                  <p className={styles.founderBio}>{text(selectedMember.bio)}</p>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
