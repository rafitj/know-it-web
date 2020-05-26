import { FileAddOutlined, FolderAddOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import { GetFolderWithNotesResponse } from 'network/proto/protos'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import { IconWrap } from 'ui/base/Icons'
import { colors } from 'ui/base/theme'
import { Menu } from '../../base/Menu'
import { FolderSubMenu } from './FolderSubMenu'
import { NewFolder } from './NewFolder'
import { NoteSpaceContext } from './NoteSpaceContext'

@observer
class FileDirectoryMenu extends React.Component {
  state = this.context

  render() {
    const { noteViewState, folderState } = this.state

    const openFolders = noteViewState.openFolders
    const selectedFolder = noteViewState.selectedFolderId

    const onOpenChange = (openKeys: string[]) => {
      noteViewState.setOpenFolders(openKeys)
    }

    const openFolder = (folderId: string) => {
      if (!noteViewState.openFolders.includes(folderId)) {
        noteViewState.setOpenFolders([...openFolders, folderId.toString()])
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
                onClick={() => noteViewState.setAddFolderMode(true)}
              />
            </IconWrap>
            <IconWrap>
              <FileAddOutlined
                style={{ fontSize: 18 }}
                onClick={() => {
                  if (selectedFolder) {
                    openFolder(selectedFolder)
                    noteViewState.setAddFileMode(true)
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
            {folderState.folders.map((folder: GetFolderWithNotesResponse) => (
              <FolderSubMenu key={folder.id} folder={folder} />
            ))}
            {noteViewState.addFolderMode && <NewFolder />}
          </Menu>
        </Box>
      </>
    )
  }
}

FileDirectoryMenu.contextType = NoteSpaceContext

export { FileDirectoryMenu }
