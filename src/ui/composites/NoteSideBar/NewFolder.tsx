import { Input } from 'antd'
import 'antd/dist/antd.css'
import React, { useState } from 'react'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { IconWrap, PlusCircle as PlusIcon, XSquare } from 'ui/base/Icons'
import { colors } from 'ui/base/theme'

const LineInput = styled(Input)`
  &.ant-input {
    background-color: transparent;
    border-radius: 5px;
    color: white;
    border-color: ${colors.green};
  }
`

export interface INewFolder {
  newFolder: (name: string) => number
  setAddFolderMode: React.Dispatch<React.SetStateAction<boolean>>
  setCurrFolder: React.Dispatch<React.SetStateAction<number>>
}

export const NewFolder = ({
  newFolder,
  setAddFolderMode,
  setCurrFolder,
}: INewFolder) => {
  const [newFolderName, setNewFolderName] = useState('')
  const addFolder = () => {
    if (newFolderName !== '') {
      const folderId = newFolder(newFolderName)
      setNewFolderName('')
      setCurrFolder(folderId)
    }
    setAddFolderMode(false)
  }
  return (
    <Flex justifyContent="center" alignItems="center" px={3}>
      <Box justifyContent="center" alignItems="center" width={10 / 12}>
        <LineInput
          autoFocus={true}
          placeholder="New Folder"
          value={newFolderName}
          onChange={(e) => {
            setNewFolderName(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && newFolderName !== '') {
              const folderId = newFolder(newFolderName)
              setNewFolderName('')
              setCurrFolder(folderId)
              setAddFolderMode(false)
            }
          }}
          onBlur={addFolder}
        />
      </Box>
      <IconWrap width={1 / 12} pl={2} onClick={addFolder}>
        <PlusIcon size={15} />
      </IconWrap>
      <IconWrap
        width={1 / 12}
        pl={2}
        onClick={() => {
          setAddFolderMode(false)
        }}
      >
        <XSquare size={15} />
      </IconWrap>
    </Flex>
  )
}
