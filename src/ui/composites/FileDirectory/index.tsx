import React, { useState } from 'react'
import Drawer from '../../base/Drawer'
import Menu, { SubMenu, Item as MenuItem } from '../../base/Menu'
import {
  AddCircle,
  IconWrap,
  Folder as FolderIcon,
  Note as NoteIcon,
  Drawer as DrawerIcon,
} from '../../base/Icons'
import { Folder } from 'types/files'
import 'antd/dist/antd.css'
import SimpleInput from '../../components/Input/SimpleInput'
import Subheader from 'ui/components/Typography/Subheader'
export interface FileDirectory {
  folders: Folder[]
  newNote: (name: string, folderId: number) => void
  newFolder: (name: string) => void
  setCurrFile: (fileId: number) => void
}

export default ({
  folders,
  newNote,
  newFolder,
  setCurrFile,
}: FileDirectory) => {
  const [currFolder, setCurrFolder] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(true)
  const [newFolderName, setNewFolderName] = useState('')
  const [newNoteName, setNewNoteName] = useState('')

  return (
    <>
      <Drawer
        visible={drawerOpen}
        onClose={() => {
          setDrawerOpen(false)
        }}
        placement="left"
      >
        <Subheader color="white">My Files</Subheader>
        <Menu mode="inline" theme="dark">
          {folders.map((folder) => (
            <SubMenu
              key={folder.id}
              onTitleClick={() => {
                setCurrFolder(folder.id)
              }}
              title={
                <span>
                  <IconWrap iconColor="white" mr={2}>
                    <FolderIcon />
                  </IconWrap>
                  {folder.name}
                </span>
              }
            >
              {folder.notes.map((note) => (
                <MenuItem
                  key={note.id}
                  onClick={() => {
                    setCurrFile(note.id)
                  }}
                >
                  <NoteIcon />
                  {note.name}
                </MenuItem>
              ))}
            </SubMenu>
          ))}
        </Menu>

        <IconWrap
          onClick={() => {
            newFolder(newFolderName)
          }}
          iconColor="white"
        >
          <AddCircle />
        </IconWrap>
        <SimpleInput
          placeholder="New Folder Name"
          onChange={(event) => {
            setNewFolderName(event.target.value)
          }}
        />

        <IconWrap
          onClick={() => {
            newNote(newNoteName, currFolder)
          }}
          iconColor="white"
        >
          <AddCircle />
        </IconWrap>
        <SimpleInput
          placeholder="New File Name"
          onChange={(event) => {
            setNewNoteName(event.target.value)
          }}
        />
      </Drawer>
      <IconWrap
        onClick={() => {
          setDrawerOpen(true)
        }}
      >
        <DrawerIcon />
      </IconWrap>
    </>
  )
}
