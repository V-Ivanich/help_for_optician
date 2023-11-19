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
