import { Layout } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import { Card } from 'ui/components/Card'
import { NoteView } from 'ui/composites/Editor/NoteView'
import { UnselectedNoteView } from 'ui/composites/Editor/UnselectedNoteView'
import { colors } from '../../base/theme'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../../composites/NoteSideBar/NoteSpaceContext'

const { Content } = Layout

@observer
class NoteEditor extends React.Component {
  state = this.context as INoteSpaceState

  render() {
    const { note } = this.state.noteState
    return (
      <Content
        style={{
          backgroundColor: colors.white,
          margin: '20px',
        }}
      >
        <Card noShadow={true} textAlign="left" style={{ minHeight: '96vh' }}>
          {note ? <NoteView /> : <UnselectedNoteView />}
        </Card>
      </Content>
    )
  }
}

NoteEditor.contextType = NoteSpaceContext

export { NoteEditor }
