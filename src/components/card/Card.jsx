import TextField from '../textField/TextField'
import PropTypes from 'prop-types'
// import { Formul } from '../../utils'
import './card.css'
import HandleFaska from '../../utils/handlers/handleFaska'
import HandlePlFaska from '../../utils/handlers/handlePlFaska'

const Card = ({ cardElements, id }) => {
  const placeholders = cardElements.inputs

  // const { FiltersFormul } = Formul

  const handleSubmit = ({ target, currentTarget }) => {
    switch (currentTarget.id) {
      case 'wrapper-faska':
        HandleFaska(target, currentTarget)
        break
      case 'wrapper-pl_faska':
        HandlePlFaska(target, currentTarget)
        break
      case 'wrapper-cvet':
        break
      case 'wrapper-strelka':
        break
      case 'wrapper-klin':
        break
      case 'wrapper-dead_cvet':
        break
      case 'wrapper-treygolnik':
        break
      case 'wrapper-grad_rad':
        break
    }
    // const idsSingle = '#card_body_' + String(id)
    // const nodeLists = document
    //   .querySelector(idsSingle)
    //   .querySelectorAll('input')
    // const arrayDataCard = []
    // nodeLists.forEach((item) => {
    //   if (item.type === 'checkbox') {
    //     arrayDataCard.push(item.checked)
    //   } else {
    //     arrayDataCard.push(+item.value)
    //   }
    // })

    // const outResult = document
    //   .querySelector('.card__result_' + cardElements.name)
    //   .querySelector('.result')
    // const tempResult = FiltersFormul(arrayDataCard, target.name)
    // outResult.innerHTML = tempResult
  }

  const handleClearDataCard = (id) => {
    const nodeLists = document.querySelector(`#${id}`).querySelectorAll('input')
    nodeLists.forEach((item) => {
      if (item.type === 'checkbox') item.checked = false
      else item.value = ''
    })
    const resultClear = document
      .querySelector('.card__result_' + cardElements.name)
      .querySelector('.result')
    resultClear.innerHTML = ''
  }

  return (
    <>
      <div
        className='cardWrapper'
        name={cardElements.name}
        id={'wrapper-' + cardElements.name}
        onClick={handleSubmit}>
        <div className='card__title'>
          <h4 className='card__text'>{cardElements.title}</h4>
        </div>
        <div className='card__body' id={'body-' + cardElements.name}>
          {cardElements.checks && (
            <div
              className='card__checkbox'
              id={'checkbox-' + cardElements.name}>
              {cardElements.checks.map((item, index) => (
                <label
                  htmlFor={'check_box_' + cardElements.name + index}
                  key={index}
                  id={'label-' + index}>
                  <input
                    type='checkbox'
                    id={'check_box_' + cardElements.name + index}
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
            />
          ))}
        </div>
        <div className='footer' id={'footer-' + cardElements.name}>
          <div className={'card__result_' + cardElements.name}>
            <textarea
              className='result'
              id={'result-' + cardElements.name}
              placeholder='Результат:'
              wrap='hard'
              readOnly
              rows='3'></textarea>
          </div>
          <div className='card__actions' id={'actions-' + cardElements.name}>
            <button className='btn' name={cardElements.name} disabled>
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

Card.propTypes = {
  cardElements: PropTypes.object,
  id: PropTypes.string,
}
