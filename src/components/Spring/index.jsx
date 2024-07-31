import { useSpring, animated } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import PropTypes from 'prop-types'

function Spring({
  children,
  className = '',
  index = 1,
  type = 'fade',
  duration = 300,
  delay = 100 * index,
  ...props
}) {
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  const commonProps = {
    config: { duration },
    delay
  }

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
    ...commonProps,
    ...props
  })

  const slideLeft = useSpring({
    from: { transform: 'translateX(50px)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
    ...commonProps,
    ...props
  })

  const slideUp = useSpring({
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    ...commonProps,
    ...props
  })

  const zoom = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    ...commonProps,
    ...props
  })

  const spring = {
    fade,
    slideLeft,
    slideUp,
    zoom
  }

  return (
    <animated.div className={className} id={props.id} style={spring[type]} ref={ref}>
      {children}
    </animated.div>
  )
}

Spring.propTypes = {
  className: PropTypes.string,
  index: PropTypes.number,
  type: PropTypes.oneOf(['fade', 'slideUp', 'slideLeft', 'zoom']),
  duration: PropTypes.number,
  delay: PropTypes.number
}
export default Spring
