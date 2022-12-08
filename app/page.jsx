import "../styles/globals.css"
import styles from "../styles/Home.module.css"
import MainBanner from "./(components)/MainBanner/MainBanner"
import ProyectosRealizados from "./(components)/ProyectosRealizados/ProyectosRealizados"
import NuestrosServicios from "./(components)/NuestrosServicios/NuestrosServicios"

export default function Page() {
  return (
      <main className={styles.main}>
          <MainBanner title="Nativos digitales" 
            content="Somos una agencia joven, dinámica y, ¿por qué no decirlo? También
              un poquito geek. Hemos crecido entre pantallas, por lo que no sólo
              nos encanta lo que hacemos, sino que, como verdaderos nativos
              digitales, también somos unos expertos del código.
              <strong>
                Nuestra misión principal es conseguir que nuestros clientes
                saquen el máximo partido a sus productos web
              </strong>, tratando cada proyecto de manera única y personalizada." 
            cta={true}/>
        <ProyectosRealizados />
        <NuestrosServicios />
      </main>
  )
}
