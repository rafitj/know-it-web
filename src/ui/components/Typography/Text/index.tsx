import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../base/theme'
import Typography, { Title } from '../../../base/Typography'

export interface TextProps {
  children?: React.ReactNode
  white?: boolean
}

const Text = styled(Title)<TextProps>`
  color: ${(props) => (props.white ? colors.white : colors.black)};
  font-size: 1rem;
  margin: 16px;
  line-height: 1.7;
`

export default ({ children: text, white }: TextProps) => (
  <Typography>
    <Text white={white}>{text}</Text>
  </Typography>
)
