import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import { BriefNoteDescriptionResponse } from 'network/proto/protos'
import React from 'react'
import { Flex } from 'reflexbox'
import { Edit, IconWrap, Trash } from 'ui/base/Icons'
import { INoteSpaceState, NoteSpaceContext } from './NoteSpaceContext'

export interface IFileMenuSettingsItem {
  note: BriefNoteDescriptionResponse
  editTitle: () => void
}

@observer
class FileMenuItemSettings extends React.Component<IFileMenuSettingsItem> {
  state = this.context as INoteSpaceState
  deleteNote = () => {
    this.state.noteState.deleteNoteById(this.props.note.id)
    if (this.props.note.id === this.state.noteState.note?.id) {
      this.state.noteState.deselectNote()
    }
  }
  render() {
    return (
      <Flex flexDirection="row">
        <IconWrap
          mx={1}
          height={25}
          bgcolor="blue"
          onClick={(e) => {
            e.stopPropagation()
            this.props.editTitle()
          }}
        >
          <Edit size={15} />
        </IconWrap>
        <IconWrap
          mx={1}
          height={25}
          bgcolor="red"
          onClick={(e) => {
            e.stopPropagation()
            this.deleteNote()
          }}
        >
          <Trash size={15} />
        </IconWrap>
      </Flex>
    )
  }
}

FileMenuItemSettings.contextType = NoteSpaceContext

export { FileMenuItemSettings }
