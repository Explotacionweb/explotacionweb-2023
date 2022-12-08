import React from "react";
import Image from "next/image";
import styles from "./MainBanner.module.css";
import Link from "next/link";

export default function MainBanner({ title, content, cta = false }) {
  return (
    <section className={`container ${styles.main_banner}`}>
      <div className={styles.content}>
        <h1 className={styles.h1}>{title}</h1>
        <p
          className={styles.banner_text}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {cta && (
          <Link href="/nosotros" className={`cta-button ${styles.cta_button}`}>
            Descubre más sobre nosotros
          </Link>
        )}
      </div>
      <div className={styles.image}>
        <Image
          src="/img/home_banner.webp"
          fill
          alt="Etiquetto Explotación Web S.L."
          title="Etiquetto Explotación Web S.L."
          sizes="(max-width: 768px) 250px,
          (max-width: 1200px) 350px"
        />
      </div>
    </section>
  );
}
