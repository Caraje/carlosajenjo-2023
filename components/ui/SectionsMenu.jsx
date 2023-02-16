import { LangContext } from 'context/LangContext'
import React, { useContext } from 'react'
import uiWeb from '../../data/uiWeb.json'

const SectionsMenu = ({ setIsOpen }) => {
  const { lang } = useContext(LangContext)
  const uiLang = lang === 'es-ES' ? uiWeb.es_ES : uiWeb.en_EN

  return uiLang.sections.map((sec) => {
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
  })
}

export default SectionsMenu
