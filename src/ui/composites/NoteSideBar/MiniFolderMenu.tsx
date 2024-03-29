import { FolderOpenOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import SubMenu from 'antd/lib/menu/SubMenu'
import { observer } from 'mobx-react'
import React from 'react'
import {
  BriefNoteDescriptionResponse,
  GetFolderWithNotesResponse,
} from '../../../network/proto/protos'
import { Menu, MenuItem } from '../../base/Menu'
import { INoteSpaceState, NoteSpaceContext } from '../NoteSpaceContext'

@observer
class MiniFolderMenu extends React.Component {
  state = this.context as INoteSpaceState

  render() {
    const folderId = this.state.noteState.note?.folderId
    const folder = this.state.folderState.folders.find(
      (f: GetFolderWithNotesResponse) => f.id === folderId
    )
    const setNoteViewById = async (noteId: string) => {
      await this.state.noteState.fetchNote(noteId)
      await this.state.cardState.fetchCards(noteId)
    }

    return (
      <Menu mode="inline" theme="dark">
        <SubMenu icon={folder && <FolderOpenOutlined />}>
          {folder &&
            folder.notes &&
            folder.notes.map((note: BriefNoteDescriptionResponse) => (
              <MenuItem
                key={note.id}
                onClick={(e) => {
                  e.domEvent.stopPropagation()
                  setNoteViewById(note.id)
                }}
              >
                {note.title}
              </MenuItem>
            ))}
        </SubMenu>
      </Menu>
    )
  }
}

MiniFolderMenu.contextType = NoteSpaceContext

export { MiniFolderMenu }
