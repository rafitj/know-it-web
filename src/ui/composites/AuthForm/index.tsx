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
  errorMessage?: string
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

export class AuthForm extends React.Component<IAuthForm> {
  render() {
    return (
      <>
        <Flex justifyContent="center" p={6}>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <BigText>{this.props.title}</BigText>
            <Box width={1} my={2}>
              <Card>
                <Box alignItems="center" mb={this.props.showError ? 1 : 0}>
                  {this.props.hasNameInput && (
                    <Box>
                      <SimpleInput
                        placeholder="Name"
                        onChange={(e) => {
                          if (this.props.setName) {
                            this.props.setName(e.target.value)
                          }
                        }}
                      />
                    </Box>
                  )}
                  <Box my={3}>
                    <SimpleInput
                      placeholder="Email"
                      onChange={(e) => {
                        this.props.setEmail(e.target.value)
                      }}
                    />
                  </Box>
                  <Box my={3}>
                    <SimpleInput
                      password={true}
                      placeholder="Password"
                      onChange={(e) => {
                        this.props.setPassword(e.target.value)
                      }}
                    />
                  </Box>
                  <PrimaryButton
                    icon={<Send />}
                    text={this.props.emailText}
                    onClick={this.props.emailClick}
                  />
                  {this.props.showError && (
                    <Box mt={3}>
                      <StyledAlert
                        message=""
                        description={this.props.errorMessage}
                        closable={true}
                        onClose={this.props.closeError}
                      />
                    </Box>
                  )}
                </Box>
              </Card>
            </Box>
            <Box width={1} my={2}>
              <RedButton
                icon={<Google />}
                text={this.props.googleText}
                block={true}
              />
            </Box>
            <Box width={1} my={2} mb={3}>
              <BlueButton
                icon={<Facebook />}
                text={this.props.fbText}
                block={true}
              />
            </Box>
            <Line />
            <Box mt={2}>{this.props.rerouteText}</Box>
            <Box mt={3}>
              <Link to={this.props.reroute}>
                <HighlightedText highlight="black">
                  {this.props.rerouteBtnText}
                </HighlightedText>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </>
    )
  }
}
