import { observer } from 'mobx-react'
import React from 'react'
import { CheckSquare, PlusSquare, TrendingUp } from 'react-feather'
import { Flex } from 'reflexbox'
import { HighlightedText } from '../../components/Typography/HighlightedText'
import { INoteSpaceState, NoteSpaceContext } from '../NoteSpaceContext'

@observer
class CardDisplayButtons extends React.Component {
  state = this.context as INoteSpaceState

  render() {
    return (
      <Flex justifyContent="center">
        <HighlightedText
          bordered={true}
          textColor="white"
          highlight={'green'}
          invert={true}
          withIcon={true}
          disabled={true}
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
          disabled={true}
        >
          <PlusSquare size={15} style={{ marginRight: 4 }} />
          Create New Card
        </HighlightedText>
        <div
          onClick={() => {
            this.state.noteViewState.setViewMode('StudyCards')
          }}
        >
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
        </div>
      </Flex>
    )
  }
}

CardDisplayButtons.contextType = NoteSpaceContext
export { CardDisplayButtons }
