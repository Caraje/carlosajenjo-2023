import React from 'react'
import style from 'src/styles/FooterWeb.module.css'
import { socialNetworks } from 'utils/networks'
import Icons from 'components/icons/Icons'
import Image from 'next/image'
const FooterWeb = () => {
  return (
    <footer className={style.footerWeb}>
      <section className={style.containerFooter}>
        <div className={style.socialIcons}>
          {socialNetworks.map((soc) => (
            <a key={soc.name} href={soc.url}>
              {<Icons icon={soc.icon} color='#ededed' />}
            </a>
          ))}
        </div>
        <div>
          <Image
            src='/img_static/logos/Logo_negative.svg'
            alt='Logo Carlosajenjo.es'
            width={300}
            height={100}
          />
        </div>
      </section>
      <div className={style.footerText}>
        Gracias por tu visita, si te gusta no dudes en tomarla como inspiración,
        aunque se agradece una mencion si lo haces.
      </div>
    </footer>
  )
}

export default FooterWeb
