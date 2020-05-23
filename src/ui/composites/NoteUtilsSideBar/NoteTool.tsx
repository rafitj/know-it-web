import React from 'react'
import { Flex } from 'reflexbox'
import { NoteTools } from 'types/note'
import { NoteCards } from './NoteCards'
import { NoteFilter } from './NoteFilter'
import { NoteSearch } from './NoteSearch'
export interface NoteToolProps {
  selectedTool: NoteTools
}

export const NoteTool = ({ selectedTool }: NoteToolProps) => {
  return (
    <Flex p={4} justifyContent="center">
      <NoteCards selected={selectedTool === 'cards'} />
      <NoteSearch selected={selectedTool === 'search'} />
      <NoteFilter selected={selectedTool === 'filter'} />
    </Flex>
  )
}
