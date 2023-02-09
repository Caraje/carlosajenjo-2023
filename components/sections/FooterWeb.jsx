import React from 'react'
import style from 'src/styles/FooterWeb.module.css'
import Image from 'next/image'
import SocialNetworks from 'components/ui/SocialNetworks'
const FooterWeb = () => {
  return (
    <footer className={style.footerWeb}>
      <section className={style.containerFooter}>
        <div className={style.socialIcons}>
          {<SocialNetworks color='#ededed' />}
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
