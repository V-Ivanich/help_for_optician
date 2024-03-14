import { useSelector, useDispatch } from 'react-redux'
// import { useWindowSize } from '../../utils/hooks/UseWindowSize'
import { gsap } from 'gsap'
import {
  activeCard,
  desactiveCard,
  toggleValueButton,
} from '../../store/cardSlice'

import './nav-menu.css'
import { useEffect, useState, useRef } from 'react'

export const NavMenu = () => {
  const activeCards = useSelector((state) => state.cards.activeCard)
  const temlateCards = useSelector((state) => state.cards.cards)
  const [removeCard, setRemoveCard] = useState('')

  const refBtn_1 = useRef()
  const refBtn_2 = useRef()
  const refBtn_3 = useRef()
  const refBtn_4 = useRef()
  const refBtn_5 = useRef()
  const refBtn_6 = useRef()
  const refBtn_7 = useRef()
  const refBtn_8 = useRef()
  const refDivContainer = useRef()

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

  const handleToggleCard = (ref) => {
    dispatch(toggleValueButton(ref.current.name))
    if (ref.current.value === 'false') {
      dispatch(activeCard(ref.current.name))
      setRemoveCard('')
    } else {
      setRemoveCard(ref.current.name)
      dispatch(desactiveCard(ref.current.name))
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
    const { width } = refDivContainer.current.getBoundingClientRect()
    console.log(width)
    if ((removeCard === '') & (activeCards.length !== 0)) {
      switch (activeCards.length) {
        case 1:
          gsap.to(`#${activeCards[0]}`, {
            duration: 1,
            x: width / 2 - 140 + 285,
            opacity: 1,
          })
          break
        case 2:
          gsap.to(`#${activeCards[0]}`, {
            duration: 1,
            x: width / 2 + 5 + 285,
            opacity: 1,
          })
          gsap.to(`#${activeCards[1]}`, {
            duration: 1,
            x: width / 2,
            opacity: 1,
          })
          break
        case 3:
          gsap.to(`#${activeCards[0]}`, {
            x: width / 2 + 285 + 150,
            duration: 1,
            opacity: 1,
          })
          gsap.to(`#${activeCards[1]}`, {
            x: width / 2 - 140 + 285,
            duration: 1,
            opacity: 1,
          })
          gsap.to(`#${activeCards[2]}`, {
            x: width / 2 - 145,
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
            x: -285,
          })
          gsap.to(`#${activeCards[0]}`, {
            duration: 1,
            x: width / 2 + 5 + 285,
            opacity: 1,
          })
          gsap.to(`#${activeCards[1]}`, {
            duration: 1,
            x: width / 2,
            opacity: 1,
          })
          break
        case 1:
          gsap.to(`#${removeCard}`, {
            duration: 1,
            opacity: 0.2,
            x: -285,
          })
          gsap.to(`#${activeCards[0]}`, {
            duration: 1,
            x: width / 2 - 140 + 285,
            opacity: 1,
          })
          break
        case 0:
          gsap.to(`#${removeCard}`, {
            duration: 1,
            opacity: 0.2,
            x: -285,
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
    <div className='container-menu' ref={refDivContainer}>
      <div className='nav-menu'>
        {temlateCards.map((card, index) => (
          <button
            ref={arrayRefsBtns[index]}
            className={
              card.value === 'false'
                ? 'links-formul'
                : 'links-formul push-button'
            }
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
