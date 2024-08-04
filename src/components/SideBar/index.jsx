import Collapse from '@mui/material/Collapse'
import clsx from 'clsx'
import { useState, Fragment } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useWindowSize } from 'react-use'
import { DrawerBase, Logo } from '~/components'
import ROUTES from '~/constants/routes'
import styles from './styles.module.scss'
import { useSideBar } from '~/contexts/SideBarContext'

function SideBar() {
  const location = useLocation()
  const { width } = useWindowSize()
  const { open, setOpen } = useSideBar()

  const [active, setActive] = useState(() => {
    const nestedRoutes = ROUTES.filter((ROUTE) => ROUTE.links)
    const matchedRoute = nestedRoutes.find((route) =>
      route.links.some((link) => link.path === location.pathname)
    )
    return matchedRoute?.name || ''
  })

  const isPermanent = width >= 1920

  return (
    <DrawerBase
      variant={isPermanent ? 'permanent' : 'temporary'}
      paperClassName="px-[27px] py-[35px]"
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <Logo />
      <nav className={styles.menu}>
        {ROUTES.map((ROUTE, index) => (
          <Fragment key={index}>
            {ROUTE.links && (
              <>
                <div>
                  <div
                    className={clsx(styles.menuItem, {
                      [styles.menuItemActive]: active === ROUTE.name
                    })}
                    onClick={() =>
                      setActive(active === ROUTE.name ? '' : ROUTE.name)
                    }
                  >
                    <div className="flex items-center gap-2.5">
                      <i
                        className={clsx(
                          styles.menuItemIcon,
                          `icon-${ROUTE.icon}`
                        )}
                      />
                      <span>{ROUTE.name}</span>
                    </div>
                    <button aria-label="Toggle submenu">
                      <i
                        className={clsx(
                          styles.menuItemIcon,
                          styles.menuItemIconCaret,
                          'icon-caret-right-solid'
                        )}
                      />
                    </button>
                  </div>

                  <Collapse
                    in={active === ROUTE.name}
                    timeout="auto"
                    unmountOnExit
                  >
                    <div
                      className={clsx(styles.submenu, 'flex flex-col gap-2.5')}
                    >
                      {ROUTE.links.map((link) => (
                        <NavLink
                          key={link.name}
                          to={link.path}
                          className={({ isActive }) =>
                            clsx(styles.menuItem, styles.submenuItem, {
                              [styles.menuItemActive]: isActive
                            })
                          }
                        >
                          <span className="flex items-center gap-2.5">
                            <i
                              className={clsx(
                                styles.submenuItemIcon,
                                'icon-circle-solid'
                              )}
                            />
                            <span>{link.name}</span>
                          </span>
                        </NavLink>
                      ))}
                    </div>
                  </Collapse>
                </div>

                {index === ROUTES.length - 2 && (
                  <span className={styles.menuDivider} />
                )}
              </>
            )}

            {!ROUTE.links && (
              <>
                <NavLink
                  to={ROUTE.path}
                  className={({ isActive }) =>
                    clsx(styles.menuItem, { [styles.menuItemActive]: isActive })
                  }
                >
                  <div className="flex items-center gap-2.5">
                    <i
                      className={clsx(
                        styles.menuItemIcon,
                        `icon-${ROUTE.icon}`
                      )}
                    />
                    <span>{ROUTE.name}</span>
                  </div>
                </NavLink>

                {index === ROUTES.length - 2 && (
                  <span className={styles.menuDivider} />
                )}
              </>
            )}
          </Fragment>
        ))}
      </nav>
    </DrawerBase>
  )
}

export default SideBar
