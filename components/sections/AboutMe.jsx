import infoWebES from '../../data/infoWeb.json'
import React from 'react'

import style from 'src/styles/AboutMe.module.css'
import uiWebES from '../../data/uiWeb.json'

const AboutMe = () => {
  return (
    <section id='aboutme' className={style.aboutContainer}>
      <picture className={style.aboutImage}>
        <img
          src='/img_static/carlosAbout.webp'
          alt={`Es una imagen que hace referencia a Carlos Ajenjo`}
        />
      </picture>
      <article className={style.AboutTextContainer}>
        <header className={style.AboutTextTitle}>
          <h2>{uiWebES.es_ES.home.titles.aboutMe}</h2>
        </header>
        <main className={style.aboutTextGroup}>
          {infoWebES.es_ES.home.aboutMeText.map((el, id) => (
            <p key={id}>{el}</p>
          ))}
        </main>
      </article>
    </section>
  )
}

export default AboutMe
