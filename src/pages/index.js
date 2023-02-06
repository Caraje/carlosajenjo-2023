import MainLayout from 'components/layout/Main-layout'
import AboutMe from 'components/sections/AboutMe'
import HomeSection from 'components/sections/Home'
import PortfolioHome from 'components/sections/PortfolioHome'

export default function Home() {
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
