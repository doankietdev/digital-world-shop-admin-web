import clsx from 'clsx'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import dark from '~/assets/logo_dark.svg'
import light from '~/assets/logo_light.svg'
import { useTheme } from '~/contexts/ThemeContext'

const Logo = ({ imgClassName, textClassName }) => {
  const { theme } = useTheme()

  return (
    <NavLink className='logo' to='/'>
      <span className={clsx('logo_img relative', imgClassName)}>
        <img src={light} alt='Digital Shop' />
        <img className={clsx('absolute top-0 left-0', { 'hidden': theme === 'light' })}
          src={dark}
          alt='Digital Shop'
        />
      </span>
      <h4 className={clsx('logo_text', textClassName)}>Digital Shop</h4>
    </NavLink>
  )
}

export default memo(Logo)
