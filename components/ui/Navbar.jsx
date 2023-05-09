import Image from 'next/image'
import React, { useContext, useRef, useState } from 'react'
import style from 'src/styles/Navbar.module.css'
import Menu from './Menu'
import menuIcon from '../../public/img_static/icons/menu_icon.svg'
import logo from '../../public/img_static/logos/logo-dark.svg'
import Contact from 'components/sections/Contact'
import { MenuContext } from 'context/MenuContext'

const Navbar = ({ theme, lang, isMobile }) => {
  const { dialog, isOpen, setIsOpen } = useContext(MenuContext)

  return (
    <>
      <div className={style.navbar}>
        <div className={style.containerNavbar}>
          <a href='/' className={style.logoContainer}>
            <Image
              className={style.logoimg}
              src={logo}
              alt='Logo Carlosajenjo.es'
              fill
            />
          </a>
          {isMobile ? (
            <button
              onClick={() => {
                setIsOpen(!isOpen)
              }}
              className={style.btnMenuMobile}
            >
              <Image src={menuIcon} alt='Icono de despliegue del menu' fill />
            </button>
          ) : (
            <section className={style.menuContainer}>
              <Menu
                theme={theme}
                lang={lang}
                isMobile={false}
                dialog={dialog}
              />
            </section>
          )}
        </div>
      </div>
      {isOpen && <Menu theme={theme} lang={lang} isMobile={true} />}
      <dialog className={style.dialogContact} ref={dialog}>
        <Contact dialog={dialog} />
      </dialog>
    </>
  )
}

export default Navbar
