import MainLayout from 'components/layout/Main-layout'
import PortfolioCard from 'components/ui/PortfolioCard'
import style from 'src/styles/PortfolioPage.module.css'
import uiWebES from '../../../data/uiWeb.json'
import infoWorks from '../../../data/infoWorks.json'

export default function PortfolioPage({ isMobile }) {
  return (
    <div className={style.portfolioBackground}>
      <MainLayout isMobile={isMobile} language='esp'>
        <main className={style.portfolioContainer}>
          <h1 className={style.portfolioTitle}>
            {uiWebES.es_ES.portfolioPage.titles.portfolio}
          </h1>
          <section className={style.portfolioGrid}>
            {infoWorks.es_ES
              .sort((a, b) => b.id - a.id)
              .map((card) => (
                <PortfolioCard key={card.id} card={card} />
              ))}
          </section>
        </main>
      </MainLayout>
    </div>
  )
}
