import { useSelector, useDispatch } from 'react-redux'
import { activeCard, desactiveCard } from '../../store/cardSlice'

import { Formul } from '../../utils'
import './nav-menu.css'
import { useEffect, useState } from 'react'

export const NavMenu = () => {
  const arrayCards = useSelector((state) => state.cards.card)
  const activeCards = useSelector((state) => state.cards.activeCard)

  const [toggleCard, setToggleCard] = useState({})

  const dispatch = useDispatch()
  const { StatusButtons, CardsList } = Formul

  const handleToggleCard = ({ target }) => {
    const dataItem = StatusButtons(target)

    let position = 0
    if (activeCards.length) {
      activeCards.forEach((elem, index) => {
        if (elem.name === dataItem.id) {
          position = index
        }
      })
    }
    if (dataItem) {
      if (dataItem.activ === 'true') {
        const findCard = arrayCards.find((card) => card.name === dataItem.id)
        dispatch(activeCard(findCard))
      } else {
        dispatch(desactiveCard(dataItem.id))
      }
    }
    setToggleCard({
      id: dataItem.id,
      activ: dataItem.activ,
      position: position,
    })
  }

  useEffect(() => {
    CardsList(toggleCard, parseCards())
  }, [activeCards.length])

  function parseCards() {
    return activeCards.map((elem) => elem.name)
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
