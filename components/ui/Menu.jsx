import React from 'react'
import SectionsMenu from 'components/ui/SectionsMenu'
import ThemeButton from 'components/ui/ThemeButton'
import LanguageButton from 'components/ui/LanguageButton'
import mobile from 'src/styles/MenuSectionsMobile.module.css'
import desktop from 'src/styles/MenuSections.module.css'

const Menu = ({ theme, lang, setIsOpen, isMobile, dialog }) => {
  return (
    <section
      className={isMobile ? mobile.menuMobileContainer : desktop.menuContainer}
    >
      <nav className={isMobile ? mobile.menu : desktop.menu}>
        {<SectionsMenu setIsOpen={setIsOpen} />}
        <button
          onClick={() => {
            dialog.current.showModal()
          }}
        >
          Contacto
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
