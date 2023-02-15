import DarkIcon from 'components/icons/Dark-icon'
import LightTheme from 'components/icons/Light-icon'
import { ThemeContext } from 'context/userContext'
import React, { useContext } from 'react'

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  console.log(theme)

  return (
    <button
      onClick={() => {
        setTheme(!theme)
      }}
    >
      {theme ? <DarkIcon color='#ed1e79' /> : <LightTheme color='#ed1e79' />}
    </button>
  )
}

export default ThemeButton
