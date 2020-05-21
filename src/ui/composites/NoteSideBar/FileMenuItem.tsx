import 'antd/dist/antd.css'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import { Note } from 'types/files'
import { Settings, Trash } from 'ui/base/Icons'
import { MenuItem } from '../../base/Menu'

export interface IFileMenuItem {
  note: Note
  setCurrFile: (id: number) => void
}

export const FileMenuItem = ({ note, setCurrFile }: IFileMenuItem) => {
  return (
    <MenuItem
      key={note.id}
      onClick={() => {
        setCurrFile(note.id)
      }}
    >
      <Flex alignItems="center">
        <Box width={11 / 12}>{note.name}</Box>
        <Settings size={15} style={{ marginRight: 3 }} />
        <Trash size={15} />
      </Flex>
    </MenuItem>
  )
}
