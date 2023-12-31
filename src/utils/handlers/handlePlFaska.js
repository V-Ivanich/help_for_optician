import { OutResult } from '../outResult'

const HandlePlFaska = (target, parentBlock, setDisabled) => {
  const nodeList = parentBlock.querySelectorAll('input')

  if (target.tagName === 'BUTTON') {
    OutResult(target, nodeList, parentBlock)
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
