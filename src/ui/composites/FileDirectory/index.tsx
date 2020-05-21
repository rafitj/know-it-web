import { Input } from 'antd'
import 'antd/dist/antd.css'
import React, { useState } from 'react'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { Folder } from 'types/files'
import { Drawer } from 'ui/base/Drawer'
import {
  FilePlus as FileIcon,
  FolderPlus as FolderIcon,
  IconWrap,
  Settings,
  Trash,
} from 'ui/base/Icons'
import { Item as MenuItem, Menu, SubMenu } from '../../base/Menu'

export interface IFileDirectory {
  folders: Folder[]
  newNote: (name: string, folderId: number) => void
  newFolder: (name: string) => void
  setCurrFile: (fileId: number) => void
  drawerOpen: boolean
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DrawerContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`

const LineInput = styled(Input)`
  &.ant-input {
    background-color: transparent;
    border-radius: 5px;
    color: white;
  }
`

export const FileDirectory = ({
  folders,
  newNote,
  newFolder,
  setCurrFile,
  drawerOpen,
  setDrawerOpen,
}: IFileDirectory) => {
  const [newFolderName, setNewFolderName] = useState('')
  const [newFileName, setNewFileName] = useState('')
  const [newFileFolderId, setNewFileFolderId] = useState(0)
  const [openFolders, setOpenFolders] = useState<string[]>([])
  const updateFolders = (folderId: string) => {
    if (!openFolders.includes(folderId)) {
      setOpenFolders([...openFolders, folderId])
    } else {
      setOpenFolders(openFolders.filter((id) => id !== folderId))
    }
  }
  const onOpenChange = (openKeys: string[]) => {
    console.log(openKeys)
  }
  return (
    <>
      <DrawerContainer>
        <Drawer
          title="My Notes"
          placement="left"
          closable={false}
          onClose={() => {
            setDrawerOpen(false)
          }}
          visible={drawerOpen}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <Menu
            mode="inline"
            theme="dark"
            openKeys={openFolders}
            onOpenChange={onOpenChange}
          >
            {folders.map((folder) => (
              <SubMenu
                highlight={folder.color}
                key={folder.id.toString()}
                onTitleClick={() => {
                  updateFolders(folder.id.toString())
                }}
                title={
                  <span>
                    <Flex justifyContent="space-between" alignItems="center">
                      {folder.name}
                      <FileIcon
                        size={15}
                        onClick={() => {
                          setOpenFolders(
                            openFolders.filter(
                              (id) => id !== folder.id.toString()
                            )
                          )
                          setNewFileFolderId(folder.id)
                        }}
                      />
                    </Flex>
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
                    <Flex alignItems="center" >
                      <Box width={11 / 12}>{note.name}</Box>
                      <Settings size={15} style={{marginRight: 3}} />
                      <Trash size={15} />
                    </Flex>
                  </MenuItem>
                ))}
                {newFileFolderId === folder.id ? (
                  <Flex justifyContent="center" alignItems="center" px={4}>
                    <Box justifyContent="center" alignItems="center" width={1}>
                      <LineInput
                        placeholder="New File"
                        value={newFileName}
                        onChange={(e) => {
                          setNewFileName(e.target.value)
                        }}
                        autoFocus={true}
                        onBlur={() => {
                          if (newFileName !== '') {
                            newNote(newFileName, folder.id)
                            setNewFileName('')
                          }
                          setNewFileFolderId(0)
                        }}
                        onKeyDown={(e) => {
                          console.log(e.key)
                          if (e.key === 'Enter' && newFileName !== '') {
                            newNote(newFileName, folder.id)
                            setNewFileName('')
                            setNewFileFolderId(0)
                          }
                        }}
                      />
                    </Box>
                  </Flex>
                ) : (
                    <></>
                  )}
              </SubMenu>
            ))}
            <Flex justifyContent="center" alignItems="center" px={3} pt={2}>
              <Box justifyContent="center" alignItems="center" width={11 / 12}>
                <LineInput
                  placeholder="New Folder"
                  value={newFolderName}
                  onChange={(e) => {
                    setNewFolderName(e.target.value)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && newFolderName !== '') {
                      newFolder(newFolderName)
                      setNewFolderName('')
                    }
                  }}
                />
              </Box>
              <IconWrap
                width={1 / 12}
                pl={2}
                onClick={() => {
                  if (newFolderName !== '') {
                    newFolder(newFolderName)
                    setNewFolderName('')
                  }
                }}
              >
                <FolderIcon size={15} />
              </IconWrap>
            </Flex>
          </Menu>
        </Drawer>
      </DrawerContainer>
    </>
  )
}
