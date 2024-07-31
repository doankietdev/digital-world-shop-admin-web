import { Suspense } from 'react'
import { Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

// styles
import '~/styles/index.scss'
import ThemeStyles from '~/styles/theme'

// fonts
import '~/fonts/icomoon/icomoon.woff'

// components
import {
  Loader,
  AppBar
} from './components'
import { useTheme } from './contexts/ThemeContext'
import { useWindowSize } from 'react-use'

function App() {
  const { theme } = useTheme()
  const { width } = useWindowSize()

  return (
    <ThemeProvider theme={{ theme }} >
      <ThemeStyles />
      {width < 1280 && <AppBar />}
      <div className='app'>
        <div className='app_content'>
          {width >= 1280 && <AppBar />}
          <div className='main'>
            <Suspense fallback={<Loader />}>
              <Routes>
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
