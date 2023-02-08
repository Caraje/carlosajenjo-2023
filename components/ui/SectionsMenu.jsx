import React from 'react'
import { sections } from 'utils/sections'

const SectionsMenu = () => {
  return sections.map((sec) => {
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
