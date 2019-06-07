import React, { useState, useCallback } from 'react'

import { Grommet, Box } from 'grommet'
import { first, last } from 'lodash'
import Notifications from 'react-notify-toast'
import { createGlobalStyle } from 'styled-components'
import { theme } from 'theme'

import Controls from 'components/Controls'
import DynamicFavicon from 'components/DynamicFavicon'
import Swatches from 'components/Swatches'
import Export from 'components/Export'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  input, textarea {
    font-family:inherit;
  }
`

const App = () => {
  const [colors, setColors] = useState([])

  return (
    <Grommet theme={theme} full>
      <GlobalStyle />
      <Notifications />
      <DynamicFavicon startColor={first(colors)} endColor={last(colors)} />
      <Box background="#191919" fill>
        <Controls
          colors={colors}
          onChangeColors={useCallback(
            event => {
              setColors(event.colors)
            },
            [setColors]
          )}
        />
        <Swatches colors={colors} />
        <Export colors={colors} />
      </Box>
    </Grommet>
  )
}

export default App
