import { Layout } from 'antd'
import React from 'react'
import { Folder } from 'types/files'
import { colors } from 'ui/base/theme'
import { NoteUtilsSideBar } from 'ui/composites/NoteUtilsSideBar'
import { ProfileBar } from 'ui/composites/ProfileBar'
import { NoteSideBar } from '../../composites/NoteSideBar'
import { NoteEditor } from './NoteEditor'

const { Content } = Layout

export const NoteSpace = () => {
  const [leftCollapsed, setLeftCollapsed] = React.useState(false)
  const [rightCollapsed, setRightCollapsed] = React.useState(true)
  const [initial, setInitial] = React.useState(true)
  const onLeftCollapse = (collapse: boolean) => {
    setLeftCollapsed(collapse)
  }
  const onRightCollapse = (collapse: boolean) => {
    if (initial) {
      setInitial(false)
    } else {
      setRightCollapsed(collapse)
    }
  }
  const [currNoteId, setCurrNoteId] = React.useState(-1)
  const [currNoteFolderId, setCurrNoteFolderId] = React.useState(0)
  const [folders, setFolders] = React.useState<Folder[]>([])
  const pseudoID = () => Math.floor(Math.random() * 100000)
  const newFolder = (name: string) => {
    const id = pseudoID()
    setFolders([...folders, { id, name, notes: [], color: 'blue' }])
    return id
  }
  const newFile = (name: string, folderId: number) => {
    const note = { id: pseudoID(), folderId, name, data: '' }
    const newFolders = folders.map((folder) =>
      folder.id === note.folderId
        ? { ...folder, notes: [...folder.notes, note] }
        : folder
    )
    setFolders(newFolders)
    setCurrNoteId(note.id)
    setCurrNoteFolderId(note.folderId)
    return note.id
  }
  const newFolderAndFile = (folderName: string, fileName: string) => {
    const folderId = pseudoID()
    const newNote = { id: pseudoID(), folderId, name: fileName, data: '' }
    setFolders([
      ...folders,
      {
        id: folderId,
        name: folderName,
        notes: [newNote],
        color: 'blue',
      },
    ])
    setCurrNoteId(newNote.id)
    setCurrNoteFolderId(newNote.folderId)
  }

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <NoteSideBar
          folders={folders}
          newFile={newFile}
          newFolder={newFolder}
          setCurrFile={(noteId) => {
            setCurrNoteId(noteId)
          }}
          collapsed={leftCollapsed}
          onCollapse={onLeftCollapse}
          currNoteFolderId={currNoteFolderId}
          currNoteId={currNoteId}
        />
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
            <NoteEditor
              currNoteId={currNoteId}
              currNoteFolderId={currNoteFolderId}
              newFolderAndFile={newFolderAndFile}
            />
          </Content>
        </Layout>
        <ProfileBar collapsed={rightCollapsed} onCollapse={onRightCollapse} />
        <NoteUtilsSideBar
          collapsed={rightCollapsed}
          onCollapse={onRightCollapse}
        />
      </Layout>
    </>
  )
}
