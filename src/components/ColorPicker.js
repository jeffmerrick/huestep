import React, { useRef, useState, Fragment } from 'react'

import { Box, Drop, TextInput } from 'grommet'
import { SliderPicker } from 'react-color'
import styled from 'styled-components'

import { theme } from 'theme'
import { isValidHex } from 'utils/color'

const ColorInput = styled(TextInput)`
  text-align:${props => props.textAlign}
  color:${props => (props.valid ? '' : theme.global.colors['status-error'])}
`

const parseHex = hex => {
  hex = `#${hex.substring(1).replace(/[^A-Fa-f0-9]/, '')}`
  hex = hex.slice(0, 7)
  return hex || '#'
}

const ColorPicker = ({ color, textAlign, onChangeValue }) => {
  const [showPicker, togglePicker] = useState(false)
  const pickerRef = useRef(null)

  return (
    <Fragment>
      <ColorInput
        placeholder="Start"
        value={color}
        onChange={event => {
          onChangeValue({ color: parseHex(event.target.value) })
        }}
        onFocus={() => togglePicker(true)}
        ref={pickerRef}
        size="xlarge"
        textAlign={textAlign}
        valid={isValidHex(color) || color === '#'}
        plain
      />
      {pickerRef.current && showPicker && (
        <Drop
          align={{ top: 'bottom', left: 'left' }}
          target={pickerRef.current}
          onClickOutside={() => togglePicker(false)}
          elevation="xlarge"
        >
          <Box pad="medium">
            <SliderPicker
              color={color}
              onChangeComplete={event => {
                onChangeValue({ color: event.hex })
              }}
            />
          </Box>
        </Drop>
      )}
    </Fragment>
  )
}

export default ColorPicker
