import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { NoteViewStore } from 'stores/NoteViewStore'
import styled from 'styled-components'
import { Menu, MenuItem } from 'ui/base/Menu'
import { colors } from 'ui/base/theme'

const { Sider } = Layout

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
  margin: 25px 35px;
  position: fixed;
  right: 0;
  .ant-menu-item {
    border: 2px solid ${colors.black};
    border-radius: 10px;
    box-shadow: ${`3px 3px ${colors.grey}`};
  }
`

export const ProfileBar = observer(() => {
  const collapsed = NoteViewStore.rightCollapsed
  const onCollapse = (collapse: boolean) => {
    NoteViewStore.collapseRight(collapse)
  }
  const history = useHistory()
  const navigateTo = (dest: string) => {
    history.push(dest)
  }
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
          <MenuItem icon={<HomeOutlined />} onClick={() => navigateTo('/')} />
          <MenuItem icon={<UserOutlined />} onClick={() => navigateTo('/')} />
        </Menu>
      </StyledSider>
    </>
  )
})
