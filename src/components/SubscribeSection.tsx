"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import styles from "./SubscribeSection.module.css";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { text } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className={`section section-border ${styles.subscribe}`} id="subscribe">
      <div className="container-wide">
        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.left}>
            <h2 className={styles.title}>Stay Updated</h2>
            <p className={styles.desc}>
              {text({
                en: "Subscribe to receive updates on new projects, journal entries, and world expansion.",
                ko: "새 프로젝트, 저널 글, 세계관 확장 소식을 받아보세요.",
              })}
            </p>
          </div>

          <div className={styles.right}>
            {submitted ? (
              <p className={styles.thanks}>
                {text({
                  en: "Thank you for subscribing.",
                  ko: "구독해주셔서 감사합니다.",
                })}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  type="email"
                  placeholder={text({
                    en: "Enter your email",
                    ko: "이메일을 입력하세요",
                  })}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                  id="subscribe-email"
                  required
                />
                <button type="submit" className={styles.submitBtn} id="subscribe-submit">
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
