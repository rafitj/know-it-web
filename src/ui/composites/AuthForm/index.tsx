import { Alert } from 'antd'
import { Facebook, Google, Send } from 'grommet-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import { Card } from 'ui/base/Card'
import { BlueButton } from 'ui/components/Button/BlueButton'
import { PrimaryButton } from 'ui/components/Button/PrimaryButton'
import { RedButton } from 'ui/components/Button/RedButton'
import { SimpleInput } from 'ui/components/Input/SimpleInput'
import { Line } from 'ui/components/Line'
import { BigText } from 'ui/components/Typography/BigText'
import { HighlightedText } from 'ui/components/Typography/HighlightedText'
import { colors } from '../../base/theme'

export interface IAuthForm {
  title: string
  emailText: string
  googleText: string
  fbText: string
  rerouteText: string
  rerouteBtnText: string
  reroute: string
  hasNameInput?: boolean
  setPassword: (e: string) => void
  setName?: (s: string) => void
  setEmail: (s: string) => void
  emailClick: () => void
  showError?: boolean
  closeError: () => void
}

const StyledAlert = styled(Alert)`
  border-radius: 5px;
  border: 2px solid ${colors.black};
  background-color: ${colors.red};
  .ant-alert-message {
    display: none;
  }
  .ant-alert-description {
    font-weight: bold;
  }
`

export const AuthForm = ({
  title,
  emailText,
  googleText,
  fbText,
  rerouteBtnText,
  rerouteText,
  reroute,
  hasNameInput,
  setPassword,
  setEmail,
  setName,
  emailClick,
  showError,
  closeError,
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
              <Box alignItems="center" mb={showError ? 1 : 0}>
                {hasNameInput && setName && (
                  <Box>
                    <SimpleInput
                      placeholder="Name"
                      onChange={(e) => {
                        setName(e.target.value)
                      }}
                    />
                  </Box>
                )}
                <Box my={3}>
                  <SimpleInput
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                  />
                </Box>
                <Box my={3}>
                  <SimpleInput
                    password={true}
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                </Box>
                <PrimaryButton
                  icon={<Send />}
                  text={emailText}
                  onClick={emailClick}
                />
                {showError && (
                  <Box mt={3}>
                    <StyledAlert
                      message=""
                      description="Bro wtf are you doing?"
                      type="error"
                      closable={true}
                      onClose={closeError}
                    />
                  </Box>
                )}
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
