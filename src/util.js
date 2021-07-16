import { toNumber } from "lodash"

export const getColor = (value, min, max) => {
  // 5 - 80
  value = toNumber(value)
  min = toNumber(min)
  max = toNumber(max)
  const divisions = 8
  const range = max - min
  console.log(min + range / divisions)
  console.log(min + 2 * range / divisions)
  if (value < (min + range / divisions)) {
    return '50'
  } else if (value < (min + 2 * range / divisions)) {
    return '100'
  } else if (value < (min + 3 * range / divisions)) {
    return '200'
  } else if (value < (min + 4 * range / divisions)) {
    return '300'
  } else if (value < (min + 5 * range / divisions)) {
    return '400'
  } else if (value < (min + 6 * range / divisions)) {
    return '500'
  } else if (value < (min + 7 * range / divisions)) {
    return '600'
  }
  return '700'
}
