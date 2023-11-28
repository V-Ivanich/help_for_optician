import HandleFaska from './handlers/handleFaska'
import HandlePlFaska from './handlers/handlePlFaska'
import HandleColors from './handlers/handleColors'

export const SelectorEvents = (target, currentTarget, setDisabled) => {
  switch (currentTarget.id) {
    case 'wrapper-faska':
      HandleFaska(target, currentTarget)
      break
    case 'wrapper-pl_faska':
      HandlePlFaska(target, currentTarget, setDisabled)
      break
    case 'wrapper-cvet':
      HandleColors(target, currentTarget, setDisabled)
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
