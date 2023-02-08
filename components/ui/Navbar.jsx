import Image from 'next/image'
import React, { useState } from 'react'
import style from 'src/styles/Navbar.module.css'
import Menu from './Menu'

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
          <button
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            <Image
              src='/img_static/icons/menu_icon.svg'
              alt='Icono de despliegue del menu'
              width={200}
              height={100}
            />
          </button>
        ) : (
          <Menu theme={theme} lang={lang} isMobile={false} />
        )}
      </div>
      {isOpen && <Menu theme={theme} lang={lang} isMobile={true} />}
    </>
  )
}

export default Navbar
