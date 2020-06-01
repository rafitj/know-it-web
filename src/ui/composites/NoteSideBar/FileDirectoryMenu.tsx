import { Tooltip } from 'antd'
import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import { GetFolderWithNotesResponse } from 'network/proto/protos'
import React from 'react'
import { ChevronsUp, FilePlus, FolderPlus } from 'react-feather'
import { Box, Flex } from 'reflexbox'
import { IconWrap } from 'ui/base/Icons'
import { colors } from 'ui/base/theme'
import { Menu } from '../../base/Menu'
import { FolderSubMenu } from './FolderSubMenu'
import { NewFolder } from './NewFolder'
import { INoteSpaceState, NoteSpaceContext } from './NoteSpaceContext'

@observer
class FileDirectoryMenu extends React.Component {
  state = this.context as INoteSpaceState

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
          justifyContent="space-between"
          alignItems="center"
          height={40}
          color={colors.white}
          px={4}
        >
          My {noteViewState.viewMode}
          <Flex flexDirection="row" alignItems="center">
            {folderState.folders.length > 5 ? (
              <IconWrap disabled={true} size={25}>
                <Tooltip title={'Max 6 Folders'}>
                  <FolderPlus size={15} style={{ opacity: 0.5 }} />
                </Tooltip>
              </IconWrap>
            ) : (
              <IconWrap size={25} bgcolor="darkBlack">
                <Tooltip title={'Add New Folder'}>
                  <FolderPlus
                    size={15}
                    onClick={() => noteViewState.setAddFolderMode(true)}
                  />
                </Tooltip>
              </IconWrap>
            )}
            <IconWrap size={25} bgcolor="darkBlack">
              <Tooltip title={'Add New File'}>
                <FilePlus
                  size={15}
                  onClick={() => {
                    if (selectedFolder) {
                      openFolder(selectedFolder)
                      noteViewState.setAddFileMode(true)
                    }
                  }}
                />
              </Tooltip>
            </IconWrap>
            <IconWrap size={25} bgcolor="darkBlack">
              <Tooltip title={'Close All Folders'}>
                <ChevronsUp
                  size={15}
                  onClick={() => {
                    noteViewState.setOpenFolders([])
                  }}
                />
              </Tooltip>
            </IconWrap>
          </Flex>
        </Flex>
        <Box overflowY="scroll" height={'65vh'}>
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
