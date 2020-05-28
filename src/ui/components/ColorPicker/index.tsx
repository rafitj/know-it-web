import { Dropdown } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { Droplet, IconWrap } from 'ui/base/Icons'
import { Menu, MenuItem } from 'ui/base/Menu'
import { colors } from 'ui/base/theme'

const ColorItem = styled(MenuItem)`
  width: 15px;
  height: 15px;
  padding: 0;
  margin: 5px;
  border-radius: 3px;
`

const ColorMenu = (
  <Menu>
    <ColorItem key="0" style={{ background: colors.red }} />
    <ColorItem key="1" style={{ background: colors.blue }} />
    <ColorItem key="2" style={{ background: colors.green }} />
    <ColorItem key="3" style={{ background: colors.yellow }} />
    <ColorItem key="4" style={{ background: colors.purple }} />
  </Menu>
)
export const ColorPicker = () => {
  return (
    <Dropdown overlay={ColorMenu} trigger={['click']}>
      <IconWrap bgcolor="green" size={25}>
        <Droplet size={15} />
      </IconWrap>
    </Dropdown>
  )
}
