import {
  BlockOutlined,
  FilterOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import React from 'react'
import { NoteViewStore } from 'stores/NoteViewStore'
import styled from 'styled-components'
import { NoteTools } from 'types/note'
import { Menu, MenuItem } from 'ui/base/Menu'
import { colors } from 'ui/base/theme'
import { NoteTool } from './NoteTool'

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

export const NoteUtilsSideBar = observer(() => {
  const collapsed = NoteViewStore.rightCollapsed
  const onCollapse = (collapse: boolean) => {
    NoteViewStore.collapseRight(collapse)
  }
  const [selectedTool, setSelectedTool] = React.useState<NoteTools>('cards')
  const selectTool = (tool: NoteTools) => {
    onCollapse(false)
    setSelectedTool(tool)
  }
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
      <StyledMenu mode={collapsed ? 'vertical' : 'horizontal'}>
        <MenuItem icon={<BlockOutlined />} onClick={() => selectTool('cards')}>
          Cards
        </MenuItem>
        <MenuItem
          icon={<SearchOutlined />}
          onClick={() => selectTool('search')}
        >
          Search
        </MenuItem>
        <MenuItem
          icon={<FilterOutlined />}
          onClick={() => selectTool('filter')}
        >
          Filter
        </MenuItem>
      </StyledMenu>
      {!collapsed && <NoteTool selectedTool={selectedTool} />}
    </StyledSider>
  )
})
