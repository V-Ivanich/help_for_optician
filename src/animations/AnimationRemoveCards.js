const AnimationRevomeCard = (position, activeData, countCards) => {
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
  return <div>content</div>
}
export default AnimationRevomeCard
