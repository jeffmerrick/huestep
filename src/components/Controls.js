import React, { useState, useEffect } from 'react'

import { Box } from 'grommet'
import { random } from 'lodash'
import { mix } from 'polished'
import styled from 'styled-components'

import ColorPicker from 'components/ColorPicker'
import StepField from 'components/StepField'
import { getRandomItem } from 'utils/general'
import { getValidHex } from 'utils/color'

const ControlsBox = styled(Box)`
  min-height: initial;
`

const Controls = ({ onChangeColors }) => {
  const initStartColors = ['#ec4b9d', '#5bec4b', '#40bfbf', '#ff9d20', '#ffffff', '#bf4042']
  const initEndColors = ['#24194d', '#193b4d', '#24194d', '#4d1919', '#000000', '#3e2d86']

  const [startColor, setStartcolor] = useState(() => getRandomItem(initStartColors))
  const [endColor, setEndColor] = useState(() => getRandomItem(initEndColors))
  const [steps, setSteps] = useState(() => random(3, 16))

  useEffect(() => {
    const validStartColor = getValidHex(startColor)
    const validEndColor = getValidHex(endColor)
    let newColors = []

    newColors.push(validStartColor)
    for (let i = 1; i < steps + 1; i++) {
      newColors.push(mix(i / (steps + 1), validEndColor, validStartColor))
    }
    newColors.push(validEndColor)

    onChangeColors({ colors: newColors })
  }, [startColor, endColor, steps, onChangeColors])

  return (
    <ControlsBox direction="row" justify="between">
      <Box basis="medium">
        <ColorPicker
          color={startColor}
          onChangeValue={event => {
            setStartcolor(event.color)
          }}
          textAlign="left"
        />
      </Box>
      <Box basis="210px">
        <StepField
          steps={steps}
          onChangeValue={event => {
            setSteps(event.steps)
          }}
        />
      </Box>
      <Box basis="medium">
        <ColorPicker
          color={endColor}
          onChangeValue={event => {
            setEndColor(event.color)
          }}
          textAlign="right"
        />
      </Box>
    </ControlsBox>
  )
}

export default Controls
