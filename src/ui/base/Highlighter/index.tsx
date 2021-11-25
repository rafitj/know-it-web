import React from 'react'
import styled from 'styled-components'
import { color, colors } from '../theme'

export interface IHighlighterProps {
  children?: React.ReactNode
  highlight: color
}

const HighlighterSpan = styled.span<IHighlighterProps>`
  border-radius: 5px;
  padding: 5px;
  margin: 0 4px;
  background-color: ${(props) => colors[props.highlight]};
  white-space: nowrap;
`

export const Highlighter = ({ children, highlight }: IHighlighterProps) => (
  <HighlighterSpan highlight={highlight}>{children}</HighlighterSpan>
)
