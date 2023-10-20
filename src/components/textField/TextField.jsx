import PropTypes from 'prop-types'

import './text-field.css'

const TextField = (props) => {
  const { name, value, onChange, type, placeholder } = props
  return (
    <div>
      <input
        className='number-input'
        type={type}
        value={value}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

TextField.defaultValues = {
  type: 'number',
}

TextField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

export default TextField
