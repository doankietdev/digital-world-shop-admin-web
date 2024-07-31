import dayjs from 'dayjs'
import { useCallback, useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'
import { DrawerBase, FilterItem, MessageItem, NotificationItem } from '~/components'
import { MESSAGE_OPTIONS } from '~/constants/options'
import messages from '~/db/messages'

const step = 6

function MessagesPanel({ open, onOpen, onClose }) {
  const [filter, setFilter] = useState(MESSAGE_OPTIONS[0].value)
  const [displayed, setDisplayed] = useState(step)
  const [headerRef, { height: headerHeight }] = useMeasure()
  const [footerRef, { height: footerHeight }] = useMeasure()

  const latestMessages = messages.filter(message => dayjs(message.createdAt).isAfter(dayjs().subtract(1, 'day')))
  const archivedMessages = messages.filter(message => message.archived)

  useEffect(() => {
    setFilter('all')
    setDisplayed(step)
  }, [open])

  const handleLoadMore = useCallback(() => {
    setDisplayed(displayed + step)
  }, [displayed])

  const filteredData = () => {
    if (filter === 'all') return messages
    if (filter === 'latest') return latestMessages
    if (filter === 'archived') return archivedMessages
  }

  const sortedData = () => filteredData().sort((a, b) => dayjs(b.createdAt).diff(dayjs(a.createdAt)))

  return (
    <DrawerBase
      anchor='right'
      open={open}
      onOpen={onOpen}
      onClose={onClose}
    >
      <div className='pt-[30px] px-[30px] pb-4' ref={headerRef}>
        <div className='flex justify-between items-center'>
          <h5>Messages</h5>
          <button
            className='text-accent text-lg transition hover:text-red'
            onClick={onClose}
          >
            <i className="icon-circle-xmark-regular"/>
          </button>
        </div>

        <div className='flex mt-5'>
          {
            MESSAGE_OPTIONS.map((item, index) => (
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
          sortedData().slice(0, displayed).map((message, index) => (
            <MessageItem key={`${message.id}-${filter}`} message={message} index={index}/>
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

export default MessagesPanel
