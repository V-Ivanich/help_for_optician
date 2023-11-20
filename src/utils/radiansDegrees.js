// Перевод радиан в градусы, и обратно
export const RadiansDegrees = (arrayData) => {
  const [degrees, minutes, seconds, radians, decimalDegrees] = [...arrayData]

  //* Перевод из десятичных градусов, в обычные градусы минуты и секунды
  const parseDegrees = (decimalDegrees) => {
    const outDegrees = Math.trunc(decimalDegrees)
    const Minutes = 60 * (decimalDegrees % 1)
    const outMinutes = Math.trunc(Minutes)
    const Seconds = 60 * (Minutes % 1)
    return `${outDegrees} град. ${outMinutes} мин.\n${Seconds.toFixed(2)} сек.`
  }

  if (decimalDegrees) {
    const outRadian = ((decimalDegrees * Math.PI) / 180).toFixed(3)
    const outParseDegrees = parseDegrees(decimalDegrees)

    return `${outRadian} рад.\n${outParseDegrees}`
  }
  if (radians) {
    const outDegreesDecimal = ((radians * 180) / Math.PI).toFixed(3)
    const outParseDegrees = parseDegrees(outDegreesDecimal)

    return `${outDegreesDecimal} град.\n${outParseDegrees}`
  }

  if (degrees || minutes || seconds) {
    console.log(degrees, minutes, seconds)
    const degDec = (degrees + minutes / 60 + seconds / 3600).toFixed(3)
    const degToRad = ((degDec * Math.PI) / 180).toFixed(3)

    return `${degDec} град.\n${degToRad} рад.`
  }
}
