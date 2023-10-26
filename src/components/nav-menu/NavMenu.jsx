import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { desactiveCard, activeCard } from '../../store/cardSlice'
import './nav-menu.css'
import { Formul } from '../../utils'
import AnimationAddCard from '../../animations/AnimationAddCards'

const NavMenu = () => {
  const { StatusButtons } = Formul
  const dataCards = useSelector((state) => state.cards.card)
  const activeData = useSelector((state) => state.cards.activeCard)
  const [countCards, setCountCard] = useState(0)
  const dispatch = useDispatch()

  const AddRemoveStore = (id) => {
    const findActivCard = activeData.find((card) => card.id === id)
    if (findActivCard === undefined) {
      const findCard = dataCards.find((item) => item.id === id)
      dispatch(activeCard(findCard))
    } else {
      dispatch(desactiveCard({ id }))
    }
  }

  const handleToggleCard = ({ target }) => {
    StatusButtons(target)
    AddRemoveStore(target.id)
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
      console.log('добавдение карточки ', countCards)
      AnimationAddCard(activeData)
    } else if (countCards !== activeData.length) {
      console.log('удаление карточки ', countCards)
      AnimationRevomeCard(activeData, countCards)
    }
    setCountCard(activeData.length)
  }, [activeData.length])

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
