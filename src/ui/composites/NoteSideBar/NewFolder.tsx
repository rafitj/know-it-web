import { Input } from 'antd'
import 'antd/dist/antd.css'
import React, { useState } from 'react'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { IconWrap, Plus as PlusIcon } from 'ui/base/Icons'

const LineInput = styled(Input)`
  &.ant-input {
    background-color: transparent;
    border-radius: 5px;
    color: white;
  }
`

export interface INewFolder {
  newFolder: (name: string) => void
}

export const NewFolder = ({ newFolder }: INewFolder) => {
  const [newFolderName, setNewFolderName] = useState('')
  return (
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
        <PlusIcon size={15} />
      </IconWrap>
    </Flex>
  )
}
