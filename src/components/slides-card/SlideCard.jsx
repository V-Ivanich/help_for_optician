import Card from '../card/Card'
import { useSelector } from 'react-redux'

// import { Formul } from '../../utils'
// import { ArrayFormuls } from '../../utils/formuls'
import './sliders-card.css'

const SlideCard = () => {
  const data = useSelector((state) => state.cards.activeCard)

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
