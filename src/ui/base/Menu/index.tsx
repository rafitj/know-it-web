import { Menu } from 'antd'
import { MenuProps } from 'antd/lib/menu'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme'
export const { SubMenu, Item } = Menu
export type AntDMenuProps = MenuProps

export interface IMenuProps extends AntDMenuProps {
  children: React.ReactNode
}

const MenuContainer = styled.div`
  .ant-menu-submenu-title,
  .ant-menu,
  .ant-menu-dark,
  .ant-menu-root,
  .ant-menu-inline {
    background-color: ${colors.black};
    color: ${colors.white};
  }
  .ant-menu-submenu-active {
    background-color: black;
  }
`

export default ({ children, ...antdprops }: IMenuProps) => (
  <MenuContainer>
    <Menu {...antdprops}>{children}</Menu>
  </MenuContainer>
)
