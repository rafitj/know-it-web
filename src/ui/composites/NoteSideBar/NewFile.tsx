import { Input } from 'antd'
import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { Box, Flex } from 'reflexbox'
import { NoteStore } from 'stores/NoteStore'
import { NoteViewStore } from 'stores/NoteViewStore'
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

export const NewFile = observer(() => {
  const [newFileName, setNewFileName] = useState('')
  const folderId = NoteViewStore.selectedFolderId
  const addFile = async (e?: any) => {
    if ((!e || e.key === 'Enter') && newFileName !== '') {
      await NoteStore.createNote({ title: newFileName, folderId })
      setNewFileName('')
      NoteViewStore.setAddFileMode(false)
    }
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
            addFile(e)
          }}
          onBlur={addFile}
        />
      </Box>
      <IconWrap width={1 / 12} pl={2} onClick={addFile}>
        <PlusIcon size={15} color="white" />
      </IconWrap>
      <IconWrap
        width={1 / 12}
        pl={2}
        onClick={() => {
          NoteViewStore.setAddFileMode(false)
        }}
      >
        <XSquare size={15} color="white" />
      </IconWrap>
    </Flex>
  )
})
