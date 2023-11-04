import Card from '../card/Card'
import { useSelector } from 'react-redux'

import './sliders-card.css'

const SlideCard = () => {
  const data = useSelector((state) => state.cards.card)

  return (
    <div className='wrapper__slider'>
      {data.map((item, index) => (
        <Card
          key={index}
          cardAttribute={item}
          id={item.id}
          // FormulItem={Formul[ArrayFormuls[index]]}
        />
      ))}
    </div>
  )
}

export default SlideCard
