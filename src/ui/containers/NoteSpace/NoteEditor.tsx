import { observer } from 'mobx-react'
import React from 'react'
import { Card } from 'ui/components/Card'
import { NoteView } from 'ui/composites/Editor/NoteView'
import { UnselectedNoteView } from 'ui/composites/Editor/UnselectedNoteView'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../../composites/NoteSideBar/NoteSpaceContext'

@observer
class NoteEditor extends React.Component {
  state = this.context as INoteSpaceState

  render() {
    const { note } = this.state.noteState
    return (
      <Card noShadow={true} textAlign="left">
        {note ? <NoteView /> : <UnselectedNoteView />}
      </Card>
    )
  }
}

NoteEditor.contextType = NoteSpaceContext

export { NoteEditor }
