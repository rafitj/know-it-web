import { observer } from 'mobx-react'
import React from 'react'
import { Flex } from 'reflexbox'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../NoteSideBar/NoteSpaceContext'
import { CardsCreateMode } from './CardsCreateMode'
import { CardsViewMode } from './CardsViewMode'

@observer
class CardEditorView extends React.Component {
  state = this.context as INoteSpaceState
  render() {
    const { note } = this.state.noteState
    return (
      <Flex flexDirection="column">
        {note ? (
          <>
            {this.state.cardState.cardMode === 'view' ? (
              <CardsViewMode />
            ) : (
              <CardsCreateMode />
            )}
          </>
        ) : (
          <div>Empty</div>
        )}
      </Flex>
    )
  }
}
CardEditorView.contextType = NoteSpaceContext
export { CardEditorView }
