import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../base/theme'
import Typography, { Text } from '../../../base/Typography'

export interface HeaderProps {
  children?: React.ReactNode
}

const Header = styled(Text)`
  color: ${colors.black};
  font-size: 2rem;
  margin: 16px;
`

export default ({ children: text }: HeaderProps) => (
  <Typography>
    <Header>{text}</Header>
  </Typography>
)
