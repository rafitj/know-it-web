import { Empty, PageHeader, Tag } from 'antd'
import React from 'react'
import { Flex } from 'reflexbox'
import styled from 'styled-components'
import { Card } from 'ui/components/Card'
import { Line } from 'ui/components/Line'
import { HighlightedText } from 'ui/components/Typography/HighlightedText'
import { Editor } from '../../composites/Editor'

const StyledPageHeader = styled(PageHeader)`
  background-color: transparent;
  .ant-page-header-heading-tags {
    right: 15px;
    position: absolute;
  }
  .ant-page-header-heading-tags .ant-tag {
    border-radius: 5px;
  }
`
interface NoteEditorProps {
  currNoteId: number
  currNoteFolderId: number
}
export const NoteEditor = ({
  currNoteFolderId,
  currNoteId,
}: NoteEditorProps) => {
  return (
    <Card textAlign="left" height="96vh">
      {currNoteId === -1 ? (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={<span>No Note Selected</span>}
        >
          <Flex justifyContent="center" alignItems="center">
            <HighlightedText highlight={'black'}>Select A Note</HighlightedText>
            <HighlightedText highlight={'black'}>
              Create New Note
            </HighlightedText>
          </Flex>
        </Empty>
      ) : (
        <>
          <Line />
          <StyledPageHeader
            tags={[
              <Tag color="blue">Midterm</Tag>,
              <Tag color="blue">Quiz 5</Tag>,
            ]}
            title={`Note ${currNoteId}`}
            subTitle={`Folder ${currNoteFolderId}`}
          />
          <Line />
          <Editor noteId={currNoteId} />
        </>
      )}
    </Card>
  )
}
