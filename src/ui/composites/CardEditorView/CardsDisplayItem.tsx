import { observer } from 'mobx-react'
import React from 'react'
import { Box } from 'reflexbox'
import styled from 'styled-components'
import { FlashcardResponse } from '../../../network/proto/protos'
import { colors } from '../../base/theme'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../NoteSideBar/NoteSpaceContext'

const CardItem = styled(Box)`
  border-radius: 10px;
  border: 2px solid black;
  padding: 0 20px;
  width: 30%;
  height: 200px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  transition: all 0.2s ease;
  box-shadow: ${`5px 5px ${colors.grey}`};
  &:hover {
    transform: translate(2px, 2px);
    cursor: pointer;
    box-shadow: none;
  }
  word-break: break-all;
  overflow-y: scroll;
`
@observer
class CardsDisplayItem extends React.Component<{ card: FlashcardResponse }> {
  state = this.context as INoteSpaceState
  enterEditCardMode = () => {
    const { setCardInFocusIndexById } = this.state.cardState
    setCardInFocusIndexById(this.props.card.id)
    this.state.noteViewState.setViewMode('Cards')
  }

  render() {
    return (
      <CardItem onClick={this.enterEditCardMode} m={3}>
        {this.props.card.question}
      </CardItem>
    )
  }
}

CardsDisplayItem.contextType = NoteSpaceContext
export { CardsDisplayItem }
