import { Suspense } from 'react'
import { Routes } from 'react-router-dom'

// styles
import '~/assets/styles/index.scss'

// fonts
import '~/assets/fonts/icomoon/icomoon.woff'

// components
import Loader from './Loader'

function App() {

  return (
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
  )
}

export default App
