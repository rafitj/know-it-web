import { FolderOpenOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import SubMenu from 'antd/lib/menu/SubMenu'
import { observer } from 'mobx-react'
import React from 'react'
import { FolderStore } from 'stores/FolderStore'
import { NoteStore } from 'stores/NoteStore'
import { Menu, MenuItem } from '../../base/Menu'

export const MiniFolderMenu = observer(() => {
  const folderId = NoteStore.note?.folderId
  const folder = FolderStore.folders.find((folder) => folder.id === folderId)
  return (
    <Menu mode="inline" theme="dark">
      <SubMenu icon={folder && <FolderOpenOutlined />}>
        {folder &&
          folder.notes &&
          folder.notes.map((note) => <MenuItem>{note.title}</MenuItem>)}
      </SubMenu>
    </Menu>
  )
})
