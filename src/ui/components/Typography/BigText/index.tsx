import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../base/theme'
import Typography, { Title } from '../../../base/Typography'

export interface BigTextProps {
  children?: React.ReactNode
}

const BigText = styled(Title)`
  color: ${colors.black};
  font-size: 6rem;
`

export default ({ children: text }: BigTextProps) => (
  <Typography>
    <BigText>{text}</BigText>
  </Typography>
)
