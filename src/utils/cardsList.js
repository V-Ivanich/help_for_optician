export const CardsList = (dataItem, parsingActiveCards) => {
  const list = document.getElementsByClassName('cardWrapper')
  const { id, activ, position } = dataItem
  const temporary = []

  parsingActiveCards.forEach((item) => {
    for (let elem of list) {
      if (elem.attributes.name.nodeValue === item) {
        temporary.push(elem)
      }
    }
  })

  function findDeleteCard(id, arrayCard) {
    for (let item of arrayCard) {
      if (item.attributes.name.nodeValue === id) return item
    }
  }

  if (activ === 'true') {
    switch (temporary.length) {
      case 1:
        temporary[0].removeAttribute('class')

        temporary[0].classList.add('cardWrapper', 'move-left-1')
        break
      case 2:
        temporary[0].removeAttribute('class')
        temporary[1].removeAttribute('class')
        temporary[0].classList.add('cardWrapper', 'move-left-2-1')
        temporary[1].classList.add('cardWrapper', 'move-left-2-2')
        break
      case 3:
        temporary[0].removeAttribute('class')
        temporary[1].removeAttribute('class')
        temporary[2].removeAttribute('class')
        temporary[0].classList.add('cardWrapper', 'move-left-3-1')
        temporary[1].classList.add('cardWrapper', 'move-left-3-2')
        temporary[2].classList.add('cardWrapper', 'move-left-3-3')
        break
    }
  }
  if (activ === 'false') {
    let temp = findDeleteCard(id, list)

    switch (temporary.length) {
      // 3 - карточки
      case 2:
        if (position === 0) {
          temp.removeAttribute('class')
          temporary[0].removeAttribute('class')
          temporary[1].removeAttribute('class')

          temp.classList.add('cardWrapper', 'delete-right-1of3')
          temporary[0].classList.add('cardWrapper', 'move-left-2-1')
          temporary[1].classList.add('cardWrapper', 'after-removal-3of3')
        }
        if (position === 1) {
          temp.removeAttribute('class')
          temporary[0].removeAttribute('class')
          temporary[1].removeAttribute('class')

          temp.classList.add('cardWrapper', 'delete-right-2of3')
          temporary[0].classList.add('cardWrapper', 'after-removal-1of3')
          temporary[1].classList.add('cardWrapper', 'after-removal-3of3')
        }
        if (position === 2) {
          temp.removeAttribute('class')
          temporary[0].removeAttribute('class')
          temporary[1].removeAttribute('class')

          temp.classList.add('cardWrapper', 'delete-right-3')
          temporary[0].classList.add('cardWrapper', 'after-removal-1of3')
          temporary[1].classList.add('cardWrapper', 'after-removal-2of3')
        }
        break
      // 2 - карточки
      case 1:
        if (position === 0) {
          temp.removeAttribute('class')
          temporary[0].removeAttribute('class')

          temp.classList.add('cardWrapper', 'delete-right-1of2')
          temporary[0].classList.add('cardWrapper', 'move-left-3-2')
        }
        if (position === 1) {
          temp.removeAttribute('class')
          temporary[0].removeAttribute('class')

          temp.classList.add('cardWrapper', 'after-removal-2of2')
          temporary[0].classList.add('cardWrapper', 'delete-right-2of2')
        }
        break
      case 0:
        temp.removeAttribute('class')
        temp.classList.add('cardWrapper', 'delete-right-2of3')
        break
    }
    temp = null
  }
}
