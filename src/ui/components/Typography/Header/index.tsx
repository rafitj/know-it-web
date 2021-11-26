import React from 'react'
import styled from 'styled-components'
import { color, colors } from '../../../base/theme'
import { Text, Typography } from '../../../base/Typography'

export interface HeaderProps {
  children?: React.ReactNode
  color?: color
}

const StyledHeader = styled(Text)<HeaderProps>`
  color: ${(props) => (props.color ? props.color : colors.black)};
  font-size: 2rem;
  margin: 16px;
`

export const Header = ({ children: text, color }: HeaderProps) => (
  <Typography>
    <StyledHeader color={color}>{text}</StyledHeader>
  </Typography>
)
