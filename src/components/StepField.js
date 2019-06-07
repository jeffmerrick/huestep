import React from 'react'

import { Box, TextInput, Button } from 'grommet'
import { FormAdd, FormSubtract } from 'grommet-icons'
import styled from 'styled-components'
import { notify } from 'react-notify-toast'

const StepInput = styled(TextInput)`
  text-align: center;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const parseSteps = steps => {
  if (steps === '') {
    return ''
  } else {
    let stepsInt = parseInt(steps)
    if (stepsInt > 999) {
      notify.show('Must be less than 1000', null, 1500)
      return 999
    } else if (isNaN(stepsInt) || stepsInt < 0) {
      return 0
    } else {
      return stepsInt
    }
  }
}

function StepField({ steps, onChangeValue }) {
  return (
    <Box direction="row">
      <Button
        icon={<FormSubtract />}
        onClick={() => {
          onChangeValue({ steps: parseSteps(steps - 1) })
        }}
      />
      <StepInput
        type="number"
        placeholder="Steps"
        value={steps}
        plain={true}
        size="xlarge"
        onChange={event => {
          onChangeValue({ steps: parseSteps(event.target.value) })
        }}
      />
      <Button
        icon={<FormAdd />}
        onClick={() => {
          onChangeValue({ steps: parseSteps(steps + 1) })
        }}
      />
    </Box>
  )
}

export default StepField
