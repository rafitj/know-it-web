import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import { BriefNoteDescriptionResponse } from 'network/proto/protos'
import React from 'react'
import { Flex } from 'reflexbox'
import { Download, Edit, IconWrap, Trash } from 'ui/base/Icons'
import { NoteSpaceContext } from './NoteSpaceContext'

export interface IFileMenuSettingsItem {
  note: BriefNoteDescriptionResponse
  editTitle: () => void
}

@observer
class FileMenuItemSettings extends React.Component<IFileMenuSettingsItem> {
  state = this.context
  deleteNote = () => {
    this.state.noteState.deleteNoteById(this.props.note.id)
  }
  render() {
    return (
      <Flex flexDirection="row">
        <IconWrap mx={1} height={25} bgcolor="blue">
          <Edit size={15} onClick={this.props.editTitle} />
        </IconWrap>
        <IconWrap mx={1} height={25} bgcolor="purple">
          <Download size={15} />
        </IconWrap>
        <IconWrap mx={1} height={25} bgcolor="red">
          <Trash size={15} onClick={this.deleteNote} />
        </IconWrap>
      </Flex>
    )
  }
}

FileMenuItemSettings.contextType = NoteSpaceContext

export { FileMenuItemSettings }
