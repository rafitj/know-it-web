import React from 'react'
import styled from 'styled-components'
import { color, colors } from '../../../base/theme'
import { Text as AntDText, Typography } from '../../../base/Typography'

export interface HighlightedTextProps {
  children?: React.ReactNode
  highlight?: color
  textColor?: color
  bordered?: boolean
}

const StyledHighlightedText = styled(AntDText)<HighlightedTextProps>`
  font-size: 1rem;
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 7px 9px;
  margin: 0 4px;
  transition: all 0.25s ease;
  border: ${(props) => (props.bordered ? `2px solid ${colors.black}` : 'none')};
  color: ${(props) =>
    props.textColor ? colors[props.textColor] : colors.white};
  &:hover {
    cursor: pointer;
    background-color: white;
    border-color: ${(props) =>
      props.highlight && !props.bordered ? colors[props.highlight] : ''};
    color: ${colors.black};
    background-color: ${(props) =>
      props.highlight && props.bordered ? colors[props.highlight] : ''};
  }

  background-color: ${(props) =>
    props.highlight && !props.bordered ? colors[props.highlight] : 'white'};
`

export const HighlightedText = ({
  children: text,
  highlight,
  textColor,
  bordered,
}: HighlightedTextProps) => (
  <Typography>
    <StyledHighlightedText
      bordered={bordered}
      textColor={textColor}
      highlight={highlight}
    >
      {text}
    </StyledHighlightedText>
  </Typography>
)
