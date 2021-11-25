import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../base/theme'
import Typography, { Text as AntDText } from '../../../base/Typography'

export interface TextProps {
  children?: React.ReactNode
  invert?: boolean
}

const Text = styled(AntDText)<TextProps>`
  color: ${(props) => (props.invert ? colors.white : colors.black)};
  font-size: 1rem;
  margin: 16px;
  line-height: 1.7;
  padding: 8px;
`

export default ({ children: text, invert }: TextProps) => (
  <Typography>
    <Text invert={invert}>{text}</Text>
  </Typography>
)
