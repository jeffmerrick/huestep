import React from 'react'

import { Button } from 'grommet'
import { Clone } from 'grommet-icons'
import Clipboard from 'react-clipboard.js'
import { notify } from 'react-notify-toast'

const CopyButton = ({ copyText, label }) => {
  return (
    <Button
      as={Clipboard}
      icon={<Clone />}
      label={label}
      data-clipboard-text={copyText}
      onSuccess={() => notify.show('Copied!', null, 1000)}
    />
  )
}

export default CopyButton
