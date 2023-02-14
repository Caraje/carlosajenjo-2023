import SocialNetworks from 'components/ui/SocialNetworks'
import Image from 'next/image'
import React from 'react'
import style from 'src/styles/Home.module.css'
import photoCarlos from '../../public/img_static/carlosFoto.webp'
import uiWebES from '../../data/uiWeb.json'

export const HomeSection = () => {
  return (
    <main className={style.homeBackground}>
      <section className={style.homeContainer}>
        <article className={style.info}>
          <h1 className={style.homeLogo}>
            Carlos Ajenjo <br /> <span>Web Developer</span>
          </h1>

          <section className={style.homeSocialNetworksGroup}>
            {<SocialNetworks color='#2d2d2d' />}
          </section>

          <button className={style.btnContact}>
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
  )
}

export default HomeSection
