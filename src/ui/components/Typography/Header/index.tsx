import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../base/theme'
import { Text, Typography } from '../../../base/Typography'

export interface HeaderProps {
  children?: React.ReactNode
}

const StyledHeader = styled(Text)`
  color: ${colors.black};
  font-size: 2rem;
  margin: 16px;
`

export const Header = ({ children: text }: HeaderProps) => (
  <Typography>
    <StyledHeader>{text}</StyledHeader>
  </Typography>
)
