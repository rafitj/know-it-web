import { Drawer } from 'antd'
import { DrawerProps } from 'antd/lib/drawer'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme'

export type AntDDrawerProps = DrawerProps

export interface IDrawerProps extends AntDDrawerProps {
  children: React.ReactNode
}

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    background-color: ${colors.black};
  }
`

export default ({ children, ...antdprops }: IDrawerProps) => (
  <StyledDrawer {...antdprops}>{children}</StyledDrawer>
)
