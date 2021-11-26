import { FilterOutlined, SearchOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import styled from 'styled-components'
import { Menu, MenuItem } from 'ui/base/Menu'
import { colors } from 'ui/base/theme'

const { Sider } = Layout

export interface INoteUtilsSideBar {
  collapsed: boolean
  onCollapse: (collapse: boolean) => void
}

const StyledSider = styled(Sider)<INoteUtilsSideBar>`
  border: 2px solid ${colors.black};
  background-color: ${colors.white};
  .ant-layout-sider-trigger {
    background-color: transparent;
    color: ${colors.black};
    margin-bottom: 30px;
  }
  margin: 20px;
  height: ${(props) => (props.collapsed ? '85vh' : '96vh')};
  position: fixed;
  top: ${(props) => (props.collapsed ? '110px' : '0')};
  right: 0;
  overflow: auto;
  border-radius: 10px;
  box-shadow: ${`3px 3px ${colors.grey}`};
`

export const NoteUtilsSideBar = ({
  collapsed,
  onCollapse,
}: INoteUtilsSideBar) => {
  return (
    <StyledSider
      collapsible={true}
      defaultCollapsed={true}
      collapsed={collapsed}
      onCollapse={onCollapse}
      breakpoint="lg"
      reverseArrow={true}
      width={275}
    >
      <Menu>
        <MenuItem icon={<SearchOutlined />}>Search</MenuItem>
        <MenuItem icon={<FilterOutlined />}>Filter</MenuItem>
      </Menu>
    </StyledSider>
  )
}
