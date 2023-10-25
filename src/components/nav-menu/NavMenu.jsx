import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import {
  desactiveCard,
  activeCard,
  restoreClassAdd,
  restoreClassClear,
} from '../../store/cardSlice'
import './nav-menu.css'
import { Formul } from '../../utils'

const NavMenu = () => {
  const { StatusButtons } = Formul
  const dataCards = useSelector((state) => state.cards.card)
  const activeData = useSelector((state) => state.cards.activeCard)
  const [countCards, setCountCard] = useState(0)
  const dispatch = useDispatch()

  // const { Bevel } = Formul
  const handleToggleCard = ({ target }) => {
    StatusButtons(target)
    return
  }
  // const handleToggleCard = ({ target }) => {
  //   if (activeData.length > 0 && activeData.length <= 3) {
  //     const presence = activeData.find((item) => item.id === target.id)
  //     if (presence !== undefined) {
  //       const position = activeData.indexOf(presence)
  //       console.log('position-start', position)
  //       const id = presence.id
  //       setCountCard(countCards - 1)
  //       AnimationRevomeCard(position)
  //       setTimeout(() => {
  //         dispatch(desactiveCard({ id }))
  //         // dispatch(restoreClassClear())
  //       }, 1000)
  //       return
  //     }
  //   }
  //   if (activeData.length < 3) {
  //     const findCard = dataCards.find((item) => item.id === target.id)
  //     dispatch(activeCard(findCard))
  //   }
  // }

  useEffect(() => {
    if (countCards < activeData.length) {
      setCountCard(countCards + 1)
      console.log('кол-во карт- ', countCards)

      AnimationAddCard()
    } else {
      setCountCard(countCards - 1)
      console.log('кол-во карт- ', countCards)
      // AnimationRevomeCard()
    }
  }, [activeData.length])

  const AnimationAddCard = () => {
    let elem_1 = null
    let elem_2 = null
    let elem_3 = null

    const nodeCard = activeData.map((item) => item.name)

    switch (nodeCard.length) {
      case 1:
        elem_1 = document.querySelector(`.${nodeCard[0]}`)

        elem_1.removeAttribute('class')
        elem_1.classList.add('cardWrapper')
        elem_1.classList.add(nodeCard[0])
        elem_1.classList.add('add-card_1')
        break
      case 2:
        elem_1 = document.querySelector(`.${nodeCard[0]}`)
        elem_2 = document.querySelector(`.${nodeCard[1]}`)

        elem_1.removeAttribute('class')
        elem_1.classList.add('cardWrapper')
        elem_1.classList.add(nodeCard[0])
        elem_1.classList.add('add-card_2_1')

        elem_2.removeAttribute('class')
        elem_2.classList.add('cardWrapper')
        elem_2.classList.add(nodeCard[1])
        elem_2.classList.add('add-card_2_2')
        break
      case 3:
        elem_1 = document.querySelector(`.${nodeCard[0]}`)
        elem_2 = document.querySelector(`.${nodeCard[1]}`)
        elem_3 = document.querySelector(`.${nodeCard[2]}`)

        elem_1.removeAttribute('class')
        elem_1.classList.add('cardWrapper')
        elem_1.classList.add(nodeCard[0])
        elem_1.classList.add('add-card_3_1')

        elem_2.removeAttribute('class')
        elem_2.classList.add('cardWrapper')
        elem_2.classList.add(nodeCard[1])
        elem_2.classList.add('add-card_3_2')

        elem_3.classList.add('add-card_3_3')
        break
    }
  }

  function AnimationRevomeCard(position) {
    console.log('in anime -positions', position)
    let elem_1 = null
    let elem_2 = null
    let elem_3 = null

    const nodeCard = activeData.map((item) => item.name)

    switch (countCards) {
      case 1:
        elem_1 = document.querySelector(`.${nodeCard[0]}`)

        elem_1.removeAttribute('class')
        elem_1.classList.add('cardWrapper')
        elem_1.classList.add(nodeCard[0])
        elem_1.classList.add('remove-card_1')
        break

      case 2:
        elem_1 = document.querySelector(`.${nodeCard[0]}`)
        elem_2 = document.querySelector(`.${nodeCard[1]}`)

        if (position === 0) {
          console.log('in-0')
          dispatch(
            restoreClassAdd({
              id: elem_2.id,
              restorClass: 'static-card-1',
            }),
            elem_1.removeAttribute('class'),
            elem_1.classList.add('cardWrapper'),
            elem_1.classList.add(nodeCard[0]),
            elem_1.classList.add('remove-revers-card_2_1'),

            elem_2.removeAttribute('class'),
            elem_2.classList.add('cardWrapper'),
            elem_2.classList.add(nodeCard[1]),
            elem_2.classList.add('remove-revers-card_2_2'),
          )

          break
        } else {
          elem_1.removeAttribute('class')
          elem_1.classList.add('cardWrapper')
          elem_1.classList.add(nodeCard[0])
          elem_1.classList.add('remove-card_2_1')

          elem_2.removeAttribute('class')
          elem_2.classList.add('cardWrapper')
          elem_2.classList.add(nodeCard[1])
          elem_2.classList.add('remove-card_2_2')
          break
        }
      case 3:
        elem_1 = document.querySelector(`.${nodeCard[0]}`)
        elem_2 = document.querySelector(`.${nodeCard[1]}`)
        elem_3 = document.querySelector(`.${nodeCard[2]}`)
        if (position === 0) {
          elem_1.removeAttribute('class')
          elem_1.classList.add('cardWrapper')
          elem_1.classList.add(nodeCard[0])
          elem_1.classList.add('remove-revers-card_3_1')

          elem_2.removeAttribute('class')
          elem_2.classList.add('cardWrapper')
          elem_2.classList.add(nodeCard[1])
          elem_2.classList.add('add-card_2_1')
          dispatch(
            restoreClassAdd({ id: elem_2.id, restorClass: 'static-card-3-1' }),
          )

          elem_3.removeAttribute('class')
          elem_3.classList.add('cardWrapper')
          elem_3.classList.add(nodeCard[2])
          elem_3.classList.add('remove-revers-card_3_2')
          dispatch(
            restoreClassAdd({
              id: elem_3.id,
              restorClass: 'static-card-3-2',
            }),
          )

          break
        }
        if (position === 1) {
          elem_1.removeAttribute('class')
          elem_1.classList.add('cardWrapper')
          elem_1.classList.add(nodeCard[0])
          elem_1.classList.add('remove-card_3_1')
          dispatch(
            restoreClassAdd({ id: elem_1.id, restorClass: 'static-card-3-1' }),
          )

          elem_2.removeAttribute('class')
          elem_2.classList.add('cardWrapper')
          elem_2.classList.add(nodeCard[1])
          elem_2.classList.add('remove-revers-card_3_3')

          elem_3.removeAttribute('class')
          elem_3.classList.add('cardWrapper')
          elem_3.classList.add(nodeCard[2])
          elem_3.classList.add('remove-revers-card_3_2')
          dispatch(
            restoreClassAdd({
              id: elem_3.id,
              restorClass: 'static-card-3-2',
            }),
          )

          break
        } else {
          elem_1.removeAttribute('class')
          elem_1.classList.add('cardWrapper')
          elem_1.classList.add(nodeCard[0])
          elem_1.classList.add('remove-card_3_1')

          elem_2.removeAttribute('class')
          elem_2.classList.add('cardWrapper')
          elem_2.classList.add(nodeCard[1])
          elem_2.classList.add('remove-card_3_2')

          elem_3.removeAttribute('class')
          elem_3.classList.add('cardWrapper')
          elem_3.classList.add(nodeCard[2])
          elem_3.classList.add('remove-card_3_3')
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
            value='false'
            onClick={handleToggleCard}>
            {card.menuTitle}
          </button>
        ))}
      </div>
    </div>
  )
}

export default NavMenu
