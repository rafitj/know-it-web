import React from 'react'
import PrimaryButtonC from './PrimaryButton'
import SecondaryButtonC from './SecondaryButton'

export default {
  title: 'Button',
}

export const PrimaryButton = () => <PrimaryButtonC text="Sign up" />

export const SecondaryButton = () => <SecondaryButtonC text="Learn more" />
