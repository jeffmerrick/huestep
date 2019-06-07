import stringifyObject from 'stringify-object'

export const isValidHex = hex => {
  let regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  return regex.test(hex)
}

export const getValidHex = (hex, fallback = '#ffffff') => {
  return isValidHex(hex) ? hex : fallback
}

export const colorsToObject = colors => {
  let colorObject = {}
  colors.forEach(function(color, idx) {
    colorObject[idx === 0 ? 50 : idx * 100] = color
  })
  return stringifyObject(colorObject, { indent: '\xa0\xa0' })
}

export const colorsToArray = colors => {
  return colors.length === 0 ? '' : `[\n\xa0\xa0'${colors.join("',\n\xa0\xa0'")}'\n]`
}
