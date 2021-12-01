import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import { GetFolderWithNotesResponse } from 'network/proto/protos'
import React from 'react'
import { Flex } from 'reflexbox'
import { Download, Edit, IconWrap, Trash } from 'ui/base/Icons'
import { ColorPicker } from '../../components/ColorPicker'
import { INoteSpaceState, NoteSpaceContext } from './NoteSpaceContext'

export interface IFolderMenuSettingsItem {
  folder: GetFolderWithNotesResponse
  editTitle: () => void
}

@observer
class FolderMenuSettings extends React.Component<IFolderMenuSettingsItem> {
  state = this.context as INoteSpaceState
  deleteFolder = () => {
    const folderIsInView = this.props.folder.notes.find(
      (note) => note.id === this.state.noteState.note?.id
    )
    this.state.folderState.deleteFolder(this.props.folder.id)

    if (folderIsInView) {
      this.state.noteState.deselectNote()
    }
  }
  render() {
    return (
      <Flex flexDirection="row">
        <ColorPicker />
        <IconWrap
          mx={1}
          height={25}
          bgcolor="blue"
          onClick={this.props.editTitle}
        >
          <Edit size={15} />
        </IconWrap>
        <IconWrap mx={1} height={25} bgcolor="purple">
          <Download size={15} />
        </IconWrap>
        <IconWrap mx={1} height={25} bgcolor="red" onClick={this.deleteFolder}>
          <Trash size={15} />
        </IconWrap>
      </Flex>
    )
  }
}

FolderMenuSettings.contextType = NoteSpaceContext

export { FolderMenuSettings }
