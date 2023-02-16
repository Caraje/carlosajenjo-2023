import '@/styles/globals.css'
import '@/styles/customProperties.css'
import { useEffect, useState } from 'react'
import { ThemeContext } from 'context/ThemeContext'
import { LangContext } from 'context/LangContext'

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState()
  const [lang, setLang] = useState('es_ES')

  // TEMA DE COLOR
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

  // Seleccion de lenguaje
  useEffect(() => {
    const langSistem = window.navigator.language
    const langLocal = localStorage.getItem('language')
    if (langLocal) return setLang(langLocal)

    langSistem === 'es-ES' ? setLang('es-ES') : setLang('en-EN')
  }, [])

  useEffect(() => {
    document.body.setAttribute('lang', lang)
    localStorage.setItem('language', lang)
  }, [lang])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LangContext.Provider value={{ lang, setLang }}>
        <Component {...pageProps} />
      </LangContext.Provider>
    </ThemeContext.Provider>
  )
}
