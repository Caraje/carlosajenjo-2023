import SocialNetworks from 'components/ui/SocialNetworks'
import Image from 'next/image'
import React, { useContext, useRef } from 'react'
import style from 'src/styles/Home.module.css'
import photoCarlos from '../../public/img_static/carlosFoto.webp'
import uiWebES from '../../data/uiWeb.json'
import Contact from './Contact'
import { ThemeContext } from 'context/ThemeContext'

export const HomeSection = () => {
  const dialog = useRef(null)
  const { theme, setTheme } = useContext(ThemeContext)

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
              {uiWebES.es_ES.home.buttons.contact}
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
      <dialog ref={dialog}>
        <Contact dialog={dialog} />
      </dialog>
    </>
  )
}

export default HomeSection
