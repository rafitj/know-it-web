import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex } from 'reflexbox'
import { PrimaryButton } from '../../components/Button/PrimaryButton'
import { Card } from '../../components/Card'
import { BigText } from '../../components/Typography/BigText'
import { StrongText } from '../../components/Typography/StrongText'
import { Text } from '../../components/Typography/Text'
import { Nav } from '../../composites/Nav'
import { ReactComponent as MobileDownloadImage } from 'ui/assets/MobileDownload.svg'
import DesktopDownloadImage from 'ui/assets/DesktopDownload.svg'
import WebDownloadImage from 'ui/assets/WebDownload.svg'

export class Downloads extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Flex flexDirection="column" alignItems="center" p={5}>
          <BigText>Downloads</BigText>
          <Box mb={4} textAlign="center">
            <Text>
              KnowIt is coming to all platforms and mediums so you can learn
              when you want, where you want and how you want.
            </Text>
          </Box>
          <Flex width={1} px={5}>
            <Box width={1 / 3} mx={4}>
              <Card>
                <StrongText>Web</StrongText>
                <Text>The classic web app. Mmm.</Text>
                <Box my={2}>
                  <img src={WebDownloadImage} alt={'Web Download'} />
                </Box>
                <Link to="/note-space">
                  <PrimaryButton text="Start Now!" />
                </Link>
              </Card>
            </Box>
            <Box width={1 / 3} mx={4}>
              <Card>
                <StrongText>Desktop</StrongText>
                <Text>Studying with WiFi is too main stream.</Text>
                <Box my={2}>
                  <img src={DesktopDownloadImage} alt={'Desktop Download'} />
                </Box>
                <PrimaryButton disabled={true} text="Coming Soon" />
              </Card>
            </Box>
            <Box width={1 / 3} mx={4}>
              <Card>
                <StrongText>Mobile</StrongText>
                <Text>For those last minute reviewers.</Text>
                <Box my={2}>
                  <MobileDownloadImage />
                </Box>
                <PrimaryButton disabled={true} text="Coming Soon" />
              </Card>
            </Box>
          </Flex>
        </Flex>
      </>
    )
  }
}
