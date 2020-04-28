import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../base/theme'
import Typography, { Title } from '../../../base/Typography'

export interface StrongTextProps {
  children?: React.ReactNode
}

const StrongText = styled(Title)`
  color: ${colors.black};
  font-size: 1.2rem;
  font-weight: bold;
  margin: 16px;
`

export default ({ children: text }: StrongTextProps) => (
  <Typography>
    <StrongText>{text}</StrongText>
  </Typography>
)
