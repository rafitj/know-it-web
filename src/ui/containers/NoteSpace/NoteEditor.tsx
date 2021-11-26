import EditorJsType from '@editorjs/editorjs/types'
import React from 'react'
import { Card } from 'ui/components/Card'
import { NoteView } from 'ui/composites/Editor/NoteView'
import { UnselectedNoteView } from 'ui/composites/Editor/UnselectedNoteView'

interface NoteEditorProps {
  currNoteId: number
  currNoteFolderId: number
  newFolderAndFile: (folderName: string, fileName: string) => void
}

export const NoteEditor = ({
  currNoteFolderId,
  currNoteId,
  newFolderAndFile,
}: NoteEditorProps) => {
  const [editorInstance, setEditorInstance] = React.useState<EditorJsType>()
  return (
    <Card textAlign="left" height="96vh">
      {currNoteId === -1 ? (
        <UnselectedNoteView newFolderAndFile={newFolderAndFile} />
      ) : (
        <NoteView
          currNoteId={currNoteId}
          currNoteFolderId={currNoteFolderId}
          editorInstance={editorInstance}
          setEditorInstance={setEditorInstance}
        />
      )}
    </Card>
  )
}
