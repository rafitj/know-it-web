import { Input } from 'antd'
import 'antd/dist/antd.css'
import React, { useState } from 'react'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { IconWrap, PlusCircle as PlusIcon, XSquare } from 'ui/base/Icons'

const LineInput = styled(Input)`
  &.ant-input {
    background-color: transparent;
    border-radius: 5px;
    color: white;
  }
`

export interface INewFolder {
  newFolder: (name: string) => void
  setAddFolderMode: React.Dispatch<React.SetStateAction<boolean>>
  setCurrFolder: React.Dispatch<React.SetStateAction<number>>
}

export const NewFolder = ({ newFolder, setAddFolderMode }: INewFolder) => {
  const [newFolderName, setNewFolderName] = useState('')
  return (
    <Flex justifyContent="center" alignItems="center" px={3}>
      <Box justifyContent="center" alignItems="center" width={10 / 12}>
        <LineInput
          autoFocus
          placeholder="New Folder"
          value={newFolderName}
          onChange={(e) => {
            setNewFolderName(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && newFolderName !== '') {
              newFolder(newFolderName)
              setNewFolderName('')
              setAddFolderMode(false)
            }
          }}
          onBlur={() => {
            if (newFolderName !== '') {
              newFolder(newFolderName)
              setNewFolderName('')
            }
            setAddFolderMode(false)
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
          setAddFolderMode(false)
        }}
      >
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
