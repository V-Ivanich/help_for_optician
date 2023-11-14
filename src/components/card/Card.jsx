import TextField from '../textField/TextField'
import { Formul } from '../../utils'
import './card.css'

const Card = ({ cardElements, id }) => {
  const placeholders = cardElements.inputs

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
      .querySelector('.card__result_' + cardElements.name)
      .querySelector('.result')
    const tempResult = FiltersFormul(arrayDataCard, target.name)
    outResult.innerHTML = tempResult
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
      <div className='cardWrapper' name={cardElements.name}>
        <div className='card__title'>
          <h4 className='card__text'>{cardElements.title}</h4>
        </div>
        <div className='card__body' id={'card_body_' + id}>
          {cardElements.checks && (
            <div className='card__checkbox'>
              {cardElements.checks.map((item, index) => (
                <label htmlFor={'check_box_' + id} key={index}>
                  <input
                    type='checkbox'
                    id={'check_box_' + id}
                    name={'check_box_' + id}
                    onChange={handleChecked}
                  />
                  {item}
                </label>
              ))}
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
        <div className='footer'>
          <div className={'card__result_' + cardElements.name}>
            <textarea
              className='result'
              placeholder='Результат:'
              wrap='hard'
              readOnly
              rows='3'></textarea>
          </div>
          <div className='card__actions'>
            <button
              className='btn'
              name={cardElements.name}
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
      </div>
    </>
  )
}

export default Card
