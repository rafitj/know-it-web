import React from 'react'
import { Flex } from 'reflexbox'
import { BigText } from '../../components/Typography/BigText'
import { Text } from '../../components/Typography/Text'
import { Nav } from '../../composites/Nav'

export class About extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Flex width={1} p={5} flexDirection="column" alignItems="center">
          <BigText>Our Mission</BigText>
          <Text>KnowIt is the best app ever.</Text>
        </Flex>
      </>
    )
  }
}
