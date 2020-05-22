import { Layout } from 'antd'
import React from 'react'
import { Box } from 'reflexbox'
import styled from 'styled-components'
import { Folder } from 'types/files'
import { colors } from 'ui/base/theme'
import { Card } from 'ui/components/Card'
import { Header as TextHeader } from 'ui/components/Typography/Header'
import { NoteUtilsSideBar } from 'ui/composites/NoteUtilsSideBar'
import { ProfileBar } from 'ui/composites/ProfileBar'
import { Editor } from '../../composites/Editor'
import { NoteSideBar } from '../../composites/NoteSideBar'

const { Header, Content } = Layout

const StyledHeader = styled(Header)`
  padding: 1.4rem 3rem;
  background-color: ${colors.white};
  text-align: center;
  height: auto;
`

const HeaderContent = styled(Box)`
  border-radius: 10px;
  box-shadow: ${`3px 3px ${colors.grey}`};
  background-color: ${colors.black};
  color: ${colors.white};
`

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
  const [currNoteId, setCurrNoteId] = React.useState(0)
  const [currNoteFolderId, setCurrNoteFolderId] = React.useState(0)
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
    setCurrNoteId(note.id)
    setCurrNoteFolderId(note.folderId)
  }
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <NoteSideBar
          folders={folders}
          newNote={newNote}
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
            marginLeft: leftCollapsed ? '75px' : '275px',
            marginRight: rightCollapsed ? '75px' : '275px',
          }}
        >
          <StyledHeader>
            <HeaderContent>
              <TextHeader color="white">
                Folder: #{currNoteFolderId} / Note: #{currNoteId}
              </TextHeader>
            </HeaderContent>
          </StyledHeader>
          <Content style={{ backgroundColor: colors.white, margin: '0 50px' }}>
            <Card textAlign="left" height={1280}>
              <Editor noteId={currNoteId} />
            </Card>
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
