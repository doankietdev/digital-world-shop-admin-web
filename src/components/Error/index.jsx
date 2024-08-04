import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Logo } from '~/components'
import styles from './styles.module.scss'
import collage from '~/assets/collage_404.webp'

function Error({ code, title }) {
  return (
    <div className={styles.container}>
      <img className={styles.media} src={collage} alt="error" />
      <div className={styles.main}>
        <span className={styles.mainCode}>{code}</span>
        <h1 className={styles.mainTitle}>{title}</h1>
        <NavLink className={`${styles.mainBtn} btn btn--primary`} to="/">
          Back to Home Page
        </NavLink>
      </div>
      <div className={styles.logo}>
        <Logo imgClass={styles.logoImg} textClass={styles.logoText} />
      </div>
    </div>
  )
}

Error.propTypes = {
  code: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default Error
