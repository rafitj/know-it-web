import 'antd/dist/antd.css'
import React from 'react'
import { Flex } from 'reflexbox'
import { Folder } from 'types/files'
import { SubMenu } from '../../base/Menu'
import { FileMenuItem } from './FileMenuItem'

export interface IFolderSubMenu {
  folder: Folder
  setCurrFile: (fileId: number) => void
  setCurrFolder: React.Dispatch<React.SetStateAction<number>>
}

export const FolderSubMenu = ({
  folder,
  setCurrFile,
  setCurrFolder,
}: IFolderSubMenu) => {
  return (
    <SubMenu
      highlight={folder.color}
      key={folder.id.toString()}
      title={
        <span>
          <Flex justifyContent="space-between" alignItems="center">
            {folder.name}
            />
          </Flex>
        </span>
      }
      onTitleClick={() => setCurrFolder(folder.id)}
    >
      {folder.notes.map((note) => (
        <FileMenuItem note={note} setCurrFile={setCurrFile} />
      ))}
    </SubMenu>
  )
}
