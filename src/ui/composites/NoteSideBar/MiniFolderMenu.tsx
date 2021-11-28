import { FolderOpenOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import SubMenu from 'antd/lib/menu/SubMenu'
import { observer } from 'mobx-react'
import React from 'react'
import { FolderStore } from 'stores/FolderStore'
import { NoteStore } from 'stores/NoteStore'
import { Menu, MenuItem } from '../../base/Menu'

@observer
export class MiniFolderMenu extends React.Component {
  folderId = NoteStore.note?.folderId
  folder = FolderStore.folders.find((folder) => folder.id === this.folderId)
  render() {
    return (
      <Menu mode="inline" theme="dark">
        <SubMenu icon={this.folder && <FolderOpenOutlined />}>
          {this.folder &&
            this.folder.notes &&
            this.folder.notes.map((note) => <MenuItem>{note.title}</MenuItem>)}
        </SubMenu>
      </Menu>
    )
  }
}
