import 'antd/dist/antd.css'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import { Note } from 'types/files'
import { Settings, Trash } from 'ui/base/Icons'
import { MenuItem } from '../../base/Menu'
import styled from 'styled-components'
import { colors } from 'ui/base/theme'
import { MenuItemProps } from 'antd/lib/menu/MenuItem'

export interface IFileMenuItem {
  note: Note
  setCurrFile: (id: number) => void
  selected?: boolean
}

const FileMenuItemCommonStyles = `
  margin: 8px 0 0 30px !important;
  width: 80% !important;
  cursor: pointer;
  padding-left: 15px !important;
  height: 30px !important;
  line-height: 30px !important;
  transition: all 0.2s ease;
  background: ${colors.black} !important;
`
const RegularFileMenuItem = styled(MenuItem)`
  ${FileMenuItemCommonStyles}
`

const SelectedFileMenuItem = styled(MenuItem)`
  ${FileMenuItemCommonStyles}
  border-radius: 5px;
  background: ${colors.white} !important;
  color: ${colors.black} !important;
`
export const FileMenuItem = ({
  note,
  setCurrFile,
  selected,
  ...other
}: IFileMenuItem & MenuItemProps) => {
  const StyledMenuItem = selected ? SelectedFileMenuItem : RegularFileMenuItem

  return (
    <div
      onClick={() => {
        setCurrFile(note.id)
      }}
    >
      <StyledMenuItem key={note.id} {...other}>
        <Flex justifyContent="space-between" alignItems="center">
          <Box width={11 / 12}>{note.name}</Box>
          <Settings size={15} style={{ marginRight: 3 }} />
          <Trash size={15} />
        </Flex>
      </StyledMenuItem>
    </div>
  )
}
