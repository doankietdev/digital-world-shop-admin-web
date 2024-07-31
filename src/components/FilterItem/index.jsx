import PropTypes from 'prop-types'
import styles from './styles.module.scss'

function FilterItem({ text, quantity = 0, value, active, onClick }) {
  return (
    <button
      className={`${styles.button} ${value === active ? styles.active : ''}`}
      onClick={() => onClick(value)}
    >
      <span className={`${styles.text} subheading-2`}>{text}</span>
      <span className="text-sm text-highlight-inverse">({quantity})</span>
    </button>
  )
}

FilterItem.propTypes = {
  text: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  value: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default FilterItem
