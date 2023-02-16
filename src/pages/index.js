import MainLayout from 'components/layout/Main-layout'
import AboutMe from 'components/sections/AboutMe'
import HomeSection from 'components/sections/Home'
import PortfolioHome from 'components/sections/PortfolioHome'
import { ThemeContext } from 'context/userContext'
import { useContext, useEffect } from 'react'

export default function Home() {
  // const { theme, setTheme } = useContext(ThemeContext)
  // console.log(theme)
  // useEffect(() => {
  //   document.body.setAttribute('data-theme', theme)
  // }, [theme])

  return (
    <>
      <MainLayout language='esp'>
        <HomeSection />
        <PortfolioHome />
        <AboutMe />
      </MainLayout>
    </>
  )
}
