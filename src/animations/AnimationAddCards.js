import './animationsCards.css'

const AnimationAddCard = (activeData) => {
  let elem_1 = null
  let elem_2 = null
  let elem_3 = null

  const nodeCard = activeData.map((item) => item.name)
  console.log(nodeCard)
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
export default AnimationAddCard
