import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import styled from 'styled-components'
import { Menu, MenuItem } from 'ui/base/Menu'
import { colors } from 'ui/base/theme'

const { Sider } = Layout

export interface IProfileBar {
  collapsed: boolean
  onCollapse: (collapse: boolean) => void
}

const StyledSider = styled(Sider)`
  background-color: ${colors.white};
  .ant-layout-sider-trigger {
    background-color: transparent;
    color: ${colors.black};
    margin-bottom: 30px;
  }
  .ant-layout-sider-zero-width-trigger {
    display: none;
  }
  margin: 20px;
  position: fixed;
  right: 0;
  .ant-menu-item {
    border: 2px solid ${colors.black};
    border-radius: 10px;
    box-shadow: ${`3px 3px ${colors.grey}`};
  }
`

export const ProfileBar = ({ collapsed, onCollapse }: IProfileBar) => {
  return (
    <>
      <StyledSider
        defaultCollapsed={true}
        collapsible={true}
        collapsed={collapsed}
        onCollapse={onCollapse}
        breakpoint="lg"
        reverseArrow={true}
        width={0}
      >
        <Menu>
          <MenuItem icon={<HomeOutlined />} />
          <MenuItem icon={<UserOutlined />} />
        </Menu>
      </StyledSider>
    </>
  )
}
