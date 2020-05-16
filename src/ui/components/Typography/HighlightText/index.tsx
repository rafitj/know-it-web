import React from 'react'
import styled from 'styled-components'
import { color, colors } from '../../../base/theme'
import { Text as AntDText, Typography } from '../../../base/Typography'

export interface HighlightTextProps {
  children?: React.ReactNode
  highlight?: color
}

const StyledHighlightText = styled(AntDText)<HighlightTextProps>`
  font-size: 1rem;
  border-radius: 5px;
  padding: 7px 9px;
  margin: 0 3px;
  transition: all 0.25s ease;
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.highlight ? colors[props.highlight] : 'grey'};
  }
`
export const HighlightText = ({
  children: text,
  highlight,
}: HighlightTextProps) => (
  <Typography>
    <StyledHighlightText highlight={highlight}>{text}</StyledHighlightText>
  </Typography>
)
