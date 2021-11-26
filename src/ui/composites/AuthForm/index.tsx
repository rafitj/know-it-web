import React from 'react'
import { Card } from 'ui/base/Card'
import { BigText } from 'ui/components/Typography/BigText'
import { Flex, Box } from 'reflexbox';
import { RedButton } from 'ui/components/Button/RedButton';
import { BlueButton } from 'ui/components/Button/BlueButton';
import { Send, Google, Facebook } from 'grommet-icons';
import { SimpleInput } from 'ui/components/Input/SimpleInput';
import { HighlightedText } from 'ui/components/Typography/HighlightedText';
import { Link } from 'react-router-dom';
import { Line } from 'ui/components/Line';
import { PrimaryButton } from 'ui/components/Button/PrimaryButton';

export interface IAuthForm {
    title: string,
    emailText: string,
    googleText: string,
    fbText: string,
    rerouteText: string,
    rerouteBtnText: string
    reroute: string
}

export const AuthForm = ({ title, emailText, googleText, fbText, rerouteBtnText, rerouteText, reroute }: IAuthForm) => {
    return (
        <Flex justifyContent='center' p={6}>
            <Flex flexDirection="column" alignItems="center" justifyContent="center" >
                <BigText>{title}</BigText>
                <Box width={1} my={2}>
                    <Card>
                        <Box alignItems="center">
                            <Box >
                                <SimpleInput placeholder="Email" />

                            </Box>
                            <Box my={3}>
                                <SimpleInput password placeholder="Password" />
                            </Box>
                            <PrimaryButton icon={<Send/>} text={emailText} />
                        </Box>
                    </Card>
                </Box>
                <Box width={1} my={2}>
                    <RedButton icon={<Google />} text={googleText} block />
                </Box>
                <Box width={1} my={2} mb={3}>
                    <BlueButton icon={<Facebook />} text={fbText} block />
                </Box>
                <Line />
                <Box mt={2}>
                    {rerouteText}
                </Box>
                <Box mt={3}>
                    <Link to={reroute}>
                        <HighlightedText highlight="black">
                            {rerouteBtnText}
                        </HighlightedText>
                    </Link>
                </Box>
            </Flex>
        </Flex>
    )
}
