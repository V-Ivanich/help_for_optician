import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { desactiveCard, activeCard } from '../../store/cardSlice'
import './nav-menu.css'
// import { Formul } from '../../utils'

const NavMenu = () => {
  const dataCards = useSelector((state) => state.cards.card)
  const activeData = useSelector((state) => state.cards.activeCard)
  const [countCards, setCountCard] = useState(0)
  const dispatch = useDispatch()

  // const { Bevel } = Formul

  const handleToggleCard = ({ target }) => {
    if (activeData.length > 0 && activeData.length <= 3) {
      const presence = activeData.find((item) => item.id === target.id)
      if (presence !== undefined) {
        const position = activeData.indexOf(presence)
        const id = presence.id
        setCountCard(countCards - 1)
        AnimationRevomeCard(position)
        setTimeout(() => {
          dispatch(desactiveCard({ id }))
        }, 1000)
        return
      }
    }
    if (activeData.length < 3) {
      const findCard = dataCards.find((item) => item.id === target.id)
      dispatch(activeCard(findCard))
    }
  }

  useEffect(() => {
    if (countCards < activeData.length) {
      setCountCard(countCards + 1)
      AnimationAddCard()
    } else {
      console.log(countCards)
      // setCountCard(countCards - 1)
      return
      // AnimationRevomeCard()
    }
  }, [activeData.length])

  const AnimationAddCard = () => {
    const nodeCard = document.querySelectorAll('.cardWrapper')
    switch (nodeCard.length) {
      case 1:
        nodeCard[0].removeAttribute('class')
        nodeCard[0].classList.add('cardWrapper')
        nodeCard[0].classList.add('add-card_1')
        break
      case 2:
        nodeCard[0].removeAttribute('class')
        nodeCard[0].classList.add('cardWrapper')
        nodeCard[0].classList.add('add-card_2_1')

        nodeCard[1].removeAttribute('class')
        nodeCard[1].classList.add('cardWrapper')
        nodeCard[1].classList.add('add-card_2_2')
        break
      case 3:
        nodeCard[0].removeAttribute('class')
        nodeCard[0].classList.add('cardWrapper')
        nodeCard[0].classList.add('add-card_3_1')

        nodeCard[1].removeAttribute('class')
        nodeCard[1].classList.add('cardWrapper')
        nodeCard[1].classList.add('add-card_3_2')

        nodeCard[2].classList.add('add-card_3_3')
        break
    }
  }

  function AnimationRevomeCard(position) {
    const nodeCard = document.querySelectorAll('.cardWrapper')
    switch (countCards) {
      case 1:
        nodeCard[0].removeAttribute('class')
        nodeCard[0].classList.add('cardWrapper')
        nodeCard[0].classList.add('remove-card_1')
        break
      case 2:
        if (position === 0) {
          nodeCard[0].removeAttribute('class')
          nodeCard[0].classList.add('cardWrapper')
          nodeCard[0].classList.add('remove-revers-card_2_1')

          nodeCard[1].removeAttribute('class')
          nodeCard[1].classList.add('cardWrapper')
          nodeCard[1].classList.add('remove-revers-card_2_2')

          setTimeout(() => {
            nodeCard[0].removeAttribute('class')
            nodeCard[0].classList.add('cardWrapper')
            nodeCard[0].classList.add('static-card-1')
          }, 820)
          break
        } else {
          nodeCard[0].removeAttribute('class')
          nodeCard[0].classList.add('cardWrapper')
          nodeCard[0].classList.add('remove-card_2_1')

          nodeCard[1].removeAttribute('class')
          nodeCard[1].classList.add('cardWrapper')
          nodeCard[1].classList.add('remove-card_2_2')
          break
        }
      case 3:
        if (position === 0) {
          nodeCard[0].removeAttribute('class')
          nodeCard[0].classList.add('cardWrapper')
          nodeCard[0].classList.add('remove-revers-card_3_1')

          nodeCard[1].removeAttribute('class')
          nodeCard[1].classList.add('cardWrapper')
          nodeCard[1].classList.add('add-card_2_1')

          nodeCard[2].removeAttribute('class')
          nodeCard[2].classList.add('cardWrapper')
          nodeCard[2].classList.add('remove-revers-card_3_2')

          setTimeout(() => {
            nodeCard[0].removeAttribute('class')
            nodeCard[0].classList.add('cardWrapper')
            nodeCard[0].classList.add('static-card-3-1')

            nodeCard[1].removeAttribute('class')
            nodeCard[1].classList.add('cardWrapper')
            nodeCard[1].classList.add('static-card-3-2')
          }, 830)
          break
        }
        if (position === 1) {
          nodeCard[0].removeAttribute('class')
          nodeCard[0].classList.add('cardWrapper')
          nodeCard[0].classList.add('remove-card_3_1')

          nodeCard[1].removeAttribute('class')
          nodeCard[1].classList.add('cardWrapper')
          nodeCard[1].classList.add('remove-revers-card_3_3')

          nodeCard[2].removeAttribute('class')
          nodeCard[2].classList.add('cardWrapper')
          nodeCard[2].classList.add('remove-revers-card_3_2')

          setTimeout(() => {
            nodeCard[1].removeAttribute('class')
            nodeCard[1].classList.add('cardWrapper')
            nodeCard[1].classList.add('static-card-3-2')
          }, 800)
          break
        } else {
          nodeCard[0].removeAttribute('class')
          nodeCard[0].classList.add('cardWrapper')
          nodeCard[0].classList.add('remove-card_3_1')

          nodeCard[1].removeAttribute('class')
          nodeCard[1].classList.add('cardWrapper')
          nodeCard[1].classList.add('remove-card_3_2')

          nodeCard[2].removeAttribute('class')
          nodeCard[2].classList.add('cardWrapper')
          nodeCard[2].classList.add('remove-card_3_3')
          break
        }
    }
  }

  return (
    <div className='container-menu'>
      <div className='nav-menu'>
        {dataCards.map((card, index) => (
          <button
            className='links-formul'
            key={index}
            id={index}
            onClick={handleToggleCard}>
            {card.menuTitle}
          </button>
        ))}
      </div>
    </div>
  )
}

export default NavMenu
