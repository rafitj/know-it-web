import { FileAddOutlined, FolderAddOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { Folder } from 'types/files'
import { IconWrap } from 'ui/base/Icons'
import { Menu } from '../../base/Menu'
import { FolderSubMenu } from './FolderSubMenu'
import { NewFolder } from './NewFolder'

export interface IFileDirectoryMenu {
  folders: Folder[]
  newNote: (name: string, folderId: number) => void
  newFolder: (name: string) => void
  setCurrFile: (fileId: number) => void
}

const StyledIconWrap = styled(IconWrap)``

export const FileDirectoryMenu = ({
  folders,
  newFolder,
  setCurrFile,
}: IFileDirectoryMenu) => {
  const [currFolder, setCurrFolder] = React.useState(-1)
  return (
    <Menu mode="inline" theme="dark">
      <Flex justifyContent="space-around" alignItems="center" height={40}>
        My Notes
        <Box flexDirection="row">
          <StyledIconWrap>
            <FolderAddOutlined style={{ fontSize: 21, marginRight: 20 }} />
          </StyledIconWrap>
          <StyledIconWrap>
            <FileAddOutlined style={{ fontSize: 18 }} />
          </StyledIconWrap>
        </Box>
      </Flex>
      {folders.map((folder) => (
        <FolderSubMenu
          folder={folder}
          setCurrFile={setCurrFile}
          setCurrFolder={setCurrFolder}
        />
      ))}
      {(currFolder !== -1 || folders.length === 0) && (
        <NewFolder newFolder={newFolder} />
      )}
    </Menu>
  )
}
