import Image from "next/image";
import styles from "./ProyectosRealizados.module.css";
export default function ProyectosRealizados() {
  return <section className={styles.proyectos_realizados}>
    <div className={`container ${styles.proyectos_realizados_content}`}>
      <p className={`h2 ${styles.proyectos_realizados_title}`}>Más de 100 proyectos realizados exitosamente</p>
      <div className={styles.proyectos_realizados_list}>
        <div className={styles.proyectos_realizados_item}>
          <Image
            src="/img/proyectos/factor-energia.webp"
            className={styles.img_black}
            alt="Factorenergia"
            title="Factorenergia"
            fill={true}
            sizes="(max-width: 768px) 100%,
              120px" />
        </div>
        <div className={styles.proyectos_realizados_item}>
          <Image
            src="/img/proyectos/pcmontajes.webp"
            className={styles.img_black}
            alt="PCMontajes"
            title="PCMontajes"
            fill={true}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
        </div>
        <div className={styles.proyectos_realizados_item}>
          <Image
            src="/img/proyectos/mercadona.webp"
            className={styles.img_black}
            alt="Mercadona"
            title="Mercadona"
            fill={true}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
        </div>
        <div className={styles.proyectos_realizados_item}>
          <Image
            src="/img/proyectos/thermomix.webp"
            className={styles.img_black}
            alt="Thermomix"
            title="Thermomix"
            fill={true}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
        </div>
        <div className={styles.proyectos_realizados_item}>
          <Image
            src="/img/proyectos/sap.webp"
            className={styles.img_black}
            alt="SAP"
            title="SAP"
            fill={true}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
        </div>
        <div className={styles.proyectos_realizados_item}>
          <Image
            src="/img/proyectos/logia-barcelona.webp"
            className={styles.img_black}
            alt="Logia Barcelona"
            title="Logia Barcelona"
            fill={true}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
        </div>
        <div className={styles.proyectos_realizados_item}>
          <Image
            src="/img/proyectos/hoy-voy.webp"
            className={styles.img_grayscale}
            alt="Hoy Voy"
            title="Hoy Voy"
            fill={true}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
        </div>
      </div>
    </div>
  </section>
}