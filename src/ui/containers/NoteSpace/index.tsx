import React from 'react'
import { Box, Flex } from 'reflexbox'
import { Folder } from 'types/files'
import { Editor } from '../../composites/Editor'
import { FileDirectory } from '../../composites/FileDirectory'

export const NoteSpace = () => {
  const [noteId, setNoteId] = React.useState(0)
  const [drawerOpen, setDrawerOpen] = React.useState(true)
  const [folders, setFolders] = React.useState<Folder[]>([])
  const [timer, setTimer] = React.useState(10000)
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

  const autoClose = () => {
    setTimeout(() => {
      setDrawerOpen(false)
    }, timer)
  }

  return (
    <>
      <Flex>
        <Box
          width={drawerOpen ? [1.75 / 12] : [0.25 / 12]}
          textAlign="center"
          style={{ transition: 'all 0.25s ease' }}
          onMouseLeave={autoClose}
          onMouseOver={() => {
            setTimer(10000)
            setDrawerOpen(true)
          }}
        >
          <FileDirectory
            folders={folders}
            newNote={newNote}
            newFolder={newFolder}
            setCurrFile={(noteId) => {
              setNoteId(noteId)
            }}
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
          />
        </Box>
        <Box
          width={drawerOpen ? [10.25 / 12] : [11.75 / 12]}
          textAlign="center"
          style={{ transition: 'all 0.25s ease' }}
        >
          <Editor noteId={noteId} />
        </Box>
      </Flex>
    </>
  )
}
