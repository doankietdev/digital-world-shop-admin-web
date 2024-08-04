import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

// styles
import '~/styles/index.scss'
import ThemeStyles from '~/styles/theme'

// fonts
import '~/fonts/icomoon/icomoon.woff'

// components
import { Loader, AppBar } from './components'
import { useTheme } from './contexts/ThemeContext'
import { useWindowSize } from 'react-use'
import SideBar from './components/SideBar'
import { SideBarProvider } from './contexts/SideBarContext'
import clsx from 'clsx'

const Login = lazy(() => import('~/pages/Login'))
const PageNotFound = lazy(() => import('~/pages/PageNotFound'))

function App() {
  const { theme } = useTheme()
  const { width } = useWindowSize()
  const path = useLocation().pathname

  const withSidebar = path !== '/login' && path !== '/404'

  return (
    <SideBarProvider>
      <ThemeProvider theme={{ theme }}>
        <ThemeStyles />
        {width < 1280 && withSidebar && <AppBar />}
        <div className={clsx('app', { fluid: !withSidebar })}>
          {withSidebar && <SideBar />}
          <div className="app_content">
            {width >= 1280 && withSidebar && <AppBar />}
            <div className="main">
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="*" element={<Navigate to="/404" />} />
                  <Route path="/404" element={<PageNotFound />} />
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
