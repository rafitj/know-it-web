import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import React from 'react';
import styled from 'styled-components'
import { Menu, MenuItem } from 'ui/base/Menu'
import { colors } from 'ui/base/theme'
import { NoteSpaceContext } from '../NoteSideBar/NoteSpaceContext';

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

@observer
class ProfileBar extends React.Component {
  state = this.context

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
