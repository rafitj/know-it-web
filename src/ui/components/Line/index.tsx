import React from 'react'
import styled from 'styled-components'
import { color, colors } from 'ui/base/theme'

const StyledLine = styled.div<LineProps>`
  background-color: ${(props) =>
    props.color ? colors[props.color] : colors.black};
  height: 2px;
  width: 100%;
  margin: 8px 0;
`
interface LineProps {
  color?: color
}
export const Line = ({ color }: LineProps) => <StyledLine color={color} />
