import Link from "next/link";
import styles from "./Footer.module.css";
export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className="section-title">¿Colaboramos?</p>
        <button className="cta-button">Contáctanos</button>
        <div className={styles.footer_links}>
          <div className={styles.footer_links_row}>
            <a href="tel:+34640715801">640 715 801</a>
            {/* <div className="social-links">
              <a href="https://www.facebook.com/explotacionweb" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.5 2h-13A2.5 2.5 0 0 0 3 4.5v15A2.5 2.5 0 0 0 5.5 22h13a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 18.5 2zM12 18.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13zm5.5-6.5h-2.25a.75.75 0 0 1 0-1.5H17v-2.25a.75.75 0 0 1 1.5 0V11h2.25a.75.75 0 0 1 0 1.5H18v2.25a.75.75 0 0 1-1.5 0V12z" fill="currentColor"/></svg>
              </a>
              <a href="https://www.instagram.com/explotacionweb/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4.5-11a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5zm-9 0a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5zm9 6.5a6.5 6.5 0 0 1-13 0h13z" fill="currentColor"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/explotacion-web/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18v18H3V3zm4.5 15h-2v-6h2v6zm-1-7a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 6.5 13zm9 7h-2v-3.5c0-1.1-.9-2-2-2s-2 .9-2 2V20h-2v-6h2v1a2 2 0 0 1 2-1 2 2 0 0 1 2 2V20z" fill="currentColor"/></svg>
              </a>
            </div> */}
          </div>
          <a href="mailto:soporte@explotacionweb.es">soporte@explotacionweb.es</a>
        </div>
        <div className={styles.footer_legal}>
          <ul className={styles.footer_legal_links}>
            <li><Link href="/aviso-legal">Aviso legal</Link></li>
            <li><Link href="/politica-privacidad">Política de privacidad</Link></li>
            <li><Link href="/politica-cookies">Política de cookies</Link></li>  
          </ul>
          <p>Copyright 2022 Explotación Web Powered by The Mood Project</p>
        </div>
      </div>
    </footer>
  );
}

