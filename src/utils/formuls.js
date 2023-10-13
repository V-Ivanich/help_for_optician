export const Bevel = (d1, d2, n1 = 0, n2 = 0) => {
  const diametr_1 = d1 ** 2
  const diametr_2 = d2 ** 2
  if (n1) {
    return (n1 * diametr_2) / diametr_1
  } else {
    return (n2 * diametr_1) / diametr_2
  }
}
export const FlatBevel = () => {}
export const Colors = () => {}
export const DeflectionArrow = () => {}
export const Wedge = () => {}
export const DeadColor = () => {}
export const Triangles = () => {}
export const RadiansDegrees = () => {}
