import { useSelector, useDispatch } from 'react-redux'
import { activeCard, desactiveCard } from '../../store/cardSlice'

import { Formul } from '../../utils'
import './nav-menu.css'

export const NavMenu = () => {
  const arrayCards = useSelector((state) => state.cards.card)
  const activeCards = useSelector((state) => state.cards.activeCard)

  const dispatch = useDispatch()

  const { StatusButtons, CardsList } = Formul

  const handleToggleCard = ({ target }) => {
    const dataItem = StatusButtons(target)
    if (dataItem) {
      if (dataItem.activ === 'true') {
        const findCard = arrayCards.find((card) => card.name === dataItem.id)
        dispatch(activeCard(findCard))
      } else {
        dispatch(desactiveCard(dataItem.id))
      }
    }
    CardsList(dataItem, activeCards)
  }

  return (
    <div className='container-menu'>
      <div className='nav-menu'>
        {arrayCards.map((card, index) => (
          <button
            className='links-formul'
            key={index}
            id={card.name}
            value='false'
            onClick={handleToggleCard}>
            {card.menuTitle}
          </button>
        ))}
      </div>
    </div>
  )
}
