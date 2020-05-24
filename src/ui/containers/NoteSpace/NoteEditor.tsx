import { observer } from 'mobx-react'
import React from 'react'
import { NoteStore } from 'stores/NoteStore'
import { Card } from 'ui/components/Card'
import { NoteView } from 'ui/composites/Editor/NoteView'
import { UnselectedNoteView } from 'ui/composites/Editor/UnselectedNoteView'

export const NoteEditor = observer(() => {
  const note = NoteStore.note
  return (
    <Card textAlign="left" height="96vh">
      {note ? <NoteView /> : <UnselectedNoteView />}
    </Card>
  )
})
