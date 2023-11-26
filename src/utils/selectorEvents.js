import HandleFaska from './handlers/handleFaska'
import HandlePlFaska from './handlers/handlePlFaska'

export const SelectorEvents = (target, currentTarget, setDisabled) => {
  console.log(target, currentTarget)
  switch (currentTarget.id) {
    case 'wrapper-faska':
      HandleFaska(target, currentTarget)
      break
    case 'wrapper-pl_faska':
      HandlePlFaska(target, currentTarget, setDisabled)
      break
    case 'wrapper-cvet':
      break
    case 'wrapper-strelka':
      break
    case 'wrapper-klin':
      break
    case 'wrapper-dead_cvet':
      break
    case 'wrapper-treygolnik':
      break
    case 'wrapper-grad_rad':
      break
  }
}
