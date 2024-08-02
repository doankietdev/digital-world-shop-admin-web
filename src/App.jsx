import { Suspense } from 'react'
import { Routes, useLocation } from 'react-router-dom'
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
import SideBar from './components/SideBar'
import { SideBarProvider } from './contexts/SideBarContext'

function App() {
  const { theme } = useTheme()
  const { width } = useWindowSize()
  const path = useLocation().pathname

  const withSidebar = path !== '/login' && path !== '/404'

  return (
    <SideBarProvider>
      <ThemeProvider theme={{ theme }} >
        <ThemeStyles />
        {width < 1280 && withSidebar && <AppBar />}
        <div className='app'>
          {withSidebar && <SideBar />}
          <div className='app_content'>
            {width >= 1280 && withSidebar && <AppBar />}
            <div className='main'>
              <Suspense fallback={<Loader />}>
                <Routes>
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </SideBarProvider>
  )
}

export default App
