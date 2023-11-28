import { OutResult } from '../outResult'

const HandleColors = (target, parentBlock, setDisabled) => {
  const nodeList = parentBlock.querySelectorAll('input')

  if (target.tagName === 'BUTTON') {
    OutResult(target, nodeList, parentBlock)
  }

  if (
    (nodeList[0].value && nodeList[1].value && nodeList[2].value) ||
    (nodeList[0].value && nodeList[1].value && nodeList[3].value)
  ) {
    setDisabled(false)
  } else {
    setDisabled(true)
  }
}

export default HandleColors
