import { FolderOpenOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import SubMenu from 'antd/lib/menu/SubMenu'
import React from 'react'
import { Folder } from 'types/files'
import { Menu, MenuItem } from '../../base/Menu'

export interface MiniFolderMenuProps {
  folder?: Folder
}

export const MiniFolderMenu = ({ folder }: MiniFolderMenuProps) => {
  return (
    <Menu mode="inline" theme="dark">
      <SubMenu icon={folder && <FolderOpenOutlined />}>
        {folder ? (
          folder.notes.map((note) => <MenuItem>{note.name}</MenuItem>)
        ) : (
          <></>
        )}
      </SubMenu>
    </Menu>
  )
}
