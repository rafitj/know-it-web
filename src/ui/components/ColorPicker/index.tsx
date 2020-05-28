import { Dropdown } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { Droplet, IconWrap } from 'ui/base/Icons'
import { Menu, MenuItem } from 'ui/base/Menu'
import { color, colors } from 'ui/base/theme'

const ColorItem = styled(MenuItem)`
  width: 15px;
  height: 15px;
  padding: 0;
  margin: 5px;
  border-radius: 3px;
`

interface IColorPicker {
  color: color
  setColor: (color: color) => void
}

export class ColorPicker extends React.Component<IColorPicker> {
  render() {
    const createColorItems = (c: color) => (
      <ColorItem
        style={{ background: colors[c] }}
        onClick={(e) => {
          e.domEvent.stopPropagation()
          this.props.setColor(c)
        }}
      />
    )
    const ColorMenu = (
      <Menu>
        {['red', 'green', 'blue', 'purple', 'yellow'].map((c) =>
          createColorItems(c as color)
        )}
      </Menu>
    )
    return (
      <Dropdown overlay={ColorMenu} trigger={['click']}>
        <IconWrap
          bgcolor={this.props.color}
          size={25}
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <Droplet size={15} />
        </IconWrap>
      </Dropdown>
    )
  }
}
