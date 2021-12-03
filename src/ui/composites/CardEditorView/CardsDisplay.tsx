import { Empty } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import { Box } from 'reflexbox'
import { FlashcardResponse } from '../../../network/proto/protos'
import { INoteSpaceState, NoteSpaceContext } from '../NoteSpaceContext'
import { CardDisplayButtons } from './CardDisplayButtons'
import { CardsDisplayItem } from './CardsDisplayItem'

@observer
class CardsDisplay extends React.Component {
  state = this.context as INoteSpaceState
  render() {
    return (
      <>
        <Box height={'80vh'} overflowY="scroll">
          {this.context.cardState.cards.length === 0 && (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={<span>No Cards Generated for Note</span>}
            />
          )}
          {this.context.cardState.cards.map((card: FlashcardResponse) => (
            <CardsDisplayItem key={card.id} card={card} />
          ))}
        </Box>
        <CardDisplayButtons />
      </>
    )
  }
}

CardsDisplay.contextType = NoteSpaceContext
export { CardsDisplay }
