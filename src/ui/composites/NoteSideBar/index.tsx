import 'antd/dist/antd.css'

import { Layout } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import styled from 'styled-components'
import { colors } from 'ui/base/theme'
import { Line } from 'ui/components/Line'
import { FileDirectoryMenu } from './FileDirectoryMenu'
import { MiniFolderMenu } from './MiniFolderMenu'
import { INoteSpaceState, NoteSpaceContext } from './NoteSpaceContext'
import { ViewMenu } from './ViewMenu'
const { Sider } = Layout

const StyledSider = styled(Sider)`
  .ant-layout-sider-children {
    overflow: hidden;
  }
  background-color: ${colors.black};
  .ant-layout-sider-trigger {
    background-color: ${colors.black};
    bottom: 4%;
  }
  border-radius: 10px;
  margin: 20px;
  height: 96%;
  position: fixed;
  left: 0;
  overflow: auto;
`

@observer
class NoteSideBar extends React.Component {
  state = this.context as INoteSpaceState

  render() {
    const { leftCollapsed, collapseLeft } = this.state.noteViewState

    return (
      <StyledSider
        collapsible={true}
        collapsed={leftCollapsed}
        onCollapse={collapseLeft}
        breakpoint="lg"
        width={275}
      >
        <ViewMenu />
        <Line color="white" />
        {leftCollapsed ? <MiniFolderMenu /> : <FileDirectoryMenu />}
      </StyledSider>
    )
  }
}

NoteSideBar.contextType = NoteSpaceContext

export { NoteSideBar }
