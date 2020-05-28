import {
  BlockOutlined,
  FilterOutlined,
  SearchOutlined,
} from '@ant-design/icons'
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
import { NoteTool } from './NoteTool'
import { NoteUtilsState } from './NoteUtilsState'

const { Sider } = Layout

const StyledSider = styled(Sider)<{ collapsed: boolean }>`
  border: 2px solid ${colors.black};
  background-color: ${colors.white};
  .ant-layout-sider-trigger {
    background-color: transparent;
    color: ${colors.black};
    margin-bottom: 30px;
  }
  margin: 25px 35px;
  height: ${(props) => (props.collapsed ? '85vh' : '96vh')};
  position: fixed;
  top: ${(props) => (props.collapsed ? '110px' : '0')};
  right: 0;
  overflow: auto;
  border-radius: 10px;
  box-shadow: ${`5px 5px ${colors.grey}`};
  overflow-x: hidden;
`

const StyledMenu = styled(Menu)`
  &.ant-menu-horizontal > .ant-menu-item {
    padding: 0 14.25px;
  }
`

@observer
class NoteUtilsSideBar extends React.Component {
  state = {
    utils: new NoteUtilsState(this.context.noteViewState),
    context: this.context as INoteSpaceState,
  }

  render() {
    const { rightCollapsed: collapsed } = this.state.context.noteViewState

    return (
      <StyledSider
        collapsible={true}
        defaultCollapsed={true}
        collapsed={collapsed}
        onCollapse={this.state.utils.onCollapse}
        breakpoint="lg"
        reverseArrow={true}
        width={275}
      >
        <StyledMenu mode={collapsed ? 'vertical' : 'horizontal'}>
          <MenuItem
            icon={<BlockOutlined />}
            onClick={() => this.state.utils.selectTool('cards')}
          >
            Cards
          </MenuItem>
          <MenuItem
            icon={<SearchOutlined />}
            onClick={() => this.state.utils.selectTool('search')}
          >
            Search
          </MenuItem>
          <MenuItem
            icon={<FilterOutlined />}
            onClick={() => this.state.utils.selectTool('filter')}
          >
            Filter
          </MenuItem>
        </StyledMenu>
        {!collapsed && (
          <NoteTool selectedTool={this.state.utils.selectedTool} />
        )}
      </StyledSider>
    )
  }
}

NoteUtilsSideBar.contextType = NoteSpaceContext

export { NoteUtilsSideBar }
