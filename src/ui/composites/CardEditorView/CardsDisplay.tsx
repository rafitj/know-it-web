import { observer } from 'mobx-react'
import React from 'react'
import { Box } from 'reflexbox'
import { CardType } from '../../../stores/CardStore'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../NoteSideBar/NoteSpaceContext'
import { CardsDisplayItem } from './CardsDisplayItem'

@observer
class CardsDisplay extends React.Component {
  state = this.context as INoteSpaceState
  render() {
    return (
      <Box height={'80vh'} overflowY="scroll">
        {this.context.cardState.cards.map((card: CardType) => (
          <CardsDisplayItem key={card.id} card={card} />
        ))}
      </Box>
    )
  }
}

CardsDisplay.contextType = NoteSpaceContext
export { CardsDisplay }
