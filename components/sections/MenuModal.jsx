import React from 'react'
import Image from 'next/image'
import LightTheme from 'components/icons/Light-icon'
import DarkIcon from 'components/icons/Dark-icon'
import { sections } from 'utils/sections'
import style from 'src/styles/MenuSectionsMobile.module.css'

const MenuModal = ({ theme, lang, setIsOpen }) => {
  return (
    <section className={style.menuMobileContainer}>
      <nav className={style.menu}>
        {sections.map((sec) => {
          return (
            <a
              onClick={() => {
                setIsOpen(false)
              }}
              key={sec.title}
              href={sec.url}
            >
              {sec.title}
            </a>
          )
        })}
        <button>Contacto</button>
      </nav>
      <div className={style.selections}>
        <button>
          {theme ? (
            <DarkIcon color='#ed1e79' />
          ) : (
            <LightTheme color='#ed1e79' />
          )}
        </button>

        <button>
          {lang ? (
            <Image
              src='/img_static/icons/en-Icon.webp'
              alt='Icono idioma en ingles'
              width={50}
              height={50}
            />
          ) : (
            <Image
              src='/img_static/icons/es-Icon.webp'
              alt='Icono idioma en español'
              width={50}
              height={50}
            />
          )}
        </button>
      </div>
    </section>
  )
}

export default MenuModal
