import PortfolioCard from 'components/ui/PortfolioCard'
import { db } from 'data/infoBase'
import React from 'react'
import style from 'src/styles/PortfolioHome.module.css'

const PortfolioHome = () => {
  return (
    <section id='portfolio' className={style.portfolioHomeContainer}>
      <header className={style.titlePortfolio}>
        <h2>Portfolio</h2>
      </header>
      <section className={style.portfolioGrid}>
        {db.portfolio
          .sort((a, b) => b.id - a.id)
          .slice(0, 8)
          .map((card) => (
            <PortfolioCard key={card.id} card={card} />
          ))}
      </section>
      {db.portfolio.length > 8 && (
        <a className={style.btnMore} href='/portfolio'>
          Ver Más
        </a>
      )}
    </section>
  )
}

export default PortfolioHome
