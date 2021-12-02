import { Layout } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import { colors } from '../../base/theme'
import { CardEditorView } from '../../composites/CardEditorView'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../../composites/NoteSideBar/NoteSpaceContext'

const { Content } = Layout

@observer
class CardEditor extends React.Component {
  state = this.context as INoteSpaceState

  render() {
    return (
      <Content
        style={{
          backgroundColor: colors.white,
          margin: '20px',
        }}
      >
        <CardEditorView />
      </Content>
    )
  }
}

CardEditor.contextType = NoteSpaceContext

export { CardEditor }
