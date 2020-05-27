import React from 'react'
import styled from 'styled-components'
import { color, colors } from '../../../base/theme'
import { Text, Typography } from '../../../base/Typography'

export interface SubHeaderProps {
  color?: color
  children?: React.ReactNode
}

const StyledSubHeader = styled(Text)<SubHeaderProps>`
  color: ${(props) => (props.color ? colors[props.color] : colors.black)};
  font-size: 1.5rem;
  font-weight: bold;
`

export const SubHeader = ({
  children: text,
  color: textColor,
}: SubHeaderProps) => (
  <Typography>
    <StyledSubHeader color={textColor}>{text}</StyledSubHeader>
  </Typography>
)
