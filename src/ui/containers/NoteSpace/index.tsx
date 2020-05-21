import { Layout } from 'antd'
import React from 'react'
import { Folder } from 'types/files'
import { colors } from 'ui/base/theme'
import { Card } from 'ui/components/Card'
import { Editor } from '../../composites/Editor'
import { NoteSideBar } from '../../composites/NoteSideBar'

const { Header, Content, Footer } = Layout

export const NoteSpace = () => {
  const [collapsed, setCollapsed] = React.useState(false)
  const onCollapse = (collapse: boolean) => {
    setCollapsed(collapse)
  }
  const [noteId, setNoteId] = React.useState(0)
  const [folders, setFolders] = React.useState<Folder[]>([])
  const pseudoID = () => Math.floor(Math.random() * 100000)
  const newFolder = (name: string) => {
    setFolders([...folders, { id: pseudoID(), name, notes: [], color: 'blue' }])
  }
  const newNote = (name: string, folderId: number) => {
    const note = { id: pseudoID(), folderId, name, data: '' }
    const newFolders = folders.map((folder) =>
      folder.id === note.folderId
        ? { ...folder, notes: [...folder.notes, note] }
        : folder
    )
    setFolders(newFolders)
    setNoteId(note.id)
  }

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <NoteSideBar
          folders={folders}
          newNote={newNote}
          newFolder={newFolder}
          setCurrFile={(noteId) => {
            setNoteId(noteId)
          }}
          collapsed={collapsed}
          onCollapse={onCollapse}
        />
        <Layout
          style={{
            transition: 'all 0.25s ease',
            backgroundColor: colors.whiteHover,
            marginLeft: collapsed ? '75px' : '200px',
          }}
        >
          <Header style={{ backgroundColor: colors.whiteHover, padding: 0 }} />
          <Content style={{ backgroundColor: colors.white, margin: '0 36px' }}>
            <Card>
              <Editor noteId={noteId} />
            </Card>
          </Content>
          <Footer style={{ textAlign: 'center' }}/>
        </Layout>
      </Layout>
    </>
  )
}
