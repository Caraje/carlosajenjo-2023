import MainLayout from 'components/layout/Main-layout'

export default function BlogPage({ isMobile }) {
  return (
    <>
      <MainLayout isMobile={isMobile} language='esp'>
        Aqui van la recoleccion completa de articulos del blog
      </MainLayout>
    </>
  )
}
