import React, { Fragment } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import { Box, Button, Collapsible, TextArea } from 'grommet'
import { Code, Download } from 'grommet-icons'

import { useSessionStorage } from 'react-use-storage'
import styled from 'styled-components'
import { first, last } from 'lodash'
import { colorsToArray, colorsToObject } from 'utils/color'

import About from 'components/About'
import CopyButton from 'components/CopyButton'
import SwatchSVG from 'components/SwatchSVG'

const ToggleButton = styled(Button)`
  margin-top: calc(-48px - 15px);
  margin-bottom: 15px;
  position: relative;
  z-index: 2;
`

const Export = ({ colors }) => {
  const [showPanel, togglePanel] = useSessionStorage('showPanel', false)

  const colorArray = colorsToArray(colors)
  const colorObject = colorsToObject(colors)
  const colorSVG = renderToStaticMarkup(<SwatchSVG colors={colors} />)

  return (
    <Box>
      <ToggleButton
        onClick={() => togglePanel(!showPanel)}
        icon={<Code />}
        alignSelf="center"
        primary
      />
      <Collapsible open={showPanel}>
        <Box height="50vh" direction="row">
          {showPanel && (
            <Fragment>
              <Box basis="1/2" pad="small">
                <CopyButton copyText={colorArray} />
                <TextArea value={colorArray} resize="vertical" fill readOnly plain />
              </Box>
              <Box basis="1/2" pad="small">
                <CopyButton copyText={colorObject} />
                <TextArea value={colorObject} resize="vertical" fill readOnly plain />
              </Box>
              <Box basis="1/3" pad="small">
                <Box direction="row">
                  <CopyButton copyText={colorSVG} alignSelf="end" />
                  <Button
                    icon={<Download />}
                    href={`data:image/svg+xml,${encodeURIComponent(colorSVG)}`}
                    download={`swatch-${first(colors)}-${colors.length}-${last(colors)}.svg`}
                  />
                </Box>
                <TextArea value={colorSVG} resize="vertical" fill readOnly plain />
              </Box>
            </Fragment>
          )}
        </Box>
        <About />
      </Collapsible>
    </Box>
  )
}

Export.defaultProps = {
  color: []
}

export default Export
