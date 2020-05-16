import React from 'react'
import { Box, BoxProps } from 'reflexbox'
import styled from 'styled-components'
import { color, colors } from '../theme'
export * from 'grommet-icons'

export interface IIconWrap extends BoxProps {
  iconColor?: color
  children?: React.ReactNode
}
export const IconWrap = styled(Box)<IIconWrap>`
  svg {
    fill: ${(props) =>
      props.iconColor ? colors[props.iconColor] : colors.black};
    stroke: ${(props) =>
      props.iconColor ? colors[props.iconColor] : colors.black};
  }
  &:hover {
    cursor: pointer;
  }
  display: inline-block;
`
