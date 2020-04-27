import React from 'react'
import styled from 'styled-components'
import { color, colors } from '../theme'

export interface IHighlighterProps {
  children?: React.ReactNode
  highlight: color
}

const Highlighter = styled.span<IHighlighterProps>`
  border-radius: 8px;
  padding: 4px 10px;
  background-color: ${(props) => colors[props.highlight]};
`

export default ({ children, highlight }: IHighlighterProps) => (
  <Highlighter highlight={highlight}>{children}</Highlighter>
)
