import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../base/theme'
import Typography, { Title } from '../../../base/Typography'

export interface SubHeaderProps {
  children?: React.ReactNode
}

const SubHeader = styled(Title)`
  color: ${colors.black};
  font-size: 1.5rem;
  margin: 16px;
`

export default ({ children: text }: SubHeaderProps) => (
  <Typography>
    <SubHeader>{text}</SubHeader>
  </Typography>
)
