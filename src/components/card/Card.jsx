import TextField from '../textField/TextField'
import { Formul } from '../../utils'
import './card.css'

const Card = ({ cardAttribute, id, FormulItem }) => {
  const placeholders = cardAttribute.inputs

  const { FiltersFormul } = Formul

  const handleChangeCard = (e) => {
    const { value, name } = e.target
    // console.log(value, name)
  }

  const handleChecked = (e) => {
    const { checked, name } = e.target
  }

  const handleSubmit = ({ target }) => {
    const idsSingle = '#card_body_' + String(id)
    const nodeLists = document
      .querySelector(idsSingle)
      .querySelectorAll('input')
    const arrayDataCard = []
    nodeLists.forEach((item) => {
      if (item.type === 'checkbox') {
        arrayDataCard.push(item.checked)
      } else {
        arrayDataCard.push(+item.value)
      }
    })

    const outResult = document
      .querySelector('.card__result_' + cardAttribute.name)
      .querySelector('label')
    const tempResult = FiltersFormul(arrayDataCard, target.name)
    outResult.innerText = 'Result:\u00A0\u00A0\u00A0' + tempResult.toFixed(3)
  }

  const handleClearDataCard = (id) => {
    const nodeLists = document.querySelector(`#${id}`).querySelectorAll('input')
    nodeLists.forEach((item) => {
      if (item.type === 'checkbox') item.checked = false
      else item.value = ''
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
        <div className={'card__result_' + cardAttribute.name}>
          <label className='result'>Result : </label>
        </div>
        <div className='card__actions'>
          <button
            className='btn'
            name={cardAttribute.name}
            onClick={handleSubmit}>
            Result
          </button>
          <button
            className='btn btn-clear'
            onClick={() => handleClearDataCard('card_body_' + id)}>
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export default Card
