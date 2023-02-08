import Image from 'next/image'
import React from 'react'

const LanguageButton = ({ lang }) => {
  return (
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
  )
}

export default LanguageButton
