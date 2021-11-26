import React from 'react'
import styled from 'styled-components'
import { Nav } from '../../composites/Nav'
import { LoginForm } from './LoginForm'

const Container = styled.div``

export const Login = () => {
  return (
    <Container>
      <Nav />
      <LoginForm />
    </Container>
  )
}
