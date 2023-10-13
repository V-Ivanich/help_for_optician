import './input-text.css'

const Inputs = ({ withInput, attrb }) => {
  return (
    <div style={{ width: withInput }}>
      <input className='number-input' type='number' placeholder={attrb} />
    </div>
  )
}

export default Inputs
