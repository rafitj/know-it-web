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

export interface INewFile {
  folderId: number
  newFile: (name: string, folderId: number) => void
  setAddFileMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const NewFile = ({ newFile, setAddFileMode, folderId }: INewFile) => {
  const [newFileName, setNewFileName] = useState('')
  return (
    <Flex justifyContent="center" alignItems="center" px={4} mt={2}>
      <Box justifyContent="center" alignItems="center" width={10 / 12}>
        <LineInput
          placeholder="New File"
          value={newFileName}
          autoFocus
          onChange={(e) => {
            setNewFileName(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && newFileName !== '') {
              newFile(newFileName, folderId)
              setNewFileName('')
              setAddFileMode(false)
            }
          }}
          onBlur={() => {
            if (newFileName !== '') {
              newFile(newFileName, folderId)
              setNewFileName('')
            }
            setAddFileMode(false)
          }}
        />
      </Box>
      <IconWrap
        width={1 / 12}
        pl={2}
        onClick={() => {
          if (newFileName !== '') {
            newFile(newFileName, folderId)
            setNewFileName('')
          }
          setAddFileMode(false)
        }}
      >
        <PlusIcon size={15} color="white" />
      </IconWrap>
      <IconWrap
        width={1 / 12}
        pl={2}
        onClick={() => {
          setAddFileMode(false)
        }}
      >
        <XSquare size={15} color="white" />
      </IconWrap>
    </Flex>
  )
}
