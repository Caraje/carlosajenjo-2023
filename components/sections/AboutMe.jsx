import Image from 'next/image'
import React from 'react'

import style from 'src/styles/AboutMe.module.css'

const AboutMe = () => {
  // 716  898
  return (
    <section className={style.aboutContainer}>
      <picture className={style.aboutImage}>
        <Image
          src='/img_static/carlosAbout.webp'
          alt={`Es una imagen que hace referencia a Carlos Ajenjo`}
          width={500}
          height={500}
        />
      </picture>
      <article className={style.AboutTextContainer}>
        <header className={style.AboutTextTitle}>
          <h2>Sobre mi</h2>
        </header>
        <main className={style.aboutTextGroup}>
          <p>
            Nací en 1982 he pasado los últimos 20 años como diseñador centrado
            especialmente en crear marcas, y hace unos años comencé un proyecto
            personal relacionado y al buscar formas de hacer una web, y como
            algo ocasional, tuve mi primer contacto con la programación, en un
            inicio no esperaba que fuera atraerme, pero según investigaba más,
            más me atraía y quería conocer más, pase de no haber sentido interés
            por la programación a querer saber todo lo posible, algo que se
            mantiene bastante tiempo después por lo que decidí dedicarme por
            completo a ello.
          </p>

          <p>
            Siempre he sido un gran fan de los juegos tipo Dark Souls, Sekiro,
            Elden ring o similares, creo que me han aportado mucho a mi visión
            de las cosas, son juegos conocidos por su dificultad, pero que me
            gusta verlos como una forma de analizar y ver diferentes puntos de
            vista para enfrentarte a un mismo reto, digo esto por que cuando te
            enfrentas a un “Boss” del juego, al principio te parecen imposibles,
            pero aprendes a ver sus ataques a tener la paciencia para ver como y
            en que momento puedes atacar y así poder superarlo, además ayuda a
            gestionar la frustración.
          </p>

          {/* <p>
            No soy una persona que de primeras de algo por imposible, Busco
            información y me informo de cuales son mis posibilidades para
            afrontar lo que tengo delante, aunque eso me lleve a aprender algo
            de lo que antes no sabia nada, como el caso del momento en el que
            decidí crear una web para mi proyecto personal, soy consciente de no
            saberlo todo, pero también lo soy de saber que vivimos en un momento
            en el que disponemos de prácticamente toda la información del mundo
            en nuestra mano, tan solo hay que preocuparse en investigar como
            poder usarla.
          </p> */}
        </main>
      </article>
    </section>
  )
}

export default AboutMe
