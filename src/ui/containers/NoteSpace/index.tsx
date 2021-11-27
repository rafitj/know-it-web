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

export const NoteSpace = observer(() => {
  const leftCollapsed = NoteViewStore.leftCollapsed
  const rightCollapsed = NoteViewStore.rightCollapsed

  React.useEffect(() => {
    const x = async () => {
      await FolderStore.fetchFolders()
    }
    x()
  })

  return (
    <>
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
            style={{ backgroundColor: colors.white, margin: '25px 50px 0' }}
          >
            <NoteEditor />
          </Content>
        </Layout>
        <ProfileBar />
        <NoteUtilsSideBar />
      </Layout>
    </>
  )
})
