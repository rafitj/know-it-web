import React from 'react'
import { Box, Flex } from 'reflexbox'
import Highlight from 'ui/base/Highlighter'
import PrimaryButton from 'ui/components/Button/PrimaryButton'
import SecondaryButton from 'ui/components/Button/SecondaryButton'
import BigText from 'ui/components/Typography/BigText'
import Text from 'ui/components/Typography/Text'

export default () => {
  return (
    <>
      <Flex>
        <Box width={[1 / 2]} p={5}>
          <Flex flexDirection="column">
            <Box>
              <BigText>Learn to Learn.</BigText>
            </Box>
            <Box>
              <Text>
                KnowIt is changing how you learn. Study 20% faster with
                personalized and
                <Highlight highlight="blue">
                  premade study schedules
                </Highlight>{' '}
                to keep you on track, smart
                <Highlight highlight="red">automatic flashcards</Highlight> that
                will help you practice, a
                <Highlight highlight="yellow">new notepad</Highlight> built
                different for every topic and a learning experience you will
                never forget, literally.
              </Text>
            </Box>
            <Box mt={2}>
              <PrimaryButton text="Sign Up" />
              <SecondaryButton text="Learn More" />
            </Box>
          </Flex>
        </Box>
        <Box width={[1 / 2]}>
          <Flex>
            <Box backgroundColor="red"/>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}
