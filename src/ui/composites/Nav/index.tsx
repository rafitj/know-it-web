import React from 'react'
import { Box, Flex } from 'reflexbox'
import { HighlightedText } from 'ui/components/Typography/HighlightedText'
import { HighlightText } from 'ui/components/Typography/HighlightText'
import { StrongText } from 'ui/components/Typography/StrongText'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" px={5} py={2} style={{ borderBottom: '2px solid #1c1c1c' }}>
      <Box>
        <StrongText>Logo</StrongText>
      </Box>
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Box mx={3}>
            <HighlightText highlight="red">Product</HighlightText>
          </Box>
          <Box mx={3}>
            <HighlightText highlight="blue">Download</HighlightText>
          </Box>
          <Box mx={3}>
            <HighlightText highlight="green">Pricing</HighlightText>
          </Box>
          <Box mx={3}>
            <Link to='/signup'>
              <HighlightedText highlight="black">Sign Up</HighlightedText>
            </Link>
          </Box>
          <Box mx={3}>
            <HighlightedText highlight="black">Login</HighlightedText>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
