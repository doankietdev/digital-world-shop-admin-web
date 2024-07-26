import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ThemeStyles from '~/assets/styles/theme.js'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider } from '~/contexts/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <StyledThemeProvider theme={{ theme: 'light' }}>
        <ThemeStyles />
        <App />
      </StyledThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
)
