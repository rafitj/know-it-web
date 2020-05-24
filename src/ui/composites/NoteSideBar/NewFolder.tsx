import { Input } from 'antd'
import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { Box, Flex } from 'reflexbox'
import { FolderStore } from 'stores/FolderStore'
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

export const NewFolder = observer(() => {
  const [newFolderName, setNewFolderName] = useState('')
  const addFolder = async (e?: any) => {
    if ((!e || e.key === 'Enter') && newFolderName !== '') {
      const folder = await FolderStore.createFolder({ title: newFolderName })
      setNewFolderName('')
      NoteViewStore.setSelectedFolderId(folder.id)
    }
    NoteViewStore.setAddFolderMode(false)
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
            addFolder(e)
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
          NoteViewStore.setAddFolderMode(false)
        }}
      >
        <XSquare size={15} />
      </IconWrap>
    </Flex>
  )
})
