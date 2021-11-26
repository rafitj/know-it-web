import { Layout } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import styled from 'styled-components'
import { Folder } from 'types/files'
import { colors } from 'ui/base/theme'
import { FileDirectoryMenu } from './FileDirectoryMenu'
import { MiniFolderMenu } from './MiniFolderMenu'
import { ViewMenu } from './ViewMenu'
const { Sider } = Layout

export interface INoteSideBar {
  folders: Folder[]
  newNote: (name: string, folderId: number) => void
  newFolder: (name: string) => void
  setCurrFile: (fileId: number) => void
  collapsed: boolean
  onCollapse: (collapse: boolean) => void
  currNoteFolderId: number
  currNoteId: number
}

const StyledSider = styled(Sider)`
  background-color: ${colors.black};
  .ant-layout-sider-trigger {
    background-color: ${colors.black};
    margin-bottom: 30px;
  }
  border-radius: 10px;
  margin: 20px;
  height: 96vh;
  position: fixed;
  left: 0;
  box-shadow: ${`3px 3px ${colors.grey}`};
  overflow: auto;
`

export const NoteSideBar = ({
  folders,
  newNote,
  newFolder,
  setCurrFile,
  collapsed,
  onCollapse,
  currNoteFolderId,
  currNoteId,
}: INoteSideBar) => {
  return (
    <StyledSider
      collapsible={true}
      collapsed={collapsed}
      onCollapse={onCollapse}
      breakpoint="lg"
      width={275}
    >
      <ViewMenu />
      {collapsed ? (
        <MiniFolderMenu
          folder={folders.find((folder) => folder.id === currNoteFolderId)}
        />
      ) : (
        <FileDirectoryMenu
          folders={folders}
          newFile={newNote}
          newFolder={newFolder}
          setCurrFile={setCurrFile}
          currNoteId={currNoteId}
          currNoteFolderId={currNoteFolderId}
        />
      )}
    </StyledSider>
  )
}
