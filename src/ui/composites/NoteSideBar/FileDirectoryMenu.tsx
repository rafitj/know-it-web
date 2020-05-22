import { FileAddOutlined, FolderAddOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import { Folder } from 'types/files'
import { IconWrap } from 'ui/base/Icons'
import { Menu } from '../../base/Menu'
import { FolderSubMenu } from './FolderSubMenu'
import { NewFolder } from './NewFolder'

export interface IFileDirectoryMenu {
  folders: Folder[]
  newFile: (name: string, folderId: number) => void
  newFolder: (name: string) => void
  setCurrFile: (fileId: number) => void
  currNoteId: number
  currNoteFolderId: number
}

export const FileDirectoryMenu = ({
  folders,
  newFolder,
  newFile,
  setCurrFile,
  currNoteId,
  currNoteFolderId,
}: IFileDirectoryMenu) => {
  const [currFolder, setCurrFolder] = React.useState(-1)
  const [addFolderMode, setAddFolderMode] = React.useState(false)
  const [addFileMode, setAddFileMode] = React.useState(false)
  return (
    <Menu mode="inline" theme="dark">
      <Flex justifyContent="space-around" alignItems="center" height={40}>
        My Notes
        <Box flexDirection="row">
          <IconWrap>
            <FolderAddOutlined
              style={{ fontSize: 21, marginRight: 20 }}
              onClick={() => setAddFolderMode(true)}
            />
          </IconWrap>
          <IconWrap>
            <FileAddOutlined
              style={{ fontSize: 18 }}
              onClick={() => setAddFileMode(true)}
            />
          </IconWrap>
        </Box>
      </Flex>
      {folders.map((folder) => (
        <FolderSubMenu
          folder={folder}
          setCurrFile={setCurrFile}
          setCurrFolder={setCurrFolder}
          addFileMode={addFileMode && currFolder === folder.id}
          newFile={newFile}
          setAddFileMode={setAddFileMode}
          selected={currFolder === folder.id}
          currNoteId={currNoteId}
          currNoteFolderId={currNoteFolderId}
        />
      ))}
      {addFolderMode && (
        <NewFolder newFolder={newFolder} setAddFolderMode={setAddFolderMode} />
      )}
    </Menu>
  )
}
