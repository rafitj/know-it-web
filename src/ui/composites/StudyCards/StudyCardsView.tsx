import { Empty, Layout, Typography } from 'antd'
import { observer } from 'mobx-react'
import { FlashcardResponse } from 'network/proto/protos'
import React from 'react'
import { Eye, Frown, Meh, Smile } from 'react-feather'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { HighlightedText } from 'ui/components/Typography/HighlightedText'
import { colors } from '../../base/theme'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../../composites/NoteSpaceContext'

const { Content } = Layout

const shuffle = (array: FlashcardResponse[]) => {
  let currentIndex = array.length,
    randomIndex
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}

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
  background-color: white;
`
interface StateI {
  context: INoteSpaceState
  correct: number
  wrong: number
  skipped: number
  remaining: number
  studyCards: FlashcardResponse[]
  showAnswer: boolean
}

@observer
class StudyCardsView extends React.Component<{}, StateI> {
  state: Readonly<StateI> = {
    context: this.context as INoteSpaceState,
    correct: 0,
    wrong: 0,
    skipped: 0,
    remaining: this.context.cardState.cards.length,
    studyCards: this.context.cardState.cards,
    showAnswer: false,
  }

  componentDidMount() {
    this.state.context.noteViewState.collapseLeft(true)
    this.state.context.noteViewState.collapseRight(true)
    const newCards = shuffle([...this.state.context.cardState.cards])
    this.setState({ studyCards: newCards, remaining: newCards.length })
  }

  action(type: string) {
    let newStudyCards = [...this.state.studyCards]
    newStudyCards.slice(0)
    newStudyCards = shuffle(newStudyCards)
    const newCorrect =
      type === 'Correct' ? this.state.correct + 1 : this.state.correct
    const newWrong =
      type === 'Incorrect' ? this.state.wrong + 1 : this.state.wrong
    const newSkipped =
      type === 'Skip' ? this.state.skipped + 1 : this.state.skipped
    const newRemaining = this.state.remaining - 1
    this.setState({
      showAnswer: false,
      studyCards: newStudyCards,
      correct: newCorrect,
      wrong: newWrong,
      skipped: newSkipped,
      remaining: newRemaining,
    })
  }

  render() {
    const cardDetails = this.state.studyCards[0]
    return (
      <Content
        style={{
          backgroundColor: colors.black,
          margin: 20,
          borderRadius: 10,
        }}
      >
        <Flex
          pt={4}
          width={1}
          flexDirection="column"
          justifyContent="center"
          height="5%"
          textAlign="center"
        >
          <Typography.Paragraph style={{ color: 'white', opacity: 0.75 }}>
            Studying "{this.state.context.noteState.note!.title}"
          </Typography.Paragraph>
        </Flex>
        {this.state.studyCards.length === 0 && (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={'No Deck Selected'}
          />
        )}
        {this.state.remaining === 0 && (
          <Flex
            px={6}
            width={1}
            flexDirection="column"
            justifyContent="center"
            height="95%"
            textAlign="center"
          >
            <Typography.Title style={{ color: 'white' }}>
              Study Session Complete!
            </Typography.Title>
            <Flex
              mt={2}
              px={4}
              width={1}
              flexDirection="row"
              justifyContent="center"
            >
              <Flex
                flexDirection="row"
                alignItems="center"
                color={colors.green}
                mx={3}
              >
                <Smile size={15} style={{ marginRight: 4 }} />
                {this.state.correct} Correct
              </Flex>
              <Flex
                flexDirection="row"
                alignItems="center"
                color={colors.blue}
                mx={3}
              >
                <Meh size={15} style={{ marginRight: 4 }} />
                {this.state.skipped} Skipped
              </Flex>
              <Flex
                flexDirection="row"
                alignItems="center"
                color={colors.red}
                mx={3}
              >
                <Frown size={15} style={{ marginRight: 4 }} />
                {this.state.wrong} Incorrect
              </Flex>
            </Flex>
          </Flex>
        )}
        <Flex
          px={6}
          width={1}
          flexDirection="column"
          justifyContent="center"
          height="95%"
          textAlign="center"
        >
          <Typography.Paragraph
            style={{ color: 'white', opacity: 0.75, fontWeight: 'bold' }}
          >
            {this.state.showAnswer ? 'ANSWER' : 'QUESTION'}
          </Typography.Paragraph>
          <StyledEditCard my={2} width={1}>
            {this.state.showAnswer ? cardDetails.answer : cardDetails.question}
          </StyledEditCard>
          <Flex
            mt={2}
            px={4}
            width={1}
            flexDirection="row"
            justifyContent="center"
          >
            {this.state.showAnswer && (
              <>
                <div
                  onClick={() => {
                    this.action('Correct')
                  }}
                >
                  <HighlightedText
                    bordered={true}
                    textColor="white"
                    highlight={'green'}
                    invert={true}
                    withIcon={true}
                  >
                    <Smile size={15} style={{ marginRight: 4 }} />
                    Correct
                  </HighlightedText>
                </div>
                <div
                  onClick={() => {
                    this.action('Skip')
                  }}
                >
                  <HighlightedText
                    bordered={true}
                    textColor="white"
                    highlight={'white'}
                    invert={true}
                    withIcon={true}
                  >
                    <Meh size={15} style={{ marginRight: 4 }} />
                    Skip
                  </HighlightedText>
                </div>
                <div
                  onClick={() => {
                    this.action('Incorrect')
                  }}
                >
                  <HighlightedText
                    bordered={true}
                    textColor="white"
                    highlight={'red'}
                    invert={true}
                    withIcon={true}
                  >
                    <Frown size={15} style={{ marginRight: 4 }} />
                    Incorrect
                  </HighlightedText>
                </div>
              </>
            )}
            {!this.state.showAnswer && (
              <>
                <div
                  onClick={() => {
                    this.setState({ showAnswer: true })
                  }}
                >
                  <HighlightedText
                    bordered={true}
                    textColor="white"
                    highlight={'blue'}
                    invert={true}
                    withIcon={true}
                  >
                    <Eye size={15} style={{ marginRight: 4 }} />
                    Show Answer
                  </HighlightedText>
                </div>
              </>
            )}
          </Flex>
        </Flex>
      </Content>
    )
  }
}

StudyCardsView.contextType = NoteSpaceContext

export { StudyCardsView }
