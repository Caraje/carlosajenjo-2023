import PortfolioCard from 'components/ui/PortfolioCard'
import { db } from 'data/infoBase'
import React from 'react'
import style from 'src/styles/PortfolioHome.module.css'

const PortfolioHome = () => {
  return (
    <section className={style.portfolioHomeContainer}>
      <header className={style.titlePortfolio}>
        <h2>Portfolio</h2>
      </header>
      <section className={style.portfolioGrid}>
        {db.portfolio.map((card) => (
          <PortfolioCard card={card} />
        ))}
      </section>
    </section>
  )
}

export default PortfolioHome
