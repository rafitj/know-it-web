import { observer } from 'mobx-react'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { colors } from '../../base/theme'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../NoteSideBar/NoteSpaceContext'

const StyledEditCard = styled(Box)`
  border: 2px solid ${colors.black};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  height: 35vh;
  word-break: break-all;
  overflow-y: scroll;
`

@observer
class CardsCreateMode extends React.Component {
  state = this.context as INoteSpaceState
  viewAllCards = () => {
    this.state.cardState.setCardInFocusIndex()
  }
  render() {
    const { cardInFocusIndex, cards } = this.state.cardState
    const cardDetails = cardInFocusIndex
      ? this.state.cardState.cards.find(
          (card) => card.id === cards[cardInFocusIndex].id
        )
      : undefined
    return (
      <Flex px={4} width={1} flexDirection="column">
        <StyledEditCard my={3} width={1}>
          {cardDetails?.question}
        </StyledEditCard>
        <StyledEditCard my={3} width={1}>
          {cardDetails?.answer}
        </StyledEditCard>
        <Box onClick={this.viewAllCards}>View All</Box>
      </Flex>
    )
  }
}
CardsCreateMode.contextType = NoteSpaceContext
export { CardsCreateMode }
