import { Formul } from './index'

const FiltersFormul = (arrayData, id) => {
  let resul = null
  const {
    Bevel,
    FlatBevel,
    Colors,
    DeflectionArrow,
    Wedge,
    DeadColor,
    Triangles,
    RadiansDegrees,
  } = Formul
  switch (id) {
    case 'faska':
      resul = Bevel(arrayData)
      break
    case 'pl_faska':
      resul = FlatBevel(arrayData)
      break
    case 'cvet':
      resul = Colors(arrayData)
      break
    case 'strelka':
      resul = DeflectionArrow(arrayData)
      break
    case 'klin':
      resul = Wedge(arrayData)
      break
    case 'dead_cvet':
      resul = DeadColor(arrayData)
      break
    case 'treygolnik':
      resul = Triangles(arrayData)
      break
    case 'grad_rad':
      resul = RadiansDegrees(arrayData)
      break
  }
  return resul
}

export default FiltersFormul
