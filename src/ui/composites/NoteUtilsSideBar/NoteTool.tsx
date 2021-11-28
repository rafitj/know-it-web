import React from 'react'
import { Flex } from 'reflexbox'
import { NoteTools } from 'types/note'
import { NoteCards } from './NoteCards'
import { NoteFilter } from './NoteFilter'
import { NoteSearch } from './NoteSearch'

export interface NoteToolProps {
  selectedTool: NoteTools
}

export class NoteTool extends React.Component<NoteToolProps> {
  render() {
    return (
      <Flex p={4} justifyContent="center">
        <NoteCards selected={this.props.selectedTool === 'cards'} />
        <NoteSearch selected={this.props.selectedTool === 'search'} />
        <NoteFilter selected={this.props.selectedTool === 'filter'} />
      </Flex>
    )
  }
}
