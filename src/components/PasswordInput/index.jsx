import { useState, useEffect, forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

function PasswordInput({ id, label = 'Password', error, ...props }, ref) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = e => {
    e.preventDefault()
    setIsPasswordVisible(!isPasswordVisible)
  }

  useEffect(() => {
    props.value === '' && setIsPasswordVisible(false)
  }, [props.value])

  return (
    <div className="field-wrapper">
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input
          className={clsx('field-input !pr-10', { 'field-input--error': error })}
          id={id}
          type={isPasswordVisible ? 'text' : 'password'}
          ref={ref}
          {...props}/>
        <button className="field-btn"
          onClick={togglePasswordVisibility}
          aria-label="Toggle password visibility">
          <i className={`icon icon-eye${isPasswordVisible ? '-slash-regular' : '-regular' }`}/>
        </button>
      </div>
      {
        error && (
          <span className='field-error-message'>{error}</span>
        )
      }
    </div>
  )
}

PasswordInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string
}

export default forwardRef(PasswordInput)
