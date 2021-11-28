import { Empty } from 'antd'
import React from 'react'
import { HighlightedText } from 'ui/components/Typography/HighlightedText'

interface NoteCardsProps {
  selected: boolean
}

export class NoteCards extends React.Component<NoteCardsProps> {
  render() {
    return (
      <>
        {this.props.selected && (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={<span>No Flashcards</span>}
          >
            <HighlightedText highlight={'black'}>
              Generate Flashcards
            </HighlightedText>
          </Empty>
        )}
      </>
    )
  }
}
