// Фаска с припуском на толщину
export const Bevel = (arrayData) => {
  const [flag_45, flag_pripusk, flag_ugol, diametr, maxBevel, pripusk, radius] =
    [...arrayData]

  if (flag_45) {
    const radius_cup = diametr * 0.7
    if (!flag_pripusk) {
      return 'R чашки = ' + radius_cup.toFixed(3)
    } else {
      const hypotenuse = Math.sqrt(Math.pow(pripusk, 2) * 2) + maxBevel
      return `R чашки = ${radius_cup.toFixed(3)}\nФаска = ${hypotenuse.toFixed(
        3,
      )}`
    }
  }

  if (flag_ugol) {
    //половина детали
    const radiusDetal = diametr / 2
    // катет большого треугольника
    const bigLeg = Math.sqrt(Math.pow(radius, 2) - Math.pow(radiusDetal, 2))
    const angleAlpha = Math.asin(radiusDetal / radius)
  }
}
