import infoWeb from '../../data/infoWeb.json'
import React, { useContext } from 'react'
import style from 'src/styles/AboutMe.module.css'
import uiWeb from '../../data/uiWeb.json'
import { LangContext } from 'context/LangContext'

const AboutMe = () => {
  const { lang } = useContext(LangContext)
  const InfoLang = lang === 'es-ES' ? infoWeb.es_ES : infoWeb.en_EN
  const UiLang = lang === 'es-ES' ? uiWeb.es_ES : uiWeb.en_EN

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
          <h2>{UiLang.home.titles.aboutMe}</h2>
        </header>
        <main className={style.aboutTextGroup}>
          {InfoLang.home.aboutMeText.map((el, id) => (
            <p key={id}>{el}</p>
          ))}
        </main>
      </article>
    </section>
  )
}

export default AboutMe
