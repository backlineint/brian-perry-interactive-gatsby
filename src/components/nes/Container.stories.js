import React from 'react'
import { withKnobs, boolean } from "@storybook/addon-knobs";

import Container from './Container'

export default {
  title: 'Container',
  decorators: [withKnobs]
};

export const containerBusiness = () => (
  <Container business={boolean("Business", true)} />
)

export const containerPleasure = () => (
  <Container business={boolean("Business", false)} />
)