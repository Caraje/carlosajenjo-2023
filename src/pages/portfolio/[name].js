import MainLayout from 'components/layout/Main-layout'
import Image from 'next/image'
import style from 'src/styles/WorkPage.module.css'
import uiWeb from '../../../data/uiWeb.json'
import infoWorks from '../../../data/infoWorks.json'
import { useContext } from 'react'
import { LangContext } from 'context/LangContext'

const WorkPage = ({ workES, workEN, isMobile }) => {
  const { lang } = useContext(LangContext)
  const { title, img, description, techList, urlGit, urlDemo, images } =
    lang === 'es-ES' ? workES[0] : workEN[0]
  const UiLang = lang === 'es-ES' ? uiWeb.es_ES : uiWeb.en_EN

  return (
    <div className={style.workBackground}>
      <MainLayout isMobile={isMobile} language='esp'>
        <main className={style.workContainer}>
          <picture className={style.image}>
            <Image
              src={`https://res.cloudinary.com/caraje/image/upload/v1661251659/${img}`}
              alt={`es la imagen de la cabecera del proyecto ${title}`}
              className={style.headImage}
              width={1200}
              height={800}
            />
          </picture>
          <article className={style.workInfo}>
            <h1 className={style.workTitle}>{title}</h1>
            <section className={style.infoContainer}>
              <section className={style.textBox}>
                <div className={style.desc}>
                  {description.map((desc, id) => (
                    <p key={id}>{desc}</p>
                  ))}
                </div>
                {images.length !== 0 && (
                  <section className={style.photoBox}>
                    contenedor de imagenes
                  </section>
                )}
              </section>
              <aside className={style.addInfo}>
                <section className={style.seccTec}>
                  <h3 className={style.seccTecTitle}>
                    {UiLang.workPage.titles.tecnologies}
                  </h3>
                  <ol className={style.seccTecList}>
                    {techList.map((tec, id) => (
                      <li className={style.seccTecChip} key={id}>
                        {tec}
                      </li>
                    ))}
                  </ol>
                </section>
                <nav className={style.navButtons}>
                  <a href={urlDemo} target='_blank' rel='noreferrer'>
                    {UiLang.workPage.buttons.demo}
                  </a>
                  <a href={urlGit} target='_blank' rel='noreferrer'>
                    {UiLang.workPage.buttons.github}
                  </a>
                  <a href='/portfolio'>{UiLang.workPage.buttons.back}</a>
                </nav>
              </aside>
            </section>
          </article>
        </main>
      </MainLayout>
    </div>
  )
}

// DEFINIR EL getStaticPath
export const getStaticPaths = async (ctx) => {
  const worksNames = infoWorks.es_ES.map((work) =>
    work.title.toLocaleLowerCase().replaceAll(' ', '-')
  )
  return {
    paths: worksNames.map((name) => ({
      params: { name }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params }) => {
  const { name } = params
  const workES = infoWorks.es_ES.filter((work) => {
    const data = work.title.toLocaleLowerCase().replaceAll(' ', '-')
    return data === name
  })
  const workEN = infoWorks.en_EN.filter((work) => {
    const data = work.title.toLocaleLowerCase().replaceAll(' ', '-')
    return data === name
  })
  return {
    props: { workES, workEN }
  }
}
export default WorkPage
