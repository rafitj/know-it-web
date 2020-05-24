import React from 'react'
import { LandingPage } from '../../composites/LandingPage'
import { Nav } from '../../composites/Nav'
import { UserStore } from '../../../stores/UserStore';
import { observer } from 'mobx-react';

@observer
export class Home extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <LandingPage />
        {/* <Footer /> */}
        {UserStore.isSignedIn ? 'SIGNED IN!' : "NOT SIGNED IN!"}
      </>
    )
  }
}