import Icons from 'components/icons/Icons'
import Image from 'next/image'
import React from 'react'
import style from 'src/styles/Home.module.css'
import { socialNetworks } from 'utils/networks'
export const HomeSection = () => {
  return (
    <main className={style.homeBackground}>
      <section className={style.homeContainer}>
        <h1 className={style.homeLogo}>
          Carlos Ajenjo <br /> <span>Web Developer</span>
        </h1>
        <section className={style.homeSocialNetworksGroup}>
          {socialNetworks.map((soc) => (
            <a key={soc.name} href={soc.url}>
              {<Icons icon={soc.icon} color='#ededed' />}
            </a>
          ))}
        </section>
        <button className={style.btnContact}>Contacto</button>
        <picture className={style.HomePicture}>
          <Image
            src={'/img_static/carlosFoto.webp'}
            width={900}
            height={800}
            alt='Fotografia de Carlos Ajenjo'
          />
        </picture>
      </section>
    </main>
  )
}

export default HomeSection
