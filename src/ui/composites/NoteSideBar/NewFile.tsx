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

export interface INewFile {
  folderId: number
  newFile: (name: string, folderId: number) => void
  setAddFileMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const NewFile = ({ newFile, setAddFileMode, folderId }: INewFile) => {
  const [newFileName, setNewFileName] = useState('')
  const AddFile = () => {
    if (newFileName !== '') {
      newFile(newFileName, folderId)
      setNewFileName('')
    }
    setAddFileMode(false)
  }
  return (
    <Flex justifyContent="center" alignItems="center" px={4} mt={2}>
      <Box justifyContent="center" alignItems="center" width={10 / 12}>
        <LineInput
          placeholder="New File"
          value={newFileName}
          autoFocus={true}
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
          onBlur={AddFile}
        />
      </Box>
      <IconWrap width={1 / 12} pl={2} onClick={AddFile}>
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
