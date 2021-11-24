import React from 'react'
import styled from 'styled-components'
import { color, colors } from '../theme'

export interface IHighlighterProps {
  children?: React.ReactNode
  highlight: color
}

const Highlighter = styled.span<IHighlighterProps>`
  border-radius: 5px;
  padding: 4px 8px;
  background-color: ${(props) => colors[props.highlight]}80;
`

export default ({ children, highlight }: IHighlighterProps) => (
  <Highlighter highlight={highlight}>{children}</Highlighter>
)
