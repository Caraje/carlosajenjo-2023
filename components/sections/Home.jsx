import SocialNetworks from 'components/ui/SocialNetworks'
import Image from 'next/image'
import React, { useContext } from 'react'
import style from 'src/styles/Home.module.css'
import photoCarlos from '../../public/img_static/carlosFoto.webp'
import uiWeb from '../../data/uiWeb.json'
import { ThemeContext } from 'context/ThemeContext'
import { MenuContext } from 'context/MenuContext'
import { LangContext } from 'context/LangContext'

export const HomeSection = () => {
  // const dialog = useRef(null)
  const { lang } = useContext(LangContext)
  const { theme, setTheme } = useContext(ThemeContext)
  const { dialog } = useContext(MenuContext)
  const UiLang = lang === 'es-ES' ? uiWeb.es_ES : uiWeb.en_EN
  return (
    <>
      <main className={style.homeBackground}>
        <section className={style.homeContainer}>
          <article className={style.info}>
            <h1 className={style.homeLogo}>
              Carlos Ajenjo <br /> <span>Web Developer</span>
            </h1>

            <section className={style.homeSocialNetworksGroup}>
              {
                <SocialNetworks
                  color={theme === 'dark' ? '#ededed' : '#2d2d2d'}
                />
              }
            </section>

            <button
              onClick={() => {
                dialog.current.showModal()
              }}
              className={style.btnContact}
            >
              {UiLang.home.buttons.contact}
            </button>
          </article>

          <picture className={style.HomePicture}>
            <Image
              className={style.photo}
              src={photoCarlos}
              alt='foto de carlos Ajenjo'
              fill
            />
          </picture>
        </section>
      </main>
    </>
  )
}

export default HomeSection
