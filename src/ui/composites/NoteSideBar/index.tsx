import 'antd/dist/antd.css'

import { Layout } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import styled from 'styled-components'
import { colors } from 'ui/base/theme'
import { Line } from 'ui/components/Line'
import { FileDirectoryMenu } from './FileDirectoryMenu'
import { MiniFolderMenu } from './MiniFolderMenu'
import { NoteSpaceContext } from './NoteSpaceContext'
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
class NoteSideBar extends React.Component {
  state = this.context

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
