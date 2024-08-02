import { useState, useEffect } from 'react'

const useScrollLock = () => {
  const [isLocked, setIsLocked] = useState(false)

  useEffect(() => {
    isLocked ?
      document.documentElement.classList.add('no-scroll')
      : document.documentElement.classList.remove('no-scroll')
  }, [isLocked])

  return { isLocked, setIsLocked }
}

export default useScrollLock
