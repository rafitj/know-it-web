import { Layout } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import styled from 'styled-components'
import { Folder } from 'types/files'
import { colors } from 'ui/base/theme'
import { Line } from 'ui/components/Line'
import { FileDirectoryMenu } from './FileDirectoryMenu'
import { MiniFolderMenu } from './MiniFolderMenu'
import { ViewMenu } from './ViewMenu'
const { Sider } = Layout

export interface INoteSideBar {
  folders: Folder[]
  newFile: (name: string, folderId: number) => void
  newFolder: (name: string) => number
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
  margin: 25px 35px;
  height: 96vh;
  position: fixed;
  left: 0;
  box-shadow: ${`5px 5px ${colors.grey}`};
  overflow: auto;
`

export const NoteSideBar = ({
  folders,
  newFile,
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
      <Line color="white" />
      {collapsed ? (
        <MiniFolderMenu
          folder={folders.find((folder) => folder.id === currNoteFolderId)}
        />
      ) : (
        <FileDirectoryMenu
          folders={folders}
          newFile={newFile}
          newFolder={newFolder}
          setCurrFile={setCurrFile}
          currNoteId={currNoteId}
          currNoteFolderId={currNoteFolderId}
        />
      )}
    </StyledSider>
  )
}
