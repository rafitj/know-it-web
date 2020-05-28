import { Layout } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import { colors } from 'ui/base/theme'
import { NoteUtilsSideBar } from 'ui/composites/NoteUtilsSideBar'
import { ProfileBar } from 'ui/composites/ProfileBar'
import { NoteSideBar } from '../../composites/NoteSideBar'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../../composites/NoteSideBar/NoteSpaceContext'
import { NoteEditor } from './NoteEditor'
const { Content } = Layout

@observer
export class NoteSpace extends React.Component {
  state = this.context as INoteSpaceState

  fetchFolders = async () => {
    await this.state.folderState.fetchFolders()
  }

  componentDidMount() {
    this.fetchFolders()
  }

  render() {
    const { leftCollapsed, rightCollapsed } = this.state.noteViewState

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <NoteSideBar />
        <Layout
          style={{
            transition: 'all 0.25s ease',
            backgroundColor: colors.white,
            marginLeft: leftCollapsed ? '100px' : '300px',
            marginRight: rightCollapsed ? '100px' : '300px',
          }}
        >
          <Content
            style={{
              backgroundColor: colors.white,
              margin: '20px',
            }}
          >
            <NoteEditor />
          </Content>
        </Layout>
        <ProfileBar />
        <NoteUtilsSideBar />
      </Layout>
    )
  }
}

NoteSpace.contextType = NoteSpaceContext
