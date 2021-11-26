import React from 'react'
import { Box, Flex } from 'reflexbox'
import LandingPhoto from 'ui/assets/LandingPhoto.svg'
import { Highlighter } from 'ui/base/Highlighter'
import { PrimaryButton } from 'ui/components/Button/PrimaryButton'
import { SecondaryButton } from 'ui/components/Button/SecondaryButton'
import { BigText } from 'ui/components/Typography/BigText'
import { Text } from 'ui/components/Typography/Text'

export const LandingPage = () => {
  return (
    <Flex>
      <Box width={[1 / 2]} p={6} pr={1}>
        <Flex flexDirection="column">
          <Box ml={2}>
            <BigText>Learn Smart.</BigText>
          </Box>
          <Box ml={2}>
            <Text>
              We are changing how you learn. Study 20% faster with
              personalized and
                <Highlighter highlight="blue">
                premade study schedules
                </Highlighter>
                to keep you on track, smart, accurate and
                <Highlighter highlight="red">automatic flashcards</Highlighter>
                that will help you practice, a simple but awesome
                <Highlighter highlight="yellow">new notepad</Highlighter>built
                to organize your thoughts and a learning experience you will
                never forget, literally.
              </Text>
          </Box>
          <Box mt={3}>
            <PrimaryButton text="Sign Up" />
            <SecondaryButton text="Learn More" />
          </Box>
        </Flex>
      </Box>
      <Box width={[1 / 2]}>
        <Flex>
          <Box pr={5} width={'100%'} height={'100%'} pl={1}>
            <img src={LandingPhoto} alt="landing" height={'100%'} />
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
