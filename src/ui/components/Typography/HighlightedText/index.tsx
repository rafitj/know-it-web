import React from 'react'
import styled from 'styled-components'
import { color, colors } from '../../../base/theme'
import { Text as AntDText, Typography } from '../../../base/Typography'

export interface HighlightedTextProps {
  children?: React.ReactNode
  highlight?: color
}

const StyledHighlightedText = styled(AntDText)<HighlightedTextProps>`
  font-size: 1rem;
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 7px 9px;
  margin: 0 4px;
  transition: all 0.25s ease;
  &:hover {
    cursor: pointer;
    background-color: white;
    border-color: ${(props) =>
      props.highlight ? colors[props.highlight] : 'grey'};
    color: ${colors.black};
  }
  background-color: ${(props) =>
    props.highlight ? colors[props.highlight] : 'grey'};
  color: white;
`

export const HighlightedText = ({
  children: text,
  highlight,
}: HighlightedTextProps) => (
  <Typography>
    <StyledHighlightedText highlight={highlight}>{text}</StyledHighlightedText>
  </Typography>
)
