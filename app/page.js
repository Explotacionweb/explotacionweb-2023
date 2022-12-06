import "../styles/globals.css"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Page() {
  return (
    <div className={`container`}>
      <main className={styles.main}>
        <div className={styles.main_banner}>
          <div className={styles.content}>
            <h1 className='h1'>Nativos digitales</h1>
            <p>
              Somos una agencia joven, dinámica y, ¿por qué no decirlo? También
              un poquito geek. Hemos crecido entre pantallas, por lo que no solo
              nos encanta lo que hacemos, sino que, como verdaderos nativos
              digitales, también somos unos expertos del código.{" "}
              <strong>
                Nuestra misión principal es conseguir que nuestros clientes
                saquen el máximo partido posible a sus productos web
              </strong>
              , tratando cada proyecto de manera única y personalizada.
            </p>
            <button class='cta-button'>Descubre más sobre nosotros</button>
          </div>
          <div className={styles.image}>
            <Image
              src='/img/home_banner.webp'
              alt='Picture of the author'
              width={400}
              height={350}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
