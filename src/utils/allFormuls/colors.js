// Пересчет цвета
export const Colors = (arrayData) => {
  const [d1, d2, n1, n2] = [...arrayData]
  const diametr_1 = d1 ** 2
  const diametr_2 = d2 ** 2
  if (n1) {
    return 'Результат : ' + ((n1 * diametr_2) / diametr_1).toFixed(3)
  } else {
    return 'Результат : ' + ((n2 * diametr_1) / diametr_2).toFixed(3)
  }
}
