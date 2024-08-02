import { useEffect, useState } from 'react'
import SideBarContext from './SideBarContext'
import { useLocation } from 'react-router-dom'
import { useScrollLock } from '~/hooks'

function SideBarProvider({ children }) {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const { setIsLocked } = useScrollLock()

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    setIsLocked(open)

    return () => {
      setIsLocked(false)
    }
  }, [open, setIsLocked])

  return (
    <SideBarContext.Provider value={{ open, setOpen }}>
      {children}
    </SideBarContext.Provider>
  )
}

export default SideBarProvider
