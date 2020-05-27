import React from 'react'
import { FolderState } from '../../../stores/FolderStore'
import { NoteState } from '../../../stores/NoteStore'
import { NoteViewState } from '../../../stores/NoteViewStore'

export interface INoteSpaceState {
  noteViewState: NoteViewState
  folderState: FolderState
  noteState: NoteState
}

const folderState = new FolderState()

export const NoteSpaceContext = React.createContext<INoteSpaceState>({
  noteViewState: new NoteViewState(),
  folderState,
  noteState: new NoteState(folderState),
})
