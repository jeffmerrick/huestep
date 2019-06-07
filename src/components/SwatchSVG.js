import React from 'react'

import { getValidHex } from 'utils/color'

const SwatchSVG = ({ colors }) => {
  const svgWidth = 1920
  const svgHeight = 1080

  const rectWidth = svgWidth / colors.length

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 1920 1080"
    >
      <title>Huestep Swatches</title>
      {colors.map((color, idx) => (
        <rect
          key={idx}
          x={rectWidth * idx}
          width={rectWidth}
          height={svgHeight}
          fill={getValidHex(color)}
        />
      ))}
    </svg>
  )
}

export default SwatchSVG
