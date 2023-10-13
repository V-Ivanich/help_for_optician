import Inputs from '../input-text/Inputs'
import './card.css'

const Card = ({ cardAttribute, id }) => {
  const placeholders = cardAttribute.inputs

  const handleCards = (e) => {
    console.log(e.target)
  }

  return (
    <div className='cardWrapper' id={id}>
      <div className='card__title'>
        <h4 className='card__text'>{cardAttribute.title}</h4>
      </div>
      <div className='card__body'>
        {cardAttribute.checks && (
          <div className='card__checkbox'>
            <input type='checkbox' />
            <label>{cardAttribute.checks}</label>
          </div>
        )}
        {placeholders.map((item, index) => (
          <Inputs key={index} attrb={item} withInput={'230px'} />
        ))}
      </div>
      <div className='card__result'>
        <label>Result : </label>
      </div>
      <div className='card__actions'>
        <button className='btn' onClick={handleCards}>
          Result
        </button>
        <button className='btn btn-clear'>Reset</button>
      </div>
    </div>
  )
}

export default Card
