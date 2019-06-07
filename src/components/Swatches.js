import React from 'react'

import { Box } from 'grommet'
import { readableColor } from 'polished'
import Clipboard from 'react-clipboard.js'
import { notify } from 'react-notify-toast'
import styled, { keyframes } from 'styled-components'

import { first, last } from 'lodash'
import { theme } from 'theme'
import { isValidHex, getValidHex } from 'utils/color'

const grow = keyframes`
  0% {
    flex-basis:0%;
  }

  100% {
    flex-basis:100%;
  }
`

const SwatchInfo = styled.div`
  font-size: 16px;
  opacity: 0;
  transform: scale(0);
  transition: all 0.15s ease-in-out;
  color: ${props => (props.valid ? '' : theme.global.colors['status-error'])};
`

const Swatch = styled(Clipboard).attrs(props => ({
  style: {
    background: props.color,
    color: readableColor(props.color)
  }
}))`
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 100%;
  position: relative;
  min-width: 0;
  height: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  transition: all 0.25s linear;
  animation: ${grow} 0.15s linear;
  cursor: pointer;

  &:hover {
    z-index: 1;
    flex-basis: 200%;
    min-width: 120px;
    box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.25);
    ${SwatchInfo} {
      opacity: 0.9;
      transform: scale(1);
    }
  }

  &:active:hover {
    transition: all 0.1s ease-in-out;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
    flex-basis: 150%;
    min-width: 100px;
  }
`

const SwatchBox = styled(Box)`
  background: linear-gradient(
    to right,
    ${props => props.startColor} 0%,
    ${props => props.endColor} 100%
  );
`

const Swatches = ({ colors }) => (
  <SwatchBox
    direction="row"
    align="stretch"
    fill="vertical"
    flex={{ shrink: 12 }}
    startColor={first(colors)}
    endColor={last(colors)}
  >
    {colors.map((color, idx) => (
      <Swatch
        key={idx}
        color={getValidHex(color)}
        component="div"
        data-clipboard-text={color}
        onSuccess={() => notify.show('Copied!', null, 1000)}
      >
        <SwatchInfo valid={isValidHex(color)}>{color}</SwatchInfo>
      </Swatch>
    ))}
  </SwatchBox>
)

export default Swatches
