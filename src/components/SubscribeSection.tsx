"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import styles from "./SubscribeSection.module.css";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
              Subscribe to receive updates on new projects, journal entries, and
              world expansion.
            </p>
          </div>

          <div className={styles.right}>
            {submitted ? (
              <p className={styles.thanks}>Thank you for subscribing.</p>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  type="email"
                  placeholder="Enter your email"
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
