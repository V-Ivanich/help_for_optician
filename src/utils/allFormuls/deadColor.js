// Мертвый цвет
export const DeadColor = (arrayData) => {
  const [angle, diametr, refractiveIndex, wavelength] = [...arrayData]

  const outDcolor =
    ((2 * angle * diametr * refractiveIndex * Math.PI) / wavelength) * 180

  return `${outDcolor.toFixed(2)} полос`
}
