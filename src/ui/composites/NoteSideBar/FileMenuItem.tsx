import { Badge, Popover } from 'antd'
import 'antd/dist/antd.css'
import { MenuItemProps } from 'antd/lib/menu/MenuItem'
import { observer } from 'mobx-react'
import { IBriefNoteDescriptionResponse } from 'network/proto/response/IBriefNoteDescriptionResponse'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import { NoteStore } from 'stores/NoteStore'
import styled from 'styled-components'
import { Download, Edit, IconWrap, Settings, Trash } from 'ui/base/Icons'
import { colors } from 'ui/base/theme'
import { MenuItem } from '../../base/Menu'

export interface IFileMenuItem {
  note: IBriefNoteDescriptionResponse
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
const StyledBadge = styled(Badge)`
  margin: 0 4px;
  .ant-badge-count {
    background-color: #fff;
    color: #999;
    box-shadow: 0 0 0 1px #d9d9d9 inset;
  }
`

const PopoverContent = (
  <Flex flexDirection="row">
    <IconWrap mx={1} height={25} bgcolor="blue">
      <Edit size={15} />
    </IconWrap>
    <IconWrap mx={1} height={25} bgcolor="purple">
      <Download size={15} />
    </IconWrap>
    <IconWrap mx={1} height={25} bgcolor="red">
      <Trash size={15} />
    </IconWrap>
  </Flex>
)

export const FileMenuItem = observer(
  ({ note, ...other }: IFileMenuItem & MenuItemProps) => {
    const selected = NoteStore.note && NoteStore.note.id === note.id
    const StyledMenuItem = selected ? SelectedFileMenuItem : RegularFileMenuItem
    const setNoteViewById = () => {
      note.id && NoteStore.fetchNote(note.id)
    }
    return (
      <Box onClick={setNoteViewById}>
        <StyledMenuItem key={note.id} {...other}>
          <Flex justifyContent="space-between" alignItems="center">
            <Box
              width={11 / 12}
              style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
              {note.title}
            </Box>
            {selected && <StyledBadge count={1} />}
            <Popover placement="right" content={PopoverContent} trigger="click">
              <Settings size={15} style={{ marginRight: 3 }} />
            </Popover>
          </Flex>
        </StyledMenuItem>
      </Box>
    )
  }
)
