import TextField from '../textField/TextField'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { SelectorEvents } from '../../utils/selectorEvents'
import './card.css'

const Card = ({ cardElements, id }) => {
  const [valueDisable, setDisabled] = useState(true)
  const placeholders = cardElements.inputs

  const handleChanges = ({ target, currentTarget }) => {
    SelectorEvents(target, currentTarget, setDisabled)
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
        id={cardElements.id}
        onChange={handleChanges}
        onClick={handleChanges}>
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
            <button
              className='btn'
              onClick={handleChanges}
              name={cardElements.name}
              disabled={valueDisable}>
              Result
            </button>
            <button
              className='btn btn-clear'
              onClick={() => handleClearDataCard('body-' + cardElements.name)}>
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
