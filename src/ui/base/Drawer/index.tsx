import { Drawer as AntDDrawer } from 'antd'
import { DrawerProps } from 'antd/lib/drawer'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme'

export type AntDDrawerProps = DrawerProps

export interface IDrawerProps extends AntDDrawerProps {
  children: React.ReactNode
}

const StyledDrawer = styled(AntDDrawer)`
  .ant-drawer-body {
    background-color: ${colors.black};
    padding: 10px 0;
  }

  .ant-drawer-content-wrapper {
    width 100% !important;
  }
`

export const Drawer = ({ children, ...antdprops }: IDrawerProps) => (
  <StyledDrawer {...antdprops}>{children}</StyledDrawer>
)
