import { Facebook, Google, Send } from 'grommet-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex } from 'reflexbox'
import { Card } from 'ui/base/Card'
import { BlueButton } from 'ui/components/Button/BlueButton'
import { PrimaryButton } from 'ui/components/Button/PrimaryButton'
import { RedButton } from 'ui/components/Button/RedButton'
import { SimpleInput } from 'ui/components/Input/SimpleInput'
import { Line } from 'ui/components/Line'
import { BigText } from 'ui/components/Typography/BigText'
import { HighlightedText } from 'ui/components/Typography/HighlightedText'

export interface IAuthForm {
  title: string
  emailText: string
  googleText: string
  fbText: string
  rerouteText: string
  rerouteBtnText: string
  reroute: string
}

export const AuthForm = ({
  title,
  emailText,
  googleText,
  fbText,
  rerouteBtnText,
  rerouteText,
  reroute,
}: IAuthForm) => {
  return (
    <>
      <Flex justifyContent="center" p={6}>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <BigText>{title}</BigText>
          <Box width={1} my={2}>
            <Card>
              <Box alignItems="center">
                <Box>
                  <SimpleInput placeholder="Email" />
                </Box>
                <Box my={3}>
                  <SimpleInput password={true} placeholder="Password" />
                </Box>
                <PrimaryButton icon={<Send />} text={emailText} />
              </Box>
            </Card>
          </Box>
          <Box width={1} my={2}>
            <RedButton icon={<Google />} text={googleText} block={true} />
          </Box>
          <Box width={1} my={2} mb={3}>
            <BlueButton icon={<Facebook />} text={fbText} block={true} />
          </Box>
          <Line />
          <Box mt={2}>{rerouteText}</Box>
          <Box mt={3}>
            <Link to={reroute}>
              <HighlightedText highlight="black">
                {rerouteBtnText}
              </HighlightedText>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}
