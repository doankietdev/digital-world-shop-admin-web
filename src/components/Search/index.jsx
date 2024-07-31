import PropTypes from 'prop-types'
import clsx from 'clsx'

function Search({ placeholder = 'Search...', query, setQuery, wrapperClassName = '' }) {
  return (
    <div className={clsx('relative', wrapperClassName)}>
      <input
        type="search"
        placeholder={placeholder}
        className="field-input !pr-[40px]"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button className="field-btn icon" aria-label='Search'>
        <i className="icon-magnifying-glass-solid" />
      </button>
    </div>
  )
}

Search.propTypes = {
  placeholder: PropTypes.string,
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  wrapperClassName: PropTypes.string
}

export default Search
