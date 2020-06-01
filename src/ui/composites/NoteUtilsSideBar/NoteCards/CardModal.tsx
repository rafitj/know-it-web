import { Modal, Tooltip } from 'antd'
import React from 'react'
import { ArrowLeft, ArrowRight, Eye } from 'react-feather'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { IconWrap } from '../../../base/Icons'
import { colors } from '../../../base/theme'
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
  font-size: 350%;
  line-height: 1.1;
  .header {
    font-size: 25px;
    opacity: 0.6;
  }
`
interface ICardModal {
  closeModal: () => void
  isVisible: boolean
  question: string
  answer: string
}

export class CardModal extends React.Component<ICardModal> {
  render() {
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
          <Box>{this.props.question}</Box>
          <Box mt={4} className="header" mb={2}>
            Answer
          </Box>
          <Box>{this.props.answer}</Box>
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
            <IconWrap mx={1}>
              <ArrowLeft />
            </IconWrap>
          </Tooltip>
          <Tooltip title="View/Edit Card">
            <IconWrap mx={2}>
              <Eye />
            </IconWrap>
          </Tooltip>
          <Tooltip title="Next Card" placement="right">
            <IconWrap mx={1}>
              <ArrowRight />
            </IconWrap>
          </Tooltip>
        </Box>
      </FlashcardModal>
    )
  }
}
