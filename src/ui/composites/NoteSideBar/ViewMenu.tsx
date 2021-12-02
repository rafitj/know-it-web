import 'antd/dist/antd.css'
import { MenuItemProps } from 'antd/lib/menu/MenuItem'
import { observer } from 'mobx-react'
import React from 'react'
import styled from 'styled-components'
import { Menu, MenuItem as AntDMenuItem } from '../../base/Menu'
import { colors } from '../../base/theme'
import { INoteSpaceState, NoteSpaceContext } from './NoteSpaceContext'

interface IViewMenuItem extends MenuItemProps {
  active?: boolean
}
const StyledViewMenuItem = styled(AntDMenuItem)<IViewMenuItem>`
  &.ant-menu-item-selected {
    background-color: ${colors.black} !important;
  }
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
    const viewMode = this.state.noteViewState.viewMode
    return (
      <Menu mode="inline" theme="dark" style={{ marginTop: 5 }}>
        <StyledViewMenuItem
          active={viewMode === 'Notes'}
          onClick={this.notesViewMode}
        >
          Notes
        </StyledViewMenuItem>
        <StyledViewMenuItem
          active={viewMode === 'Cards'}
          onClick={this.cardsViewMode}
        >
          Cards
        </StyledViewMenuItem>
      </Menu>
    )
  }
}

ViewMenu.contextType = NoteSpaceContext

export { ViewMenu }
