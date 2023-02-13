import MainLayout from 'components/layout/Main-layout'
import { db } from 'data/infoBase'
import Image from 'next/image'
import style from 'src/styles/WorkPage.module.css'

const WorkPage = ({ work, isMobile }) => {
  console.log({ work })
  console.log(work[0])
  const { id, title, img, description, techList, urlGit, urlDemo, slug } =
    work[0]
  return (
    <div className={style.workBackground}>
      <MainLayout isMobile={isMobile} language='esp'>
        <main className={style.workContainer}>
          <Image
            src={`https://res.cloudinary.com/caraje/image/upload/v1661251659/${img}`}
            alt={`es la imagen de la cabecera del proyecto ${title}`}
            width={1200}
            height={200}
          />
          <article className={style.workInfo}>
            <h1 className={style.workTitle}>{title}</h1>
            <section className={style.infoContainer}>
              <div>
                <div>
                  {description.map((desc, id) => (
                    <p key={id}>{desc}</p>
                  ))}
                </div>
                <section>contenedor de imagenes</section>
              </div>
              <aside>
                <section>
                  <h3>tecnoligias</h3>
                  <ol>
                    {techList.map((tec, id) => (
                      <li key={id}>{tec}</li>
                    ))}
                  </ol>
                </section>
                <nav>Botones de navegacion</nav>
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
