import { Menu as AntDMenu } from 'antd'
import { MenuProps } from 'antd/lib/menu'
import { MenuItemProps } from 'antd/lib/menu/MenuItem'
import { SubMenuProps } from 'antd/lib/menu/SubMenu'
import React from 'react'
import styled from 'styled-components'
import { color, colors } from '../theme'
export const { Divider: MenuDivider } = AntDMenu
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
  selected?: boolean
}

const StyledSubMenu = styled(AntDSubMenu)<ISubMenuProps>`
  opacity: ${(props) => (props.selected ? 1 : 0.85)};
  .ant-menu-submenu-title {
    transition: all 0.2s ease;
    ${(props) =>
      props.selected
        ? `background-color: ${colors.darkBlack} !important;`
        : ''};
  }

  &.ant-menu-submenu-active {
    opacity: 1;
  }
  transition: all 0.25s ease;
  margin-bottom: 15px;
  .ant-submenu-pop {
    background-color: red;
  }
  ${(props) =>
    props.highlight ? 'border-left: 4px solid' + colors[props.highlight] : ''};
  ${(props) => (props.selected ? `border-left-width: 8px;` : '')};
`

export const SubMenu = ({
  highlight,
  children,
  selected,
  ...antdprops
}: ISubMenuProps) => (
  <StyledSubMenu selected={selected} highlight={highlight} {...antdprops}>
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
  .ant-menu-sub {
    background: transparent !important;
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
