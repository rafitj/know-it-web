import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../base/theme'
import { Title, Typography } from '../../../base/Typography'

export interface BigTextProps {
  children?: React.ReactNode
}

const StyledBigText = styled(Title)`
  color: ${colors.black} !important;
  font-size: 4rem !important;
  margin-bottom: 1rem !important;
`

export const BigText = ({ children: text }: BigTextProps) => (
  <Typography>
    <StyledBigText>{text}</StyledBigText>
  </Typography>
)
