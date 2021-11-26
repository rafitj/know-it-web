import React from 'react'
import styled from 'styled-components'
import { colors } from 'ui/base/theme'

const StyledLine = styled.div`
  background-color: ${colors.black};
  height: 2px;
  width: 100%;
  margin: 8px 0;
`

export const Line = () =>  <StyledLine/>
