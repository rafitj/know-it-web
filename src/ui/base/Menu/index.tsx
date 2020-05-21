import { Menu as AntDMenu } from 'antd'
import { MenuProps } from 'antd/lib/menu'
import { SubMenuProps } from 'antd/lib/menu/SubMenu'
import React from 'react'
import styled from 'styled-components'
import { color, colors } from '../theme'
const { SubMenu: AntDSubMenu } = AntDMenu
export const { Item } = AntDMenu

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
  text-align: left;
  .ant-menu-submenu-title,
  .ant-menu,
  .ant-menu-dark,
  .ant-menu-inline.ant-menu-sub,
  .ant-menu-root,
  .ant-menu-inline {
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
    color: ${colors.black};
    background-color: ${colors.white};
    width: 85% !important;
    margin: 0 auto !important;
    margin-bottom: 10px !important;
    border-radius: 5px;
    height: 30px !important;
    line-height: 30px !important;
    text-align: left;
    padding-left: 15px !important;
    transition: all 0.25s ease;
  }
  .ant-menu-item-active,
  .ant-menu-item-selected {
    color: ${colors.black} !important;
    background-color: ${colors.white} !important;
    transform: translateX(5px);
  }
`

export const Menu = ({ children, ...antdprops }: IMenuProps) => (
  <MenuContainer>
    <AntDMenu {...antdprops}>{children}</AntDMenu>
  </MenuContainer>
)
