import React from 'react'
import { FolderState } from '../../../stores/FolderStore'
import { NoteState } from '../../../stores/NoteStore'
import { NoteViewState } from '../../../stores/NoteViewStore'

interface INoteSpaceState {
  noteViewState: NoteViewState
  folderState: FolderState
  noteState: NoteState
}

export const NoteSpaceContext = React.createContext<INoteSpaceState>({
  noteViewState: new NoteViewState(),
  folderState: new FolderState(),
  noteState: new NoteState(),
})
