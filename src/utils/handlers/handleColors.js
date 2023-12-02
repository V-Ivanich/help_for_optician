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

  if (nodeList[2].value) {
    nodeList[3].disabled = true
  } else nodeList[3].disabled = false

  if (nodeList[3].value) {
    nodeList[2].disabled = true
  } else nodeList[2].disabled = false

  if (!nodeList[2].value && !nodeList[3].value) {
    nodeList[3].disabled = false
  }
}

export default HandleColors
