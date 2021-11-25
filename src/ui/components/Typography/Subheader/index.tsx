import React from 'react'
import styled from 'styled-components'
import { color, colors } from '../../../base/theme'
import Typography, { Text } from '../../../base/Typography'

export interface SubHeaderProps {
  color?: color
  children?: React.ReactNode
}

const SubHeader = styled(Text)<SubHeaderProps>`
  color: ${(props) => (props.color ? colors[props.color] : colors.black)};
  font-size: 1.5rem;
  margin: 16px;
`

export default ({ children: text, color }: SubHeaderProps) => (
  <Typography>
    <SubHeader color={color}>{text}</SubHeader>
  </Typography>
)
