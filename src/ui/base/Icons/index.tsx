import React from 'react'
import { Box, BoxProps } from 'reflexbox'
import styled from 'styled-components'
import { color, colors } from '../theme'
export * from 'react-feather'

export interface IIconWrap extends BoxProps {
  bgcolor?: color
  disabled?: boolean
  children?: React.ReactNode
}
export const IconWrap = styled(Box)<IIconWrap>`
  transition: all 0.25s ease;
  &:hover {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    background-color: ${(props) =>
      props.bgcolor ? colors[props.bgcolor] : 'transparent'};
  }
  display: inline-block;
  height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
  border-radius: 5px;
  padding: 4px;
`
