import Card from '../card/Card'
import { BaseFormuls } from '../../data/templates_formuls'
import './sliders-card.css'

const SlideCard = () => {
  return (
    <div className='wrapper__slider'>
      {BaseFormuls.map((item, index) => (
        <Card key={index} cardAttribute={item} id={index} />
      ))}
    </div>
  )
}

export default SlideCard
