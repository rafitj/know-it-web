import { Layout } from 'antd'
import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import React from 'react'
import { NoteViewStore } from 'stores/NoteViewStore'
import styled from 'styled-components'
import { colors } from 'ui/base/theme'
import { Line } from 'ui/components/Line'
import { FileDirectoryMenu } from './FileDirectoryMenu'
import { MiniFolderMenu } from './MiniFolderMenu'
import { ViewMenu } from './ViewMenu'
const { Sider } = Layout

const StyledSider = styled(Sider)`
  background-color: ${colors.black};
  .ant-layout-sider-trigger {
    background-color: ${colors.black};
    margin-bottom: 30px;
  }
  border-radius: 10px;
  margin: 25px 35px;
  height: 96vh;
  position: fixed;
  left: 0;
  box-shadow: ${`5px 5px ${colors.grey}`};
  overflow: auto;
`
@observer
export class NoteSideBar extends React.Component {
  collapsed = NoteViewStore.leftCollapsed
  onCollapse = (collapse: boolean) => {
    NoteViewStore.collapseLeft(collapse)
  }
  render() {
    return (
      <StyledSider
        collapsible={true}
        collapsed={this.collapsed}
        onCollapse={this.onCollapse}
        breakpoint="lg"
        width={275}
      >
        <ViewMenu />
        <Line color="white" />
        {this.collapsed ? <MiniFolderMenu /> : <FileDirectoryMenu />}
      </StyledSider>
    )
  }
}
