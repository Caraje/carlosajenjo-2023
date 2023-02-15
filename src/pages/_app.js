import '@/styles/globals.css'
import '@/styles/customProperties.css'
import { useState } from 'react'
import { ThemeContext } from 'context/userContext'
// import ''

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(false)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  )
}
