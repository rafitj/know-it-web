import { observer } from 'mobx-react'
import React from 'react'
import { Card } from 'ui/components/Card'
import { NoteView } from 'ui/composites/Editor/NoteView'
import { UnselectedNoteView } from 'ui/composites/Editor/UnselectedNoteView'
import { NoteSpaceContext } from '../../composites/NoteSideBar/NoteSpaceContext'

@observer
class NoteEditor extends React.Component {
  state = this.context

  render() {
    const { note } = this.state.noteState
    return (
      <Card textAlign="left" height="96vh">
        {note ? <NoteView /> : <UnselectedNoteView />}
      </Card>
    )
  }
}

NoteEditor.contextType = NoteSpaceContext

export { NoteEditor }
