// Стрелка прогиба
export const DeflectionArrow = (arrayData) => {
  const [flagСompare, flagSign, diametrSeg, radiusR1, radiusR2] = [...arrayData]
  if (!flagСompare) {
    const radius_1 = Math.abs(radiusR1)
    const result = calculation(radius_1, diametrSeg)
    return flagSign
      ? `Стрелка = -${result.toFixed(3)} мм.`
      : `Стрелка = +${result.toFixed(3)} мм.`
  } else {
    const result_r1 = calculation(radiusR1, diametrSeg)

    const result_r2 = calculation(radiusR2, diametrSeg)

    const result_total =
      result_r1 > result_r2
        ? ` ${(result_r1 - result_r2).toFixed(3)} мм.`
        : ` ${(result_r2 - result_r1).toFixed(3)} мм.`
    if (flagSign) {
      return radiusR1 > radiusR2
        ? `Разница = -${result_total}`
        : `Разница = +${result_total}`
    } else {
      return radiusR1 > radiusR2
        ? `Разница = +${result_total}`
        : `Разница = -${result_total}`
    }
  }
}

function calculation(radius, diametr) {
  return radius - Math.sqrt(Math.pow(radius, 2) - Math.pow(diametr, 2) / 4)
}
