import SocialNetworks from 'components/ui/SocialNetworks'
import Image from 'next/image'
import React from 'react'
import style from 'src/styles/Home.module.css'

export const HomeSection = () => {
  return (
    <main className={style.homeBackground}>
      <section className={style.homeContainer}>
        <picture className={style.HomePicture}>
          {/* <img src='/img_static/carlosFoto.webp' /> */}
          <Image
            src={'/img_static/carlosFoto.webp'}
            width={700}
            height={700}
            // fill
            alt='Fotografia de Carlos Ajenjo'
          />
        </picture>
        <h1 className={style.homeLogo}>
          Carlos Ajenjo <br /> <span>Web Developer</span>
        </h1>

        <section className={style.homeSocialNetworksGroup}>
          {<SocialNetworks color='#ededed' />}
        </section>

        <button className={style.btnContact}>Contacto</button>
      </section>
    </main>
  )
}

export default HomeSection
