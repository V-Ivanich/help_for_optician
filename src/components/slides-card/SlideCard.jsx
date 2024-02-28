import Card from '../card/Card'
import { temlateCards } from '../../data/templates_formuls'

import './sliders-card.css'

const SlideCard = () => {
  return (
    <div className='wrapper__slider'>
      {temlateCards.map((item, index) => (
        <Card key={index} cardElements={item} id={item.id} />
      ))}
    </div>
  )
}

export default SlideCard
