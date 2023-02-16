import { LangContext } from 'context/LangContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const LanguageButton = () => {
  const { lang, setLang } = useContext(LangContext)
  console.log('En languageButton => ', { lang })
  return (
    <button
      onClick={() => {
        lang === 'es-ES' ? setLang('en-EN') : setLang('es-ES')
      }}
    >
      {lang == 'es-ES' ? (
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
  )
}

export default LanguageButton
