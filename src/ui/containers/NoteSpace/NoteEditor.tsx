import { Layout } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import { Box } from 'reflexbox'
import styled from 'styled-components'
import { Card } from 'ui/components/Card'
import { NoteView } from 'ui/composites/Editor/NoteView'
import { UnselectedNoteView } from 'ui/composites/Editor/UnselectedNoteView'
import { colors } from '../../base/theme'
import {
  INoteSpaceState,
  NoteSpaceContext,
} from '../../composites/NoteSpaceContext'

const { Content } = Layout
const StyledCard = styled(Card)`
  min-height: 96vh;
  .ant-card-body {
    display: flex;
    flex-flow: column;
    min-height: 96vh;
  }
`
const TouchFill = styled(Box)`
  display: flex;
  flex: 1 1 auto;
  flex-flow: column;
  width: 100%;
  cursor: text;
`
@observer
class NoteEditor extends React.Component {
  state = this.context as INoteSpaceState

  render() {
    const { note } = this.state.noteState
    const { editorInstance } = this.state.noteViewState
    const focusEditor = async () => {
      const data = await editorInstance?.save()
      const lastBlockType = data?.blocks[data?.blocks.length - 1].type
      if (lastBlockType !== 'qa' && lastBlockType !== 'list') {
        editorInstance?.focus(true)
      }
      editorInstance?.blocks.insert(
        undefined,
        undefined,
        undefined,
        editorInstance?.blocks.getBlocksCount(),
        true
      )
      editorInstance?.focus(true)
    }
    return (
      <Content
        style={{
          backgroundColor: colors.white,
          margin: '20px',
        }}
      >
        <StyledCard noShadow={true} textAlign="left">
          <Box flex={'0 1 auto'}>
            {note ? <NoteView /> : <UnselectedNoteView />}
          </Box>
          {note && <TouchFill onClick={focusEditor} />}
        </StyledCard>
      </Content>
    )
  }
}

NoteEditor.contextType = NoteSpaceContext

export { NoteEditor }
