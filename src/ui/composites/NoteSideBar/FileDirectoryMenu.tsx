import { FileAddOutlined, FolderAddOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import { Folder } from 'types/files'
import { IconWrap } from 'ui/base/Icons'
import { colors } from 'ui/base/theme'
import { Menu } from '../../base/Menu'
import { FolderSubMenu } from './FolderSubMenu'
import { NewFolder } from './NewFolder'

export interface IFileDirectoryMenu {
  folders: Folder[]
  newFile: (name: string, folderId: number) => void
  newFolder: (name: string) => number
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
  const [openFolders, setOpenFolders] = React.useState<string[]>([])
  const onOpenChange = (openKeys: string[]) => {
    setOpenFolders(openKeys)
  }

  const openFolder = (folderId: number) => {
    if (!openFolders.includes(folderId.toString())) {
      setOpenFolders((prevOpenFolders) => [
        ...prevOpenFolders,
        folderId.toString(),
      ])
    }
  }

  return (
    <>
      <Flex
        justifyContent="space-around"
        alignItems="center"
        height={40}
        color={colors.white}
      >
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
              onClick={() => {
                openFolder(currFolder)
                setAddFileMode(true)
              }}
            />
          </IconWrap>
        </Box>
      </Flex>
      <Box overflowY="scroll" height={'70vh'}>
        <Menu
          mode="inline"
          theme="dark"
          openKeys={openFolders}
          onOpenChange={onOpenChange}
        >
          {folders.map((folder) => (
            <FolderSubMenu
              key={folder.id}
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
            <NewFolder
              newFolder={newFolder}
              setAddFolderMode={setAddFolderMode}
              setCurrFolder={setCurrFolder}
            />
          )}
        </Menu>
      </Box>
    </>
  )
}
