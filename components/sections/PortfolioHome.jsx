import PortfolioCard from 'components/ui/PortfolioCard'
import React from 'react'
import style from 'src/styles/PortfolioHome.module.css'

import uiWebES from '../../data/uiWeb.json'
import infoWorks from '../../data/infoWorks.json'

const PortfolioHome = () => {
  return (
    <section id='portfolio' className={style.portfolioHomeContainer}>
      <header className={style.titlePortfolio}>
        <h2>{uiWebES.es_ES.home.titles.portfolio}</h2>
      </header>
      <section className={style.portfolioGrid}>
        {infoWorks.es_ES
          .sort((a, b) => b.id - a.id)
          .slice(0, 8)
          .map((card) => (
            <PortfolioCard key={card.id} card={card} />
          ))}
      </section>
      {infoWorks.es_ES.length > 8 && (
        <a className={style.btnMore} href='/portfolio'>
          {uiWebES.es_ES.home.buttons.more}
        </a>
      )}
    </section>
  )
}

export default PortfolioHome
