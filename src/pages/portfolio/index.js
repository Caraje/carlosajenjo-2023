import MainLayout from 'components/layout/Main-layout'
import PortfolioCard from 'components/ui/PortfolioCard'
import { db } from 'data/infoBase'
import style from 'src/styles/PortfolioPage.module.css'

export default function PortfolioPage({ isMobile }) {
  return (
    <div className={style.portfolioBackground}>
      <MainLayout isMobile={isMobile} language='esp'>
        <main className={style.portfolioContainer}>
          <h1 className={style.portfolioTitle}>Portfolio</h1>
          <section className={style.portfolioGrid}>
            {db.portfolio
              .sort((a, b) => a.id - b.id)
              .map((card) => (
                <PortfolioCard key={card.id} card={card} />
              ))}
          </section>
        </main>
      </MainLayout>
    </div>
  )
}
