import React from 'react'
import { Box, Text, Anchor, Button } from 'grommet'

import styled from 'styled-components'

const AboutText = styled(Text)`
  color: rgba(255, 255, 255, 0.66);
  letter-spacing: 0.25em;
  text-transform: uppercase;
`

const About = () => {
  return (
    <Box pad="small" direction="row" justify="between">
      <Box>
        <AboutText size="xsmall">
          A thing by <Anchor href="http://wireform.io" secondary label="Jeff" />
        </AboutText>
      </Box>
      <Box>
        <AboutText size="xsmall">
          <Anchor href="https://github.com/jeffmerrick/huestep" secondary label="Source" />
        </AboutText>
      </Box>
    </Box>
  )
}

export default About
