import { Layout } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import styled from 'styled-components'
import { Folder } from 'types/files'
import { colors } from 'ui/base/theme'
import { FileDirectoryMenu } from './FileDirectoryMenu'
import { ViewMenu } from './ViewMenu'
const { Sider } = Layout

export interface INoteSideBar {
  folders: Folder[]
  newNote: (name: string, folderId: number) => void
  newFolder: (name: string) => void
  setCurrFile: (fileId: number) => void
  collapsed: boolean
  onCollapse: (collapse: boolean) => void
}

const StyledSider = styled(Sider)`
  border-right: 2px solid;
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
      <FileDirectoryMenu
        folders={folders}
        newNote={newNote}
        newFolder={newFolder}
        setCurrFile={setCurrFile}
      />
    </StyledSider>
  )
}
