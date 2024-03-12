import { useSelector, useDispatch } from 'react-redux'
import { temlateCards } from '../../data/templates_formuls'
import { gsap } from 'gsap'
import { activeCard, desactiveCard } from '../../store/cardSlice'

import { Formul } from '../../utils'
import './nav-menu.css'
import { useEffect, useState, useRef } from 'react'

export const NavMenu = () => {
  const activeCards = useSelector((state) => state.cards.activeCard)
  const [removeCard, setRemoveCard] = useState('')

  const refBtn_1 = useRef()
  const refBtn_2 = useRef()
  const refBtn_3 = useRef()
  const refBtn_4 = useRef()
  const refBtn_5 = useRef()
  const refBtn_6 = useRef()
  const refBtn_7 = useRef()
  const refBtn_8 = useRef()

  const arrayRefsBtns = [
    refBtn_1,
    refBtn_2,
    refBtn_3,
    refBtn_4,
    refBtn_5,
    refBtn_6,
    refBtn_7,
    refBtn_8,
  ]

  const dispatch = useDispatch()
  const { StatusButtons } = Formul

  const handleToggleCard = (ref) => {
    if (ref.current.value === 'false') {
      dispatch(activeCard(ref.current.name))
      setRemoveCard('')
      StatusButtons(ref.current)
    } else {
      setRemoveCard(ref.current.name)
      dispatch(desactiveCard(ref.current.name))
      StatusButtons(ref.current)
    }
  }

  function refsActive() {
    const activeRefs = arrayRefsBtns.filter(
      (item) => item.current.value === 'true',
    )
    if (activeRefs.length === 3) {
      arrayRefsBtns.forEach((itemRef) => {
        if (itemRef.current.value === 'false') {
          itemRef.current.disabled = true
        }
      })
    } else {
      arrayRefsBtns.forEach((itemRef) => {
        if (itemRef.current.value === 'false') {
          itemRef.current.disabled = false
        }
      })
    }
  }

  function listCards() {
    if ((removeCard === '') & (activeCards.length !== 0)) {
      switch (activeCards.length) {
        case 1:
          gsap.to(`#${activeCards[0]}`, {
            duration: 1,
            x: -668,
            opacity: 1,
          })
          break
        case 2:
          gsap.to(`#${activeCards[0]}`, {
            duration: 1,
            x: -813,
            opacity: 1,
          })
          gsap.to(`#${activeCards[1]}`, {
            duration: 1,
            x: -523,
            opacity: 1,
          })
          break
        case 3:
          gsap.to(`#${activeCards[0]}`, {
            x: -958,
            duration: 1,
            opacity: 1,
          })
          gsap.to(`#${activeCards[1]}`, {
            x: -668,
            duration: 1,
            opacity: 1,
          })
          gsap.to(`#${activeCards[2]}`, {
            x: -378,
            duration: 1,
            opacity: 1,
          })
          break
      }
    }
    if (removeCard !== '') {
      switch (activeCards.length) {
        case 2:
          gsap.to(`#${removeCard}`, {
            duration: 1,
            opacity: 0.2,
            x: 0,
          })
          gsap.to(`#${activeCards[0]}`, {
            duration: 1,
            x: -813,
            opacity: 1,
          })
          gsap.to(`#${activeCards[1]}`, {
            duration: 1,
            x: -523,
            opacity: 1,
          })
          break
        case 1:
          gsap.to(`#${removeCard}`, {
            duration: 1,
            opacity: 0.2,
            x: 0,
          })
          gsap.to(`#${activeCards[0]}`, {
            duration: 1,
            x: -668,
            opacity: 1,
          })
          break
        case 0:
          gsap.to(`#${removeCard}`, {
            duration: 1,
            opacity: 0.2,
            x: 0,
          })
          break
      }
    }
  }

  useEffect(() => {
    refsActive()
  }, [activeCards.length])

  useEffect(() => {
    listCards()
  }, [removeCard, activeCards.length])

  return (
    <div className='container-menu'>
      <div className='nav-menu'>
        {temlateCards.map((card, index) => (
          <button
            ref={arrayRefsBtns[index]}
            className='links-formul'
            name={card.name}
            key={index}
            id={card.name + index}
            value={card.value}
            onClick={() => handleToggleCard(arrayRefsBtns[index])}>
            {card.menuTitle}
          </button>
        ))}
      </div>
    </div>
  )
}
