import 'antd/dist/antd.css'
import { observer } from 'mobx-react'
import React from 'react'
import styled from 'styled-components'
import { Menu, MenuItem as AntDMenuItem } from '../../base/Menu'
import { colors } from '../../base/theme'
import { INoteSpaceState, NoteSpaceContext } from '../NoteSpaceContext'
import { ReactComponent as CardIcon } from 'ui/assets/icons/card.svg'
import { ReactComponent as NoteIcon } from 'ui/assets/icons/note.svg'

interface IViewMenuItemBox {
  active: boolean
}
const StyledNoteIcon = styled(NoteIcon)<IViewMenuItemBox>`
  transition: all 0.25s ease !important;
  height: 16px;
  stroke: white !important;
  stroke-width: ${(props) => (props.active ? '0' : '20px')} !important;
  fill: ${(props) => (props.active ? 'white' : 'transparent')} !important;
  width: 16px;
  margin-right: 5px;
`

const StyledCardIcon = styled(CardIcon)<IViewMenuItemBox>`
  transition: all 0.25s ease !important;
  height: 16px;
  stroke: white !important;
  stroke-width: ${(props) => (props.active ? '0' : '20px')} !important;
  fill: ${(props) => (props.active ? 'white' : 'transparent')} !important;
  width: 16px;
  margin-right: 5px;
`

const StyledViewMenuItem = styled(AntDMenuItem)`
  &.ant-menu-item-selected {
    background-color: ${colors.black} !important;
  }
  display: inline-flex;
  align-items: center;
  margin: 0 !important;
`

@observer
class ViewMenu extends React.Component {
  state = this.context as INoteSpaceState
  notesViewMode = () => {
    this.state.noteViewState.setViewMode('Notes')
  }
  cardsViewMode = () => {
    this.state.noteViewState.setViewMode('Cards')
  }
  render() {
    const { viewMode, leftCollapsed } = this.state.noteViewState
    return (
      <Menu mode="inline" theme="dark" style={{ marginTop: 5 }}>
        <StyledViewMenuItem
          onClick={this.notesViewMode}
          icon={<StyledNoteIcon active={viewMode === 'Notes'} />}
        >
          {!leftCollapsed && <>Notes</>}
        </StyledViewMenuItem>
        <StyledViewMenuItem
          onClick={this.cardsViewMode}
          icon={<StyledCardIcon active={viewMode === 'Cards'} />}
        >
          {!leftCollapsed && <>Cards</>}
        </StyledViewMenuItem>
      </Menu>
    )
  }
}

ViewMenu.contextType = NoteSpaceContext

export { ViewMenu }
