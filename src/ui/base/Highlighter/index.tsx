import React from 'react'
import styled from 'styled-components'
import { color, colors } from '../theme'

export interface IHighlighterProps {
  children?: React.ReactNode
  color: color
}

const Highlighter = styled.span<IHighlighterProps>`
  border-radius: 8px;
  padding: 4px 10px;
  background-color: ${(props) => colors[props.color]};
`

export default ({ children, color }: IHighlighterProps) => (
  <Highlighter color={color}>{children}</Highlighter>
)
