import { observer } from 'mobx-react'
import React from 'react'
import { NoteStore } from 'stores/NoteStore'
import { Card } from 'ui/components/Card'
import { NoteView } from 'ui/composites/Editor/NoteView'
import { UnselectedNoteView } from 'ui/composites/Editor/UnselectedNoteView'

@observer
export class NoteEditor extends React.Component {
  note = NoteStore.note
  render() {
    return (
      <Card textAlign="left" height="96vh">
        {this.note ? <NoteView /> : <UnselectedNoteView />}
      </Card>
    )
  }
}
