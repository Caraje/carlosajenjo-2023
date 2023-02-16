import '@/styles/globals.css'
import '@/styles/customProperties.css'
import { useEffect, useState } from 'react'
import { ThemeContext } from 'context/userContext'

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState()

  useEffect(() => {
    const themeLocal = localStorage.getItem('theme')
    if (themeLocal) {
      setTheme(themeLocal)
      return
    }
    const isDark = window.matchMedia('(prefers-color-scheme: dark)')
    isDark.matches ? setTheme('dark') : setTheme('light')
  }, [])
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  )
}
