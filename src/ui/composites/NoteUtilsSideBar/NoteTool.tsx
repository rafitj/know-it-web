import React from 'react'
import { NoteTools } from 'types/note'
import { Flex } from 'reflexbox'
import { NoteSearch } from './NoteSearch'
import { NoteCards } from './NoteCards'
import { NoteFilter } from './NoteFilter'
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
