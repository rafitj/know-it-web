import { FileAddOutlined, FolderAddOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import { FolderStore } from 'stores/FolderStore'
import { NoteViewStore } from 'stores/NoteViewStore'
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

export const FileDirectoryMenu = observer(() => {
  const folders = FolderStore.folders
  const openFolders = NoteViewStore.openFolders
  const selectedFolder = NoteViewStore.selectedFolderId
  const onOpenChange = (openKeys: string[]) => {
    NoteViewStore.setOpenFolders(openKeys)
  }

  const openFolder = (folderId: string) => {
    if (!openFolders.includes(folderId)) {
      NoteViewStore.setOpenFolders([...openFolders, folderId.toString()])
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
              onClick={() => NoteViewStore.setAddFolderMode(true)}
            />
          </IconWrap>
          <IconWrap>
            <FileAddOutlined
              style={{ fontSize: 18 }}
              onClick={() => {
                if (selectedFolder) {
                  openFolder(selectedFolder)
                  NoteViewStore.setAddFileMode(true)
                }
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
            <FolderSubMenu key={folder.id} folder={folder} />
          ))}
          {NoteViewStore.addFolderMode && <NewFolder />}
        </Menu>
      </Box>
    </>
  )
})
