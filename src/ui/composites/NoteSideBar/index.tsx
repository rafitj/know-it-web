import { Layout } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import { Folder } from 'types/files'
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

export const NoteSideBar = ({
  folders,
  newNote,
  newFolder,
  setCurrFile,
  collapsed,
  onCollapse,
}: INoteSideBar) => {
  return (
    <Sider
      collapsible={true}
      collapsed={collapsed}
      onCollapse={onCollapse}
      breakpoint="xs"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <ViewMenu />
      <FileDirectoryMenu
        folders={folders}
        newNote={newNote}
        newFolder={newFolder}
        setCurrFile={setCurrFile}
      />
    </Sider>
  )
}
