import { FileAddOutlined, FolderAddOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import { FolderStore } from 'stores/FolderStore'
import { NoteViewStore } from 'stores/NoteViewStore'
import { IconWrap } from 'ui/base/Icons'
import { colors } from 'ui/base/theme'
import { Menu } from '../../base/Menu'
import { FolderSubMenu } from './FolderSubMenu'
import { NewFolder } from './NewFolder'

export class FileDirectoryMenu extends React.Component {
  folders = FolderStore.folders
  openFolders = NoteViewStore.openFolders
  selectedFolder = NoteViewStore.selectedFolderId
  onOpenChange = (openKeys: string[]) => {
    NoteViewStore.setOpenFolders(openKeys)
  }
  openFolder = (folderId: string) => {
    if (!this.openFolders.includes(folderId)) {
      NoteViewStore.setOpenFolders([...this.openFolders, folderId.toString()])
    }
  }
  render() {
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
                  if (this.selectedFolder) {
                    this.openFolder(this.selectedFolder)
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
            openKeys={this.openFolders}
            onOpenChange={this.onOpenChange}
          >
            {this.folders.map((folder) => (
              <FolderSubMenu key={folder.id} folder={folder} />
            ))}
            {NoteViewStore.addFolderMode && <NewFolder />}
          </Menu>
        </Box>
      </>
    )
  }
}
