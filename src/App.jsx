import { Suspense } from 'react'
import { Routes } from 'react-router-dom'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { toast, ToastContainer } from 'react-toastify'

// styles
import '~/assets/styles/index.scss'
import 'react-toastify/dist/ReactToastify.min.css'
import ThemeStyles from '~/assets/styles/theme.js'

// fonts
import '~/assets/fonts/icomoon/icomoon.woff'

// components
import Loader from './Loader'
import { useTheme } from './contexts/ThemeContext'

function App() {
  const { theme } = useTheme()

  toast.success('Success')

  return (
    <StyledThemeProvider theme={{ theme }}>
      <ThemeStyles />
      <ToastContainer theme={theme} autoClose={3000} style={{ padding: '20px' }} />
      <div className='app'>
        <div className='app_content'>
          <div className='main'>
            <Suspense fallback={<Loader />}>
              <Routes>
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </StyledThemeProvider>
  )
}

export default App
