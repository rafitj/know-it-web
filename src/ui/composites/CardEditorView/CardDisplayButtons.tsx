import React from 'react'
import { CheckSquare, PlusSquare, TrendingUp } from 'react-feather'
import { Flex } from 'reflexbox'
import { HighlightedText } from '../../components/Typography/HighlightedText'

export class CardDisplayButtons extends React.Component {
  render() {
    return (
      <Flex justifyContent="center">
        <HighlightedText
          bordered={true}
          textColor="white"
          highlight={'green'}
          invert={true}
          withIcon={true}
        >
          <TrendingUp size={15} style={{ marginRight: 4 }} />
          View Recent Results
        </HighlightedText>
        <HighlightedText
          bordered={true}
          textColor="white"
          highlight={'green'}
          invert={true}
          withIcon={true}
        >
          <PlusSquare size={15} style={{ marginRight: 4 }} />
          Create New Card
        </HighlightedText>
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
    )
  }
}
