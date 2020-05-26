import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex } from 'reflexbox'
import { HighlightedText } from 'ui/components/Typography/HighlightedText'
import { HighlightText } from 'ui/components/Typography/HighlightText'
import { StrongText } from 'ui/components/Typography/StrongText'
import { UserStore } from '../../../stores/UserStore'

export class Nav extends React.Component {
  render() {
    return (
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={5}
        py={2}
        style={{ borderBottom: '2px solid #1c1c1c' }}
      >
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
            {UserStore.isSignedIn ? (
              <Box mx={3}>
                <Link to="/note-space">
                  <HighlightedText highlight="black">
                    Note Space
                  </HighlightedText>
                </Link>
              </Box>
            ) : (
              <>
                <Box mx={3}>
                  <Link to="/signup">
                    <HighlightedText highlight="black">Sign Up</HighlightedText>
                  </Link>
                </Box>
                <Box mx={3}>
                  <Link to="/login">
                    <HighlightedText highlight="black">Login</HighlightedText>
                  </Link>
                </Box>
              </>
            )}
          </Flex>
        </Box>
      </Flex>
    )
  }
}
