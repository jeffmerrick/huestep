import React, { Component } from 'react'

import Favicon from 'react-favicon'

import { canvasRoundRect } from 'utils/general'
import { getValidHex } from 'utils/color'

class DynamicFavicon extends Component {
  render() {
    const { startColor, endColor } = this.props

    let canvas = document.createElement('canvas')
    canvas.width = 16
    canvas.height = 16
    let ctx = canvas.getContext('2d')
    let img = new Image()

    var grd = ctx.createLinearGradient(0, 0, 16, 0)
    grd.addColorStop(0, getValidHex(startColor))
    grd.addColorStop(1, getValidHex(endColor))

    ctx.drawImage(img, 0, 0)
    ctx.fillStyle = grd

    canvasRoundRect(ctx, 0, 0, 16, 16, 5, '#000000')

    let url = canvas.toDataURL('image/x-icon')

    return <Favicon url={url} />
  }
}

DynamicFavicon.defaultProps = {
  startColor: '#ffffff',
  endColor: '#000000'
}

export default DynamicFavicon
