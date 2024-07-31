import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Spring } from '~/components'

dayjs.extend(relativeTime)

const placeholder = {
  timestamp: new Date(),
  subcategory: 'Offers',
  text: 'Joined to discount program',
  user: {
    firstName: 'J.',
    lastName: 'Davidson',
    avatar: 'https://placehold.it/100x100'
  }
}

function NotificationItem({ notification = placeholder, index }) {
  const fullName = `${notification.user.firstName} ${notification.user.lastName}`

  return (
    <Spring className='notification with-border flex gap-2.5' index={index}>
      <div className='w-[36px] h-[36px] shrink-0 rounded-md overflow-hidden bg-body'>
        <img src={notification.user.avatar} alt={fullName} />
      </div>

      <div>
        <span className='h6 !text-sm truncate max-w-[210px]'>{fullName}</span>
        <p>{notification.text}</p>
        <p className='flex items-center gap-1.5 mt-1 mb-2 text-sm font-medium text-gray'>
          <span>{dayjs(notification.timestamp).fromNow()}</span>
          <i className="icon-circle-solid text-[4px]"/>
          <span>{notification.subcategory}</span>
        </p>
        <div className='flex gap-2.5'>
          <button className='btn btn--outline size-xs blue'>Accept</button>
          <button className='btn btn--outline size-xs red'>Decline</button>
        </div>
      </div>

    </Spring>
  )
}

export default NotificationItem
