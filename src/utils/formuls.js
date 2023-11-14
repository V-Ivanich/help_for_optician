// Плоская фаска
export const FlatBevel = (arrayData) => {
  const [
    diametrDetel,
    maxDiametrDet,
    minDiametrDet,
    diametrSegment,
    maxDiametrSeg,
    minDiametrSeg,
  ] = [...arrayData]

  let result = null
  let size = null

  const topSizeDet = diametrDetel + maxDiametrDet
  const bottomSizeDet = diametrDetel + minDiametrDet
  const topSizeSeg = diametrSegment + maxDiametrSeg
  const bottomSizeSeg = diametrSegment + minDiametrSeg

  let midleDet = (topSizeDet - topSizeSeg) / 2
  let midleSeg = (bottomSizeDet - bottomSizeSeg) / 2

  if (midleDet > midleSeg) {
    size = midleDet - midleSeg
    result = midleSeg
  } else {
    size = midleSeg - midleDet
    result = midleDet
  }
  return `На сторону: ${result.toFixed(2)}\u00A0+${size.toFixed(3)}`
}
// Пересчет цвета
export const Colors = (arrayData) => {
  const [d1, d2, n1, n2] = [...arrayData]
  const diametr_1 = d1 ** 2
  const diametr_2 = d2 ** 2
  if (n1) {
    return ((n1 * diametr_2) / diametr_1).toFixed(3)
  } else {
    return ((n2 * diametr_1) / diametr_2).toFixed(3)
  }
}

// Клин
export const Wedge = (arrayData) => {
  const [flag] = [...arrayData]
}
// Мертвый цвет
export const DeadColor = (arrayData) => {
  const [] = [...arrayData]
}
// Формулы треугольников
export const Triangles = (arrayData) => {
  const [] = [...arrayData]
}
// Перевод радиан в градусы, и обратно
export const RadiansDegrees = (arrayData) => {
  const [] = [...arrayData]
}

//массив заголовков формул
export const ArrayFormuls = [
  'Bevel',
  'FlatBevel',
  'Colors',
  'DeflectionArrow',
  'Wedge',
  'DeadColor',
  'Triangles',
  'RadiansDegrees',
]
