import DarkIcon from 'components/icons/Dark-icon'
import LightTheme from 'components/icons/Light-icon'
import React from 'react'

const ThemeButton = ({ theme }) => {
  return (
    <button>
      {theme ? <DarkIcon color='#ed1e79' /> : <LightTheme color='#ed1e79' />}
    </button>
  )
}

export default ThemeButton
