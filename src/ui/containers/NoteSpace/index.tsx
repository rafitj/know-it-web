import React, { useState } from 'react'
import Editor from '../../composites/Editor'
import FileDirectory from '../../composites/FileDirectory'
import { Folder } from 'types/files'

export default () => {
  const [noteId, setNoteId] = useState(0)
  const [folders, setFolders] = useState<Folder[]>([])
  const pseudoID = () => Math.floor(Math.random() * 100000)
  const newFolder = (name: string) => {
    setFolders([...folders, { id: pseudoID(), name, notes: [] }])
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
      <FileDirectory
        folders={folders}
        newNote={newNote}
        newFolder={newFolder}
        setCurrFile={(noteId) => {
          setNoteId(noteId)
        }}
      />
      <Editor noteId={noteId} />
    </>
  )
}
