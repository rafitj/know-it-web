import React from 'react'
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
  </div>
)
