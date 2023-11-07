// Фаска с припуском на толщину
export const Bevel = (arrayData) => {
  const [flag, diametr, maxBevel, pripusk, radius] = [...arrayData]
}
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
}
// Пересчет цвета
export const Colors = (arrayData) => {
  const [d1, d2, n1, n2] = [...arrayData]
  const diametr_1 = d1 ** 2
  const diametr_2 = d2 ** 2
  if (n1) {
    return (n1 * diametr_2) / diametr_1
  } else {
    return (n2 * diametr_1) / diametr_2
  }
}
// Стрелка прогиба
export const DeflectionArrow = (arrayData) => {
  const [flag, diametrSeg, radiusR1, radiusR2] = [...arrayData]
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
