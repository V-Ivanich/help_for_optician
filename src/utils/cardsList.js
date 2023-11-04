export const CardsList = (dataItem, activeCards) => {
  const { id, activ } = dataItem
  let temporary = null
  const list = document.getElementsByClassName('cardWrapper')

  for (let elem of list) {
    if (elem.attributes.name.nodeValue === id) {
      temporary = elem
    }
  }
  temporary.classList.add('move-left-1')
  console.log(activeCards.length)
}
