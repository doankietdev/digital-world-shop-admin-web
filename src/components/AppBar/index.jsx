import { Search, NotificationsPanel, MessagesPanel } from '~/components'
import { useTheme } from '~/contexts/ThemeContext'
import Headroom from 'react-headroom'
import { useState } from 'react'
import { useSideBar } from '~/contexts/SideBarContext'
import { useWindowSize } from 'react-use'

function AppBar() {
  const { theme, toggleTheme } = useTheme()
  const [notificationsPanelOpen, setNotificationsPanelOpen] = useState(false)
  const [messagesPanelOpen, setMessagesPanelOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const { setOpen } = useSideBar()
  const { width } = useWindowSize()

  return (
    <>
      <Headroom style={{ zIndex: 999 }}>
        <div className='flex justify-between items-center'>
          {width < 1920 && (
            <button
              className='icon text-2xl leading-none'
              onClick={() => setOpen(true)}
              aria-label='Open sidebar'
            >
              <i className='icon-bars-solid' />
            </button>
          )}

          {width >= 768 && (
            <Search
              wrapperClassName='flex-1 max-w-[1054px] ml-5 mr-auto 4xl:ml-0'
              query={searchValue}
              setQuery={setSearchValue}
            />
          )}

          <div className='flex items-center gap-5 md:ml-5 xl:gap-[26px]'>
            {
              width < 768 &&
              <button
                className="text-[20px] leading-none text-gray dark:text-gray-red xl:text-2xl"
                aria-label="Open search"
                // onClick={() => setSearchModalOpen(true)}
              >
                <i className="icon-magnifying-glass-solid"/>
              </button>
            }
            <button
              className='text-2xl leading-none text-gray dark:text-gray-red'
              aria-label='Change theme'
              onClick={toggleTheme}
            >
              <i className={`icon-${theme === 'light' ? 'sun-bright' : 'moon'}-regular`}/>
            </button>

            <div className='relative h-fit mt-1.5 xl:self-end xl:mt-0 xl:mr-1.5'>
              <button className='text-lg leading-none text-gray dark:text-gray-red xl:text-[20px]'
                onClick={() => setNotificationsPanelOpen(true)}
                aria-label='Notifications'
              >
                <i className='icon-bell-solid'/>
              </button>
              <span className='absolute w-3 h-3 rounded-full bg-red -top-1.5 -right-1.5 border-[2px] border-body
                xl:w-6 xl:h-6 xl:-top-5 xl:-right-4 xl:flex xl:items-center xl:justify-center'
              >
                <span className='hidden text-xs font-bold text-white dark:text-[#00193B] xl:block'>
                  7
                </span>
              </span>
            </div>

            <div className='relative h-fit mt-1.5 xl:self-end xl:mt-0 xl:mr-1.5'>
              <button
                className='text-lg leading-none text-gray dark:text-gray-red xl:text-[20px]'
                onClick={() => setMessagesPanelOpen(true)}
                aria-label='Messages'
              >
                <i className='icon-message-solid'/>
              </button>
              <span className='absolute w-3 h-3 rounded-full bg-green -top-1.5 -right-1.5 border-[2px] border-body
                xl:w-6 xl:h-6 xl:-top-5 xl:-right-4 xl:flex xl:items-center xl:justify-center'
              >
                <span className='hidden text-xs font-bold text-white dark:text-[#00193B] xl:block'>
                  2
                </span>
              </span>
            </div>

            <div className='relative'>
              <button
                className='h-8 w-8 rounded-full bg-accent text-widget text-sm flex items-center
                justify-center relative xl:w-11 xl:h-11 xl:text-lg'
                // onClick={() => navigate('/general-settings')}
                aria-label='Account menu'
              >
                <i className='icon-user-solid'/>
              </button>
              <span className='badge-online'/>
            </div>
          </div>
        </div>
      </Headroom>

      <NotificationsPanel
        open={notificationsPanelOpen}
        onOpen={() => setNotificationsPanelOpen(true)}
        onClose={() => setNotificationsPanelOpen(false)}
      />

      <MessagesPanel
        open={messagesPanelOpen}
        onOpen={() => setMessagesPanelOpen(true)}
        onClose={() => setMessagesPanelOpen(false)}
      />
    </>
  )
}

export default AppBar
