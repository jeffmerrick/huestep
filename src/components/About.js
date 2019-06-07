import React from 'react'
import { Text, Anchor } from 'grommet'

import styled from 'styled-components'

const AboutText = styled(Text)`
  color: rgba(255, 255, 255, 0.66);
  letter-spacing: 0.25em;
  text-transform: uppercase;
`

const About = () => {
  return (
    <AboutText size="xsmall" margin="small">
      A thing by <Anchor href="http://wireform.io" secondary label="Jeff" />
    </AboutText>
  )
}

export default About
