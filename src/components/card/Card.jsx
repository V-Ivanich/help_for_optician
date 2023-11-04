import TextField from '../textField/TextField'
import './card.css'

const Card = ({ cardAttribute, id, FormulItem }) => {
  const placeholders = cardAttribute.inputs

  const handleChangeCard = (e) => {
    const { value, name } = e.target
    console.log(value, name)
  }

  const handleChecked = (e) => {
    const { checked, name } = e.target
  }

  const handleSubmit = () => {
    const idsSingle = '#card_body_' + String(id)
    const nodeLists = document
      .querySelector(idsSingle)
      .querySelectorAll('input')
    const mass = []
    nodeLists.forEach((item) => {
      if (item.type === 'checkbox') {
        mass.push(item.checked)
      } else {
        mass.push(item.value)
      }
    })
  }

  return (
    <>
      <div className='cardWrapper' name={cardAttribute.name}>
        <div className='card__title'>
          <h4 className='card__text'>{cardAttribute.title}</h4>
        </div>
        <div className='card__body' id={'card_body_' + id}>
          {cardAttribute.checks && (
            <div className='card__checkbox'>
              <input
                type='checkbox'
                id={'check_box_' + id}
                name={'check_box_' + id}
                onChange={handleChecked}
              />
              <label htmlFor={'check_box_' + id}>{cardAttribute.checks}</label>
            </div>
          )}
          {placeholders.map((item, index) => (
            <TextField
              key={index}
              placeholder={item}
              type='number'
              name={'textField_' + id + index}
              onChange={handleChangeCard}
            />
          ))}
        </div>
        <div className='card__result'>
          <label>Result : </label>
        </div>
        <div className='card__actions'>
          <button className='btn' name={'wrapper_' + id} onClick={handleSubmit}>
            Result
          </button>
          <button className='btn btn-clear'>Reset</button>
        </div>
      </div>
    </>
  )
}

export default Card
