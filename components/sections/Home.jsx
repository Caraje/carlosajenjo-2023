import Icons from 'components/icons/icons'
import Image from 'next/image'
import React from 'react'
import style from 'src/styles/Home.module.css'
import { socialNetworks } from 'utils/networks'
export const HomeSection = () => {
  return (
    <main className={style.container}>
      <section className={style.containerTitles}>
        <h1>
          Carlos Ajenjo <br /> <span>Web Developer</span>
        </h1>
        <section className={style.socialIcons}>
          {socialNetworks.map((soc) => (
            <a key={soc.name} className={style.icons} href={soc.url}>
              {<Icons icon={soc.icon} color='#ededed' />}
            </a>
          ))}
        </section>
        <button className={style.btnContact}>Contacto</button>
      </section>
      <picture className={style.pictureWeb}>
        <Image src={'/img_static/carlosFoto.webp'} fill />
      </picture>
    </main>
  )
}

export default HomeSection
