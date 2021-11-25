import React from 'react'
import styled from 'styled-components'
import { color, colors } from '../../../base/theme'
import Typography, { Text as AntDText } from '../../../base/Typography'

export interface HighlightTextProps {
  children?: React.ReactNode
  highlight?: color
}

const HighlightText = styled(AntDText)<HighlightTextProps>`
  font-size: 1rem;
  border-radius: 5px;
  padding: 7px;
  margin: 0 3px;
  transition: all 0.25s ease;
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.highlight ? colors[props.highlight] : 'grey'}80;
  }
`

export default ({ children: text, highlight }: HighlightTextProps) => (
  <Typography>
    <HighlightText highlight={highlight}>{text}</HighlightText>
  </Typography>
)
