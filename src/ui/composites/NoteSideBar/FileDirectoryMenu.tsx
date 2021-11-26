import 'antd/dist/antd.css'
import React from 'react'
import { Folder } from 'types/files'
import { Menu } from '../../base/Menu'
import { FolderSubMenu } from './FolderSubMenu'
import { NewFolder } from './NewFolder'

export interface IFileDirectoryMenu {
  folders: Folder[]
  newNote: (name: string, folderId: number) => void
  newFolder: (name: string) => void
  setCurrFile: (fileId: number) => void
}

export const FileDirectoryMenu = ({
  folders,
  newFolder,
  setCurrFile,
}: IFileDirectoryMenu) => {
  return (
    <Menu mode="inline" theme="dark">
      {folders.map((folder) => (
        <FolderSubMenu folder={folder} setCurrFile={setCurrFile} />
      ))}
      <NewFolder newFolder={newFolder} />
    </Menu>
  )
}
