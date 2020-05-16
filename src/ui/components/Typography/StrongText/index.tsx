import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../base/theme'
import { Title, Typography } from '../../../base/Typography'

export interface StrongTextProps {
  children?: React.ReactNode
}

const StyledStrongText = styled(Title)`
  color: ${colors.black};
  font-size: 1.2rem;
  font-weight: bold;
  margin: 16px;
`

export const StrongText = ({ children: text }: StrongTextProps) => (
  <Typography>
    <StyledStrongText>{text}</StyledStrongText>
  </Typography>
)
