import { useCallback, useState } from 'react'
import useMeasure from 'react-use-measure'
import { DrawerBase, FilterItem, NotificationItem } from '~/components'
import { NOTIFICATION_OPTIONS } from '~/constants/options'
import notifications from '~/db/notifications'

const step = 6

function NotificationsPanel({ open, onOpen, onClose }) {
  const [filter, setFilter] = useState(NOTIFICATION_OPTIONS[0].value)
  const [displayed, setDisplayed] = useState(step)
  const [headerRef, { height: headerHeight }] = useMeasure()
  const [footerRef, { height: footerHeight }] = useMeasure()

  const handleLoadMore = useCallback(() => {
    setDisplayed(displayed + step)
  }, [displayed])

  const filteredData = () => {
    return notifications.filter(
      notification => filter === NOTIFICATION_OPTIONS[0].value ? true
        : notification.category === filter
    )
  }

  return (
    <DrawerBase
      anchor='right'
      open={open}
      onOpen={onOpen}
      onClose={onClose}
    >
      <div className='pt-[30px] px-[30px] pb-4' ref={headerRef}>
        <div className='flex justify-between items-center'>
          <h5>Notifications</h5>
          <button
            className='text-accent text-lg transition hover:text-red'
            onClick={onClose}
          >
            <i className="icon-circle-xmark-regular"/>
          </button>
        </div>

        <div className='flex mt-5'>
          {
            NOTIFICATION_OPTIONS.map((item, index) => (
              <FilterItem
                key={index}
                text={item.label}
                quantity={9}
                value={item.value}
                active={filter}
                onClick={() => setFilter(item.value)}
              />
            ))
          }
        </div>
      </div>

      <div className='overflow-y-auto' style={{ height: `calc(100vh - ${headerHeight + footerHeight}px)` }}>
        {
          filteredData()
            .slice(0, displayed)
            .sort((a, b) => {
              return b.timestamp - a.timestamp
            })
            .map((notification, index) => (
              <NotificationItem
                key={index}
                notification={notification}
                index={index}
              />
            ))
        }
      </div>

      <div className='p-[30px]' ref={footerRef}>
        <button className='btn btn--secondary w-full' onClick={handleLoadMore}>
          Load more
        </button>
      </div>
    </DrawerBase>
  )
}

export default NotificationsPanel
