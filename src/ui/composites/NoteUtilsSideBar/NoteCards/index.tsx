import { Empty, Tooltip } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import { CheckSquare, Maximize } from 'react-feather'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { HighlightedText } from 'ui/components/Typography/HighlightedText'
import { colors } from '../../../base/theme'
import { INoteSpaceState, NoteSpaceContext } from '../../NoteSpaceContext'
import { CardModal } from './CardModal'

interface NoteCardsProps {
  selected: boolean
}

const SmallFlashcard = styled(Box)`
  border: 2px solid ${colors.black};
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  height: 125px;
  min-height: 125px;
  display: flex;
  transition: all 0.2s ease;
  opacity: 0.5;
  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px ${colors.grey};
    opacity: 1;
  }
  font-weight: bold;
  overflow-y: hidden;
  word-break: break-all;
`

const StyledCardFlex = styled(Flex)`
  flex-direction: column;
  height: 72vh;
  overflow-y: scroll;
  border-bottom: 2px solid ${colors.black};
  border-top: 2px solid ${colors.black};
`
@observer
class NoteCards extends React.Component<NoteCardsProps> {
  state = {
    visibleModal: null,
    context: this.context as INoteSpaceState,
  }
  openModal = (id: string) => {
    this.setState({ visibleModal: id })
  }
  closeModal = () => {
    this.setState({ visibleModal: null })
  }
  generateFlashcards = () => {
    return this.state.context.cardState.generateCards(
      this.state.context.noteState.note!.id
    )
  }
  enterCardViewMode = () => {
    this.state.context.noteViewState.setViewMode('Cards')
  }
  formatQuestionText = (question: string) => {
    if (question.length > 128) {
      return question.substr(0, 128) + '...'
    }
    return question
  }
  render() {
    const { cardState } = this.state.context
    return (
      <>
        {this.props.selected && cardState.cards.length === 0 && (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={<span>No Flashcards</span>}
          >
            <Box onClick={this.generateFlashcards}>
              <HighlightedText highlight={'black'}>
                Generate Flashcards
              </HighlightedText>
            </Box>
          </Empty>
        )}
        {this.props.selected && cardState.cards.length > 0 && (
          <Flex flexDirection="column" alignItems="center">
            <Flex mt={3} justifyContent="center" alignItems="center">
              <Tooltip title="View Entire Deck">
                <Maximize
                  size={15}
                  style={{ cursor: 'pointer' }}
                  onClick={this.enterCardViewMode}
                />
              </Tooltip>
              <Box ml={2} fontSize={15}>
                Flashcard Quick-View
              </Box>
            </Flex>
            <StyledCardFlex my={3} p={3} width={1}>
              {cardState.cards.map((card) => (
                <>
                  <SmallFlashcard
                    mb={3}
                    onClick={() => {
                      this.openModal(card.id)
                    }}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <span>{this.formatQuestionText(card.question)}</span>
                  </SmallFlashcard>
                  <CardModal
                    closeModal={this.closeModal}
                    isVisible={this.state.visibleModal === card.id}
                    card={card}
                  />
                </>
              ))}
            </StyledCardFlex>
            <Flex justifyContent="center">
              <HighlightedText
                bordered={true}
                textColor="white"
                highlight={'green'}
                invert={true}
                withIcon={true}
              >
                <CheckSquare size={15} style={{ marginRight: 4 }} />
                Study Now
              </HighlightedText>
            </Flex>
          </Flex>
        )}
      </>
    )
  }
}

NoteCards.contextType = NoteSpaceContext

export { NoteCards }
