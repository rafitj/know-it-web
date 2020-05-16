import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../base/theme'
import { Text as AntDText, Typography } from '../../../base/Typography'

export interface TextProps {
  children?: React.ReactNode
  invert?: boolean
}

const StyledText = styled(AntDText)<TextProps>`
  color: ${(props) => (props.invert ? colors.white : colors.black)};
  font-size: 1.1rem;
  line-height: 2.25;
`

export const Text = ({ children: text, invert }: TextProps) => (
  <Typography>
    <StyledText invert={invert}>{text}</StyledText>
  </Typography>
)
