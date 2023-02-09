import MainLayout from 'components/layout/Main-layout'
import AboutMe from 'components/sections/AboutMe'
import HomeSection from 'components/sections/Home'
import PortfolioHome from 'components/sections/PortfolioHome'
import useWindowDimensions from 'hooks/useWindowDimension'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const { width, height } = useWindowDimensions()
  useEffect(() => {
    width < 911 ? setIsMobile(true) : setIsMobile(false)
  }, [width])

  return (
    <>
      <MainLayout isMobile={isMobile} language='esp'>
        <HomeSection />
        <PortfolioHome />
        {/* <AboutMe /> */}
      </MainLayout>
    </>
  )
}
