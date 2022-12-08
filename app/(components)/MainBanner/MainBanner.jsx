import React from 'react';
import Image from 'next/image';
import styles from "./MainBanner.module.css"

export default function MainBanner ({title, content, cta = false})  {
  return (
    <section className={`container ${styles.main_banner}`}>
      <div className={styles.content}>
        <h1 className={styles.h1}>{title}</h1>
        <p className={styles.banner_text} dangerouslySetInnerHTML={{__html: content}}/>
        {cta && 
          <button className='cta-button'>Descubre más sobre nosotros</button>
        }
      </div>
      <div className={styles.image}>
        <Image
          src='/img/home_banner.webp'
          alt='Picture of the author'
          width={350}
          height={303}
        />
      </div>
    </section>
  );
}

