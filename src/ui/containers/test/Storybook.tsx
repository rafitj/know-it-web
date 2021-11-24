import React from 'react'
import Card from '../../base/Card'
import Highlighter from '../../base/Highlighter'
import BlueButton from '../../components/Buttons/BlueButton'
import PrimaryButton from '../../components/Buttons/PrimaryButton'
import RedButton from '../../components/Buttons/RedButton'
import SecondaryButton from '../../components/Buttons/SecondaryButton'
export default () => (
  <div>
    <PrimaryButton text="Sign up" />
    <SecondaryButton text="Learn more" />
    <RedButton text="Join with Google" />
    <BlueButton text="Join with Facebook" />
    <Card>Hi</Card>
    <Highlighter highlight="red">hey</Highlighter>
  </div>
)
