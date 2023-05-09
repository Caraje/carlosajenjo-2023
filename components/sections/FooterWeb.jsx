import React, { useContext } from 'react'
import style from 'src/styles/FooterWeb.module.css'
import Image from 'next/image'
import SocialNetworks from 'components/ui/SocialNetworks'
import infoWeb from '../../data/infoWeb.json'
import { LangContext } from 'context/LangContext'

const FooterWeb = () => {
  const { lang } = useContext(LangContext)
  const infoWebLang = lang === 'es-ES' ? infoWeb.es_ES : infoWeb.en_EN
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
            width={500}
            height={90}
          />
        </div>
      </section>
      {/* <div className={style.footerText}>{infoWebLang.home.footer}</div> */}
    </footer>
  )
}

export default FooterWeb
