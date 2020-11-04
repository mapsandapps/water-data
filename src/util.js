import { toNumber } from "lodash"

export const colors = {
  // https://www.colorbox.io/#steps=11#hue_start=174#hue_end=197#hue_curve=easeInQuad#sat_start=4#sat_end=90#sat_curve=easeOutQuad#sat_rate=130#lum_start=100#lum_end=53#lum_curve=easeOutQuad#minor_steps_map=0
  blue0: '#f2fffe',
  blue5: '#d6fefa',
  blue10: '#bbfdf7',
  blue20: '#86faf0',
  blue30: '#57f5eb',
  blue40: '#30ede6',
  blue50: '#13e4e3',
  blue60: '#00ced7',
  blue70: '#00b3c7',
  blue80: '#0097b3',
  blue90: '#007a9e',
  blue100: '#006187'
}

export const getColor = (value, min, max) => {
  // 5 - 80
  value = toNumber(value)
  min = toNumber(min)
  max = toNumber(max)
  const divisions = 9
  const range = max - min
  console.log(min + range / divisions)
  console.log(min + 2 * range / divisions)
  if (value < (min + range / divisions)) {
    return 'blue5'
  } else if (value < (min + 2 * range / divisions)) {
    return 'blue10'
  } else if (value < (min + 3 * range / divisions)) {
    return 'blue20'
  } else if (value < (min + 4 * range / divisions)) {
    return 'blue30'
  } else if (value < (min + 5 * range / divisions)) {
    return 'blue40'
  } else if (value < (min + 6 * range / divisions)) {
    return 'blue50'
  } else if (value < (min + 7 * range / divisions)) {
    return 'blue60'
  } else if (value < (min + 8 * range / divisions)) {
    return 'blue70'
  }
  return 'blue80'
}
