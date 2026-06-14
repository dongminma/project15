import Link from "next/link";
import styles from "./Footer.module.css";

const FOOTER_COLUMNS = [
  {
    title: "NOMADIC",
    description: "A personal archive today.\nA collective city tomorrow.",
    links: [],
  },
  {
    title: "PROJECTS",
    links: [
      { label: "All Projects", href: "/projects" },
      { label: "Films", href: "/projects" },
      { label: "Cities", href: "/projects" },
      { label: "Visuals", href: "/projects" },
      { label: "Writing", href: "/projects" },
    ],
  },
  {
    title: "WORLD",
    links: [
      { label: "Atlas", href: "/world" },
      { label: "Districts", href: "/world" },
      { label: "Citizens", href: "/world" },
      { label: "Mobility", href: "/world" },
      { label: "Infrastructure", href: "/world" },
      { label: "Timeline", href: "/world" },
    ],
  },
  {
    title: "JOURNAL",
    links: [
      { label: "Essays", href: "/journal" },
      { label: "Process", href: "/journal" },
      { label: "Worldbuilding", href: "/journal" },
      { label: "Research", href: "/journal" },
      { label: "Fragments", href: "/journal" },
    ],
  },
  {
    title: "ABOUT",
    links: [
      { label: "Founder", href: "/about" },
      { label: "Vision", href: "/about" },
      { label: "Collaborators", href: "/about" },
    ],
  },
  {
    title: "CONTACT",
    links: [
      { label: "Email", href: "mailto:hello@nomadic.world" },
      { label: "Instagram", href: "https://www.instagram.com/dongmin009/", external: true },
      { label: "YouTube", href: "https://www.youtube.com/@theterrortubbies", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.inner}>
        <div className={styles.columns}>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className={styles.column}>
              <h4 className={styles.columnTitle}>{col.title}</h4>
              {col.description && (
                <p className={styles.description}>{col.description}</p>
              )}
              {col.links.length > 0 && (
                <ul className={styles.linkList}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.footerLink}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className={styles.footerLink}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2024 NOMADIC. All rights reserved.
          </p>
          <div className={styles.legal}>
            <Link href="#" className={styles.legalLink}>PRIVACY</Link>
            <Link href="#" className={styles.legalLink}>TERMS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
