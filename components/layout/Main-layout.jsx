import FooterWeb from 'components/sections/FooterWeb'
import Navbar from 'components/ui/Navbar'
import Head from 'next/head'
import seoEn from '../../utils/lang/seo_en_EN.json'
import seoEs from '../../utils/lang/seo_es_ES.json'

const MainLayout = ({ children, language, isMobile }) => {
  const lang = language === 'esp' ? seoEs : seoEn

  return (
    <>
      <Head>
        <link rel='icon' href='/img_static/favicon.ico' />
        <meta name='keywords' content='HTML, CSS, JavaScript' />
        <title>{lang.title}</title>
        <meta name='description' content={lang.description} />

        {/* Facebook Meta Tags */}
        <meta property='og:url' content={lang.url} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={lang.title} />
        <meta property='og:description' content={lang.description} />
        <meta property='og:image' content={lang.img} />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary' />
        <meta property='twitter:domain' content='www.dadosypixeles.es' />
        <meta name='twitter:site' content='@DadosyPixeles' />
        <meta name='twitter:creator' content={lang.author} />
        <meta property='twitter:url' content={lang.url} />
        <meta name='twitter:title' content={lang.title} />
        <meta name='twitter:description' content={lang.description} />
        <meta name='twitter:image' content={lang.img} />
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
