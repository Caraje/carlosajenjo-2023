import PortfolioCard from 'components/ui/PortfolioCard'
import React, { useContext } from 'react'
import style from 'src/styles/PortfolioHome.module.css'

import uiWeb from '../../data/uiWeb.json'
import infoWorks from '../../data/infoWorks.json'
import { LangContext } from 'context/LangContext'

const PortfolioHome = () => {
  const { lang } = useContext(LangContext)
  const uiLang = lang === 'es-ES' ? uiWeb.es_ES : uiWeb.en_EN
  const workLang = lang === 'es-ES' ? infoWorks.es_ES : infoWorks.en_EN

  return (
    <section id='portfolio' className={style.portfolioHomeContainer}>
      <header className={style.titlePortfolio}>
        <h2>{uiLang.home.titles.portfolio}</h2>
      </header>
      <section className={style.portfolioGrid}>
        {workLang
          .sort((a, b) => b.id - a.id)
          .slice(0, 8)
          .map((card) => (
            <PortfolioCard key={card.id} card={card} />
          ))}
      </section>
      {workLang.length > 8 && (
        <a className={style.btnMore} href='/portfolio'>
          {uiLang.home.buttons.more}
        </a>
      )}
    </section>
  )
}

export default PortfolioHome
