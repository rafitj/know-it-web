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
    newFolderAndFile('Template Folder', 'Template File')
  }
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={<span>Select a Note</span>}
    >
      <Flex justifyContent="center" alignItems="center">
        <Box onClick={useTemplate}>
          <HighlightedText bordered={true} textColor="black" highlight={'red'}>
            Use Template
          </HighlightedText>
        </Box>
      </Flex>
    </Empty>
  )
}
