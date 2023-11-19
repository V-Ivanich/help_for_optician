// Перевод радиан в градусы, и обратно
export const RadiansDegrees = (arrayData) => {
  const [degrees, minutes, seconds, radians, decimalDegrees] = [...arrayData]
  if (decimalDegrees) {
    const outRadian = ((decimalDegrees * Math.PI) / 180).toFixed(3)
    return `${outRadian} рад.`
  }
  if (radians) {
    const outDegreesDecimal = ((radians * 180) / Math.PI).toFixed(3)
    const outDegrees = Math.trunc(outDegreesDecimal)
    const Minutes = 60 * (outDegreesDecimal % 1)
    const outMinutes = Math.trunc(Minutes)
    const Seconds = 60 * (Minutes % 1)
    return `${outDegreesDecimal} град.\n${outDegrees} град. ${outMinutes} мин.\n${Seconds.toFixed(
      2,
    )} сек.
    `
  }
}
