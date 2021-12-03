import { observer } from 'mobx-react'
import React from 'react'
import { Layers, Search } from 'react-feather'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { HighlightedText } from 'ui/components/Typography/HighlightedText'
import { colors } from '../../base/theme'
import { INoteSpaceState, NoteSpaceContext } from '../NoteSpaceContext'

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
    this.state.cardState.setCardToEditIndx()
  }
  render() {
    const { cardToEditIndx, cards } = this.state.cardState
    const cardDetails = cardToEditIndx
      ? this.state.cardState.cards.find(
          (card) => card.id === cards[cardToEditIndx].id
        )
      : undefined
    return (
      <Flex px={4} width={1} flexDirection="column">
        <StyledEditCard my={2} width={1}>
          {cardDetails?.question}
        </StyledEditCard>
        <StyledEditCard my={2} width={1}>
          {cardDetails?.answer}
        </StyledEditCard>
        <Flex
          mt={2}
          px={4}
          width={1}
          flexDirection="row"
          justifyContent="center"
        >
          <div onClick={this.viewAllCards}>
            <HighlightedText
              bordered={true}
              textColor="white"
              highlight={'blue'}
              invert={true}
              withIcon={true}
            >
              <Layers size={15} style={{ marginRight: 4 }} />
              View Deck
            </HighlightedText>
          </div>
          <HighlightedText
            bordered={true}
            textColor="white"
            highlight={'purple'}
            invert={true}
            withIcon={true}
            disabled={true}
          >
            <Search size={15} style={{ marginRight: 4 }} />
            Find Note
          </HighlightedText>
        </Flex>
      </Flex>
    )
  }
}
CardsCreateMode.contextType = NoteSpaceContext
export { CardsCreateMode }
