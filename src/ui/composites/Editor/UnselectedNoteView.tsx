import { Empty } from 'antd'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import { HighlightedText } from 'ui/components/Typography/HighlightedText'

interface UnselectedNoteViewProps {
  newFolderAndFile: (folderName: string, fileName: string) => void
}

export const UnselectedNoteView = ({
  newFolderAndFile,
}: UnselectedNoteViewProps) => {
  const useTemplate = () => {
    newFolderAndFile('Template File', 'Template Folder')
  }
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={<span>No Note Selected</span>}
    >
      <Flex justifyContent="center" alignItems="center">
        <Box>
          <HighlightedText
            bordered={true}
            textColor="black"
            highlight={'green'}
          >
            Create Note
          </HighlightedText>
        </Box>
        <Box mx={2}>
          <HighlightedText bordered={true} textColor="black" highlight={'blue'}>
            Select Note
          </HighlightedText>
        </Box>
        <Box onClick={useTemplate}>
          <HighlightedText bordered={true} textColor="black" highlight={'red'}>
            Use Template
          </HighlightedText>
        </Box>
      </Flex>
    </Empty>
  )
}
