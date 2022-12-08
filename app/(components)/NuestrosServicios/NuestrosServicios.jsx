import Image from "next/image";
import Link from "next/link";
import styles from "./NuestrosServicios.module.css";

export default function NuestrosServicios() {
  return (
    <section className={`container  ${styles.nuestros_servicios}`}>
      <h2 className={`h2`}>Nuestros servicios principales</h2>
      <div className={`${styles.nuestros_servicios_content}`}>
        <div className={styles.nuestros_servicios_item}>
          <div className={styles.nuestros_servicios_image}>
            <Image
              src="/img/servicios/desarrollo.webp"
              fill
              alt="Desarrollo"
              title="Desarrollo"
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw"
            />
          </div>
          <p className={styles.nuestros_servicios_text}>
            Programamos para hacerte la vida más fácil, estamos aquí para crear
            tu página web soñada a medida. Nos adaptamos a tus requerimientos
            para conseguir un producto final que se ajuste perfectamente a lo
            que tu marca necesita.
          </p>
          <Link className="cta-button" href="/servicios/desarrollo">
            Servicios de desarrollo
          </Link>
        </div>
        <div className={styles.nuestros_servicios_item}>
          <div className={styles.nuestros_servicios_image}>
            <Image
              src="/img/servicios/marketing.webp"
              fill
              alt="Narketing"
              title="Marketing"
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw"
            />
          </div>
          <p className={styles.nuestros_servicios_text}>
            ¿Tu página web está pasando desapercibida? Te ayudamos a explotar
            todo su potencial para que tenga el protagonismo que merece. A
            través de un proceso estratégico y personalizado, definiremos e
            implementaremos diferentes acciones de marketing digital para
            conseguir los mejores resultados.
          </p>
          <Link className="cta-button" href="/servicios/marketing">
            Servicios de marketing
          </Link>
        </div>
      </div>
    </section>
  );
}
