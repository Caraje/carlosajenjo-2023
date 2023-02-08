import SocialNetworks from 'components/ui/SocialNetworks'
import React from 'react'
import style from 'src/styles/Home.module.css'

export const HomeSection = () => {
  return (
    <main className={style.homeBackground}>
      <section className={style.homeContainer}>
        <picture className={style.HomePicture}>
          <img className={style.photo} src='/img_static/carlosFoto.webp' />
        </picture>

        <article className={style.info}>
          <h1 className={style.homeLogo}>
            Carlos Ajenjo <br /> <span>Web Developer</span>
          </h1>
          <section className={style.homeSocialNetworksGroup}>
            {<SocialNetworks color='#ededed' />}
          </section>
          <button className={style.btnContact}>Contacto</button>
        </article>
      </section>
    </main>
  )
}

export default HomeSection
