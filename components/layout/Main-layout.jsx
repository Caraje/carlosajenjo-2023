import FooterWeb from 'components/sections/FooterWeb'
import Navbar from 'components/ui/Navbar'
import useWindowDimensions from 'hooks/useWindowDimension'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import seoEn from '../../utils/lang/seo_en_EN.json'
import seoEs from '../../utils/lang/seo_es_ES.json'

const MainLayout = ({ children, language }) => {
  const lang = language === 'esp' ? seoEs : seoEn
  const [isMobile, setIsMobile] = useState(false)
  const { width, height } = useWindowDimensions()
  useEffect(() => {
    width < 764 ? setIsMobile(true) : setIsMobile(false)
  }, [width])

  return (
    <>
      <Head>
        <link rel='icon' href='/img_static/favicon.ico' />
        <meta name='keywords' content='HTML, CSS, JavaScript' />
        <title>{lang.title}</title>
        <meta name="description" content="Pagina web de Carlos Ajenjo, desarrollador Front-end, portfolio para mostrar algunos de los proyectos en los que he tenido la ocasion de trabajar."/>

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.carlosajenjo.es/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Carlos Ajenjo: Front-end developer"/>
        <meta property="og:description" content="Pagina web de Carlos Ajenjo, desarrollador Front-end, portfolio para mostrar algunos de los proyectos en los que he tenido la ocasion de trabajar."/>
        <meta property="og:image" content="https://res.cloudinary.com/caraje/image/upload/v1661263182/cibt2p9bztdn4odwwk5j.webp"/>

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="carlosajenjo.es"/>
        <meta property="twitter:url" content="https://www.carlosajenjo.es/"/>
        <meta name="twitter:title" content="Carlos Ajenjo: Front-end developer"/>
        <meta name="twitter:description" content="Pagina web de Carlos Ajenjo, desarrollador Front-end, portfolio para mostrar algunos de los proyectos en los que he tenido la ocasion de trabajar."/>
        <meta name="twitter:image" content="https://res.cloudinary.com/caraje/image/upload/v1661263182/cibt2p9bztdn4odwwk5j.webp"/>
      </Head>
      <header>
        <Navbar isMobile={isMobile} />
      </header>
      <>{children}</>
      {<FooterWeb />}
    </>
  )
}

export default MainLayout
