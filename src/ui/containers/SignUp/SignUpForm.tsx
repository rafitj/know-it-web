import React from 'react'
import { Card } from 'ui/base/Card'
import { BigText } from 'ui/components/Typography/BigText'
import { Flex, Box } from 'reflexbox';

export const SignUpForm = () => {
  return (
    <Flex justifyContent='center'>
      <Box>
        <BigText>Register.</BigText>

        <Card>
        </Card>
      </Box>
    </Flex>
  )
}
