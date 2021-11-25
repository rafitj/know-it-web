import React from 'react'
import { Box, Flex } from 'reflexbox'
import HighlightText from 'ui/components/Typography/HighlightText'
import StrongText from 'ui/components/Typography/StrongText'

export default () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" px={5} py={2}>
      <Box>
        <StrongText>Logo</StrongText>
      </Box>
      <Box>
        <Flex justifyContent="space-between">
          <Box mx={3}>
            <HighlightText highlight="red">Product</HighlightText>
          </Box>
          <Box mx={3}>
            <HighlightText highlight="blue">Download</HighlightText>
          </Box>
          <Box mx={3}>
            <HighlightText highlight="green">Pricing</HighlightText>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
