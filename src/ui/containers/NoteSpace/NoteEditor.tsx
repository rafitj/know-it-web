import EditorJsType from '@editorjs/editorjs/types'
import React from 'react'
import { NoteStore } from 'stores/NoteStore'
import { Card } from 'ui/components/Card'
import { NoteView } from 'ui/composites/Editor/NoteView'
import { UnselectedNoteView } from 'ui/composites/Editor/UnselectedNoteView'

export const NoteEditor = () => {
  const note = NoteStore.note
  const [editorInstance, setEditorInstance] = React.useState<EditorJsType>()
  return (
    <Card textAlign="left" height="96vh">
      {note ? (
        <UnselectedNoteView />
      ) : (
        <NoteView
          editorInstance={editorInstance}
          setEditorInstance={setEditorInstance}
        />
      )}
    </Card>
  )
}
