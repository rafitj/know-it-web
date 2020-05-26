import { Layout } from 'antd'
import { observer } from 'mobx-react'
import React from 'react';
import { colors } from 'ui/base/theme'
import { NoteUtilsSideBar } from 'ui/composites/NoteUtilsSideBar'
import { ProfileBar } from 'ui/composites/ProfileBar'
import { NoteSideBar } from '../../composites/NoteSideBar'
import { NoteSpaceContext } from '../../composites/NoteSideBar/NoteSpaceContext';
import { NoteEditor } from './NoteEditor'
const { Content } = Layout

@observer
export class NoteSpace extends React.Component {
  state = this.context

  fetchFolders = async () => {
    await this.state.folderState.fetchFolders();
  }

  componentDidMount() {
    this.fetchFolders()
  }

  render() {
    const { leftCollapsed, rightCollapsed } = this.state.noteViewState;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <NoteSideBar />
        <Layout
          style={{
            transition: 'all 0.25s ease',
            backgroundColor: colors.white,
            marginLeft: leftCollapsed ? '110px' : '310px',
            marginRight: rightCollapsed ? '110px' : '310px',
          }}
        >
          <Content
            style={{
              backgroundColor: colors.white,
              margin: '25px 50px 0',
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