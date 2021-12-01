import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import React from 'react'
import styled from 'styled-components'
import { Menu, MenuItem } from 'ui/base/Menu'
import { colors } from 'ui/base/theme'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../NoteSideBar/NoteSpaceContext'

const { Sider } = Layout

const StyledSider = styled(Sider)`
  background-color: ${colors.white};
  .ant-layout-sider-trigger {
    display: none;
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
  }
`

@observer
class ProfileBar extends React.Component {
  state = this.context as INoteSpaceState

  onCollapse = (collapse: boolean) => {
    this.state.noteViewState.collapseRight(collapse)
  }

  render() {
    return (
      <>
        <StyledSider
          defaultCollapsed={true}
          collapsible={true}
          collapsed={this.state.noteViewState.rightCollapsed}
          onCollapse={this.onCollapse}
          breakpoint="lg"
          reverseArrow={true}
          width={0}
        >
          <Menu>
            <MenuItem
              icon={<HomeOutlined />}
              // onClick={() => this.navigateTo('/')}
            />
            <MenuItem
              icon={<UserOutlined />}
              // onClick={() => this.navigateTo('/')}
            />
          </Menu>
        </StyledSider>
      </>
    )
  }
}

ProfileBar.contextType = NoteSpaceContext

export { ProfileBar }
