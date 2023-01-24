import DarkIcon from 'components/icons/Dark-icon'
import LightTheme from 'components/icons/Light-icon'
import Image from 'next/image'
import React from 'react'
import { sections } from 'utils/sections'
import style from 'src/styles/Navbar.module.css'

const Navbar = ({ theme, lang }) => {
  console.log(sections)
  return (
    <div className={style.navbar}>
      <Image src='/img_static/logos/logo-dark.svg' width={200} height={100} />
      <nav className={style.menu}>
        {sections.map((sec) => {
          return <a href={sec.url}>{sec.title}</a>
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
              width={50}
              height={50}
            />
          ) : (
            <Image
              src='/img_static/icons/es-Icon.webp'
              width={50}
              height={50}
            />
          )}
        </button>
      </div>
    </div>
  )
}

export default Navbar
