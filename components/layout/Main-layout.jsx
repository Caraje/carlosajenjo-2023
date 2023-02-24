import FooterWeb from 'components/sections/FooterWeb'
import Navbar from 'components/ui/Navbar'
import useWindowDimensions from 'hooks/useWindowDimension'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import seoEs from '../../utils/lang/seo_es_ES.json'

const MainLayout = ({ children, language }) => {
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
        <title>{seoEs.title}</title>
        <meta name='description' content={seoEs.description} />

        {/* Facebook Meta Tags */}
        <meta property='og:url' content={seoEs.url} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={seoEs.title} />
        <meta property='og:description' content={seoEs.description} />
        <meta property='og:image' content={seoEs.img} />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary' />
        <meta property='twitter:domain' content='www.carlosajenjo.es' />
        <meta name='twitter:site' content='@caraje_' />
        <meta name='twitter:creator' content={seoEs.author} />
        <meta property='twitter:url' content={seoEs.url} />
        <meta name='twitter:title' content={seoEs.title} />
        <meta name='twitter:description' content={seoEs.description} />
        <meta name='twitter:image' content={seoEs.img} />
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
