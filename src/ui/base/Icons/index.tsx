import React from 'react'
import { Box, BoxProps } from 'reflexbox'
import styled from 'styled-components'
import { color, colors } from '../theme'
export * from 'react-feather'

export interface IIconWrap extends BoxProps {
  bgcolor?: color
  children?: React.ReactNode
}
export const IconWrap = styled(Box)<IIconWrap>`
  transition: all 0.25s ease;
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.bgcolor ? colors[props.bgcolor] + '90' : 'transparent'};
  }
  display: inline-block;
  background-color: ${(props) =>
    props.bgcolor ? colors[props.bgcolor] : 'transparent'};
`
