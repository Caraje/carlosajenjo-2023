import { LangContext } from 'context/LangContext'
import { MenuContext } from 'context/MenuContext'
import React, { useContext } from 'react'
import uiWeb from '../../data/uiWeb.json'

const SectionsMenu = () => {
  const { lang } = useContext(LangContext)
  const { isOpen, setIsOpen } = useContext(MenuContext)

  const uiLang = lang === 'es-ES' ? uiWeb.es_ES : uiWeb.en_EN

  return uiLang.sections.map((sec) => {
    return (
      <a
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        key={sec.title}
        href={sec.url}
      >
        {sec.title}
      </a>
    )
  })
}

export default SectionsMenu
