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
        theme === 'dark' ? setTheme('light') : setTheme('dark')
        // setTheme(!theme)
      }}
    >
      {theme === 'dark' ? (
        <LightTheme color='#ed1e79' />
      ) : (
        <DarkIcon color='#ed1e79' />
      )}
    </button>
  )
}

export default ThemeButton
