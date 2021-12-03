import { Modal, Tooltip } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import { ArrowLeft, ArrowRight, Eye } from 'react-feather'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { FlashcardResponse } from '../../../../network/proto/protos'
import { IconWrap } from '../../../base/Icons'
import { colors } from '../../../base/theme'
import { INoteSpaceState, NoteSpaceContext } from '../../NoteSpaceContext'
const FlashcardModal = styled(Modal)`
  .ant-modal-content {
    border: 4px solid ${colors.black};
    border-radius: 8px;
    padding: 10px;
    height: 500px;
    width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  height: 500px !important;
  width: 800px !important;
`
const FlashcardModalContent = styled(Flex)`
  line-height: 1.1;
  .header {
    font-size: 25px;
    opacity: 0.6;
  }
`
const FlashCardQA = styled(Box)`
  word-break: break-all;
  font-size: 20px;
  text-align: center;
`
const StyledIconWrap = styled(IconWrap)<{ disabled: boolean }>`
  ${(props) => props.disabled && 'cursor: not-allowed'};
  ${(props) => props.disabled && 'opacity: 0.5'};
`
interface ICardModal {
  closeModal: () => void
  isVisible: boolean
  card: FlashcardResponse
}

@observer
class CardModal extends React.Component<ICardModal> {
  state = this.context as INoteSpaceState
  enterEditCardMode = () => {
    this.props.closeModal()
    this.state.cardState.setCardToEditIndx(
      this.state.cardState.cardInFocusIndex
    )
    this.state.noteViewState.setViewMode('Cards')
  }

  render() {
    const {
      cards,
      cardInFocusIndex,
      setCardInFocusIndex,
    } = this.state.cardState
    const goPrevCard = () => {
      if (cardInFocusIndex !== 0) {
        setCardInFocusIndex((cardInFocusIndex || 0) - 1)
      }
    }
    const goNextCard = () => {
      if (cardInFocusIndex !== cards.length - 1) {
        setCardInFocusIndex((cardInFocusIndex || 0) + 1)
      }
    }
    return (
      <FlashcardModal
        centered={true}
        onCancel={this.props.closeModal}
        footer={null}
        visible={this.props.isVisible}
      >
        <Box style={{ position: 'absolute', top: 30, left: 30 }}>
          <span style={{ opacity: 0.7 }}>Folder / </span>
          File
        </Box>
        <FlashcardModalContent
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
        >
          <Box className="header" mb={3}>
            Question
          </Box>
          <FlashCardQA>{this.props.card.question}</FlashCardQA>
          <Box mt={4} className="header" mb={2}>
            Answer
          </Box>
          <FlashCardQA>{this.props.card.answer}</FlashCardQA>
        </FlashcardModalContent>
        <Box
          textAlign="center"
          style={{
            position: 'absolute',
            bottom: 30,
            left: 0,
            right: 0,
          }}
        >
          <Tooltip title="Previous Card" placement="left">
            <StyledIconWrap
              disabled={cardInFocusIndex === 0}
              mx={1}
              onClick={goPrevCard}
            >
              <ArrowLeft />
            </StyledIconWrap>
          </Tooltip>
          <Tooltip title="View/Edit Card">
            <IconWrap mx={2} onClick={this.enterEditCardMode}>
              <Eye />
            </IconWrap>
          </Tooltip>
          <Tooltip title="Next Card" placement="right">
            <StyledIconWrap
              mx={1}
              onClick={goNextCard}
              disabled={cardInFocusIndex === cards.length - 1}
            >
              <ArrowRight />
            </StyledIconWrap>
          </Tooltip>
        </Box>
      </FlashcardModal>
    )
  }
}
CardModal.contextType = NoteSpaceContext
export { CardModal }
