import React from 'react'
import style from 'src/styles/FooterWeb.module.css'
import Image from 'next/image'
import SocialNetworks from 'components/ui/SocialNetworks'
import infoWebES from '../../data/infoWeb.json'

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
      <div className={style.footerText}>{infoWebES.home.footer}</div>
    </footer>
  )
}

export default FooterWeb
