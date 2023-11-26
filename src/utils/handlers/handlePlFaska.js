import { Formul } from '../../utils'

const HandlePlFaska = (target, parentBlock, setDisabled) => {
  const nodeList = parentBlock.querySelectorAll('input')

  if (target.tagName === 'BUTTON') {
    OutResult()
  }

  //! функция обработки кнопки, вычисление и вывод результата
  function OutResult() {
    const { FiltersFormul } = Formul
    const arrayDataCard = []

    nodeList.forEach((item) => {
      if (item.type === 'checkbox') {
        arrayDataCard.push(item.checked)
      } else {
        arrayDataCard.push(+item.value)
      }
    })

    const outResult = parentBlock.querySelector('.result')
    outResult.innerHTML = FiltersFormul(arrayDataCard, target.name)
  }

  for (let item of nodeList) {
    if (!item.value) {
      setDisabled(true)
      return
    }
  }
  setDisabled(false)
}

export default HandlePlFaska
