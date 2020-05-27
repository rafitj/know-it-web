import { Badge, Popover } from 'antd'
import 'antd/dist/antd.css'
import { MenuItemProps } from 'antd/lib/menu/MenuItem'
import { observer } from 'mobx-react'
import { BriefNoteDescriptionResponse } from 'network/proto/protos'
import React from 'react'
import { Settings } from 'react-feather'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { colors } from 'ui/base/theme'
import { MenuItem } from '../../base/Menu'
import { FileMenuItemSettings } from './FileSettings'
import { NoteSpaceContext } from './NoteSpaceContext'

export interface IFileMenuItem {
  note: BriefNoteDescriptionResponse
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
const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`

@observer
class FileMenuItem extends React.Component<IFileMenuItem & MenuItemProps> {
  state = {
    context: this.context,
    newNoteTitle: this.props.note.title,
    editTitleMode: false,
  }

  editTitle = () => {
    this.setState({ editTitleMode: true })
  }

  setNewNoteTitle = (e: any) => {
    this.setState({ newNoteTitle: e.target.value })
  }

  render() {
    const { noteState } = this.state.context

    const selected = noteState.note && noteState.note.id === this.props.note.id
    const StyledMenuItem = selected ? SelectedFileMenuItem : RegularFileMenuItem

    const setNoteViewById = () => {
      if (this.props.note.id) {
        noteState.fetchNote(this.props.note.id)
      }
    }

    const updateNoteTitle = () => {
      noteState.updateNoteById({
        id: this.props.note.id,
        title: this.state.newNoteTitle,
      })
    }

    return (
      <Box onClick={setNoteViewById}>
        <StyledMenuItem key={this.props.note.id} {...this.props}>
          <Flex justifyContent="space-between" alignItems="center">
            <Box
              width={11 / 12}
              style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
              {this.state.editTitleMode ? (
                <StyledInput
                  autoFocus={true}
                  value={this.state.newNoteTitle}
                  onChange={this.setNewNoteTitle}
                  onBlur={updateNoteTitle}
                />
              ) : (
                this.props.note.title
              )}
            </Box>
            {selected && <StyledBadge count={1} />}
            <Popover
              placement="right"
              content={() => (
                <FileMenuItemSettings
                  note={this.props.note}
                  editTitle={this.editTitle}
                />
              )}
              trigger="hover"
            >
              <Settings size={15} style={{ marginRight: 3 }} />
            </Popover>
          </Flex>
        </StyledMenuItem>
      </Box>
    )
  }
}

FileMenuItem.contextType = NoteSpaceContext

export { FileMenuItem }
