import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header () {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.main_nav}>
          <Image src="/img/ew.webp" alt="Explotación Web" width={110} height={37} />
          <ul>
            <li><Link href="#">Desarrollo Web</Link></li>
            <li><Link href="#">Estrategia Digital</Link></li>
            <li><Link href="#">Clientes</Link></li>
            <li><Link href="#">Nosotros</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Contacto</Link></li>
          </ul>
          <button className={`cta-button ${styles.cta_button}`}>Solicitar información</button>
        </nav>
      </div>
    </header>
  );
}

