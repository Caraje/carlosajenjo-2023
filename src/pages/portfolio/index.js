import MainLayout from 'components/layout/Main-layout'
import PortfolioCard from 'components/ui/PortfolioCard'
import style from 'src/styles/PortfolioPage.module.css'
import uiWeb from '../../../data/uiWeb.json'
import infoWorks from '../../../data/infoWorks.json'
import { useContext } from 'react'
import { LangContext } from 'context/LangContext'

export default function PortfolioPage({ isMobile }) {
  const { lang } = useContext(LangContext)
  const UiLang = lang === 'es-ES' ? uiWeb.es_ES : uiWeb.en_EN
  const workLang = lang === 'es-ES' ? infoWorks.es_ES : infoWorks.en_EN

  return (
    <div className={style.portfolioBackground}>
      <MainLayout isMobile={isMobile} language='esp'>
        <main className={style.portfolioContainer}>
          <h1 className={style.portfolioTitle}>
            {UiLang.portfolioPage.titles.portfolio}
          </h1>
          <section className={style.portfolioGrid}>
            {workLang
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
