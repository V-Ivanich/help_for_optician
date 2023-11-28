import { Formul } from './'

//! функция обработки кнопки, вычисление и вывод результата
export function OutResult(target, nodeList, parentBlock) {
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
