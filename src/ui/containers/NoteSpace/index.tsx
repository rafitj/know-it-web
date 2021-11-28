import { Layout } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import { FolderStore } from 'stores/FolderStore'
import { NoteViewStore } from 'stores/NoteViewStore'
import { colors } from 'ui/base/theme'
import { NoteUtilsSideBar } from 'ui/composites/NoteUtilsSideBar'
import { ProfileBar } from 'ui/composites/ProfileBar'
import { NoteSideBar } from '../../composites/NoteSideBar'
import { NoteEditor } from './NoteEditor'
const { Content } = Layout

@observer
export class NoteSpace extends React.Component {
  leftCollapsed = NoteViewStore.leftCollapsed
  rightCollapsed = NoteViewStore.rightCollapsed
  fetchFolders = async () => {
    await FolderStore.fetchFolders()
  }
  componentDidMount() {
    this.fetchFolders()
  }
  render() {
    return (
      <>
        <Layout style={{ minHeight: '100vh' }}>
          <NoteSideBar />
          <Layout
            style={{
              transition: 'all 0.25s ease',
              backgroundColor: colors.white,
              marginLeft: this.leftCollapsed ? '110px' : '310px',
              marginRight: this.rightCollapsed ? '110px' : '310px',
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
      </>
    )
  }
}
