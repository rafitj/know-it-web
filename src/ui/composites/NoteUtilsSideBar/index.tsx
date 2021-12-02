import {
  BlockOutlined,
  FilterOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import React from 'react'
import { Box } from 'reflexbox'
import styled from 'styled-components'
import { Menu, MenuItem } from 'ui/base/Menu'
import { colors } from 'ui/base/theme'
import { INoteSpaceState, NoteSpaceContext } from '../NoteSpaceContext'
import { NoteTool } from './NoteTool'
import { NoteUtilsState } from './NoteUtilsState'

const { Sider } = Layout

const StyledSider = styled(Sider)<{ collapsed: boolean }>`
  border: 2px solid ${colors.black};
  background-color: ${colors.white};
  .ant-layout-sider-trigger {
    background-color: transparent;
    color: ${colors.black};
    bottom: 4%;
  }
  margin: 20px;
  height: ${(props) => (props.collapsed ? '86%' : '96%')};
  position: fixed;
  top: ${(props) => (props.collapsed ? '10%' : '0')};
  right: 0;
  overflow: auto;
  border-radius: 10px;
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
    const { note } = this.state.context.noteState
    const disableUtils = note === undefined
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
            disabled={disableUtils}
            icon={<BlockOutlined />}
            onClick={() => this.state.utils.selectTool('cards')}
          >
            Cards
          </MenuItem>
          <MenuItem
            disabled={disableUtils}
            icon={<SearchOutlined />}
            onClick={() => this.state.utils.selectTool('search')}
          >
            Search
          </MenuItem>
          <MenuItem
            disabled={disableUtils}
            icon={<FilterOutlined />}
            onClick={() => this.state.utils.selectTool('filter')}
          >
            Filter
          </MenuItem>
        </StyledMenu>
        {disableUtils && !collapsed && (
          <Box textAlign="center" p={4}>
            Select a Note
          </Box>
        )}
        {!collapsed && !disableUtils && (
          <NoteTool selectedTool={this.state.utils.selectedTool} />
        )}
      </StyledSider>
    )
  }
}

NoteUtilsSideBar.contextType = NoteSpaceContext

export { NoteUtilsSideBar }
