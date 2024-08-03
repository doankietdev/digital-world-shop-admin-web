import clsx from 'clsx'
import { forwardRef } from 'react'
import PropTypes from 'prop-types'

function TextInput({ id, label, error, ...props }, ref) {
  return (
    <div className="field-wrapper">
      <label htmlFor={id} className="field-label">{label}</label>
      <input
        id={id}
        className={clsx('field-input !pr-10', { 'field-input--error': error })}
        type="text"
        {...props}
        ref={ref}
      />
      {
        error && (
          <span className='field-error-message'>{error}</span>
        )
      }
    </div>
  )
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string
}

export default forwardRef(TextInput)
