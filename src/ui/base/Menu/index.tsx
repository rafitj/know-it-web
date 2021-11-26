import { Menu as AntDMenu } from 'antd'
import { MenuProps } from 'antd/lib/menu'
import { MenuItemProps } from 'antd/lib/menu/MenuItem'
import { SubMenuProps } from 'antd/lib/menu/SubMenu'
import React from 'react'
import styled from 'styled-components'
import { color, colors } from '../theme'
const { SubMenu: AntDSubMenu } = AntDMenu

export interface IMenuItemProps extends MenuItemProps {
  children?: React.ReactNode
}

export const MenuItem = ({ children, ...antdprops }: IMenuItemProps) => (
  <AntDMenu.Item {...antdprops}>{children}</AntDMenu.Item>
)

export interface ISubMenuProps extends SubMenuProps {
  highlight?: color
  children: React.ReactNode
}

const StyledSubMenu = styled(AntDSubMenu)<ISubMenuProps>`
  &.ant-menu-submenu-inline {
    ${(props) =>
      props.highlight
        ? 'border-left: 5px solid' + colors[props.highlight]
        : ''};
  }
`

export const SubMenu = ({
  highlight,
  children,
  ...antdprops
}: ISubMenuProps) => (
  <StyledSubMenu highlight={highlight} {...antdprops}>
    {children}
  </StyledSubMenu>
)

export type AntDMenuProps = MenuProps

export interface IMenuProps extends AntDMenuProps {
  children: React.ReactNode
}

const MenuContainer = styled.div`
  .ant-menu {
    background-color: ${colors.white};
    color: ${colors.black};
  }
  .ant-menu-dark {
    background-color: ${colors.black};
    color: ${colors.white};
  }
  .ant-menu-submenu-active {
    background-color: transparent;
  }
  .ant-menu-submenu-title {
    height: 30px !important;
    line-height: 30px !important;
    font-weight: bold;
  }
  .ant-menu-item {
    transition: all 0.25s ease;
  }
  .ant-menu-dark.ant-menu-item-active,
  .ant-menu-dark.ant-menu-item-selected {
    color: ${colors.white} !important;
    background-color: ${colors.black} !important;
    transform: translateX(5px);
  }
`

export const Menu = ({ children, ...antdprops }: IMenuProps) => (
  <MenuContainer>
    <AntDMenu {...antdprops}>{children}</AntDMenu>
  </MenuContainer>
)
