import MenuModal from 'components/sections/MenuModal'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import style from 'src/styles/Navbar.module.css'
import MenuSections from './MenuSections'

const Navbar = ({ theme, lang, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={style.navbar}>
        <Image
          src='/img_static/logos/logo-dark.svg'
          alt='Logo Carlosajenjo.es'
          width={200}
          height={100}
        />
        {isMobile ? (
          <button>
            <Image
              src='/img_static/icons/menu_icon.svg'
              alt='Icono de despliegue del menu'
              width={200}
              height={100}
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            />
          </button>
        ) : (
          <MenuSections theme={theme} lang={lang} isOpen={setIsOpen} />
        )}
      </div>
      {isOpen && <MenuModal setIsOpen={setIsOpen} />}
    </>
  )
}

export default Navbar
