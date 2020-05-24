import { observer } from 'mobx-react'
import React from 'react'
import { LandingPage } from '../../composites/LandingPage'
import { Nav } from '../../composites/Nav'

@observer
export class Home extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <LandingPage />
        {/* <Footer /> */}
      </>
    )
  }
}
