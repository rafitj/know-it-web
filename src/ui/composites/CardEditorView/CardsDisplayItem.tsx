import React from 'react'
import { Box } from 'reflexbox'
import styled from 'styled-components'
import { CardType } from '../../../stores/CardStore'
import { colors } from '../../base/theme'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../NoteSideBar/NoteSpaceContext'

const CardItem = styled(Box)`
  border-radius: 10px;
  border: 2px solid black;
  padding: 30px;
  width: 30%;
  height: 200px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  transition: all 0.2s ease;
  box-shadow: ${`5px 5px ${colors.grey}`};
  &:hover {
    transform: translate(2px, 2px);
    cursor: pointer;
    box-shadow: none;
  }
`
class CardsDisplayItem extends React.Component<{ card: CardType }> {
  state = this.context as INoteSpaceState
  render() {
    return <CardItem m={3}>{this.props.card.q}</CardItem>
  }
}

CardsDisplayItem.contextType = NoteSpaceContext
export { CardsDisplayItem }
