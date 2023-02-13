import MainLayout from 'components/layout/Main-layout'
import { db } from 'data/infoBase'
import Image from 'next/image'
import style from 'src/styles/WorkPage.module.css'

const WorkPage = ({ work, isMobile }) => {
  const { id, title, img, description, techList, urlGit, urlDemo, slug } =
    work[0]
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
                <section className={style.photoBox}>
                  contenedor de imagenes
                </section>
              </section>
              <aside className={style.addInfo}>
                <section className={style.seccTec}>
                  <h3 className={style.seccTecTitle}>Tecnologias</h3>
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
                    Demo
                  </a>
                  <a href={urlGit} target='_blank' rel='noreferrer'>
                    Github
                  </a>
                  <a href='/portfolio'>Volver</a>
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
  const worksNames = db.portfolio.map((work) => work.title)
  return {
    paths: worksNames.map((name) => ({
      params: { name },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }) => {
  const { name } = params
  console.log({ name })

  // const work = db.portfolio.filter((work) => work.slug === name)
  const work = db.portfolio.filter((work) => {
    const data = work.title.toLocaleLowerCase().replaceAll(' ', '-')
    console.log('=>', data)
    return data === name
  })

  return {
    props: { work },
  }
}
export default WorkPage
