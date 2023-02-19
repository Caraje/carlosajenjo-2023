import React, { useContext } from 'react'
import SectionsMenu from 'components/ui/SectionsMenu'
import ThemeButton from 'components/ui/ThemeButton'
import LanguageButton from 'components/ui/LanguageButton'
import mobile from 'src/styles/MenuSectionsMobile.module.css'
import desktop from 'src/styles/MenuSections.module.css'
import { MenuContext } from 'context/MenuContext'
import uiWeb from '../../data/uiWeb.json'
import { LangContext } from 'context/LangContext'

const Menu = ({ theme, isMobile }) => {
  const { lang } = useContext(LangContext)

  const { dialog, isOpen, setIsOpen } = useContext(MenuContext)
  const UiLang = lang === 'es-ES' ? uiWeb.es_ES : uiWeb.en_EN
  return (
    <section
      className={isMobile ? mobile.menuMobileContainer : desktop.menuContainer}
    >
      <nav className={isMobile ? mobile.menu : desktop.menu}>
        {<SectionsMenu />}
        <button
          onClick={() => {
            setIsOpen(false)
            dialog.current.showModal()
          }}
        >
          {UiLang.home.buttons.contact}
        </button>
      </nav>
      <div className={isMobile ? mobile.selections : desktop.selections}>
        {<ThemeButton theme={theme} />}
        {<LanguageButton lang={lang} />}
      </div>
    </section>
  )
}

export default Menu
